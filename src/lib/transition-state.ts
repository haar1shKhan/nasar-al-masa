// Tiny shared state between the page-transition curtain and page-level animations.
// While the curtain covers the viewport, incoming-page animations wait; they start as it lifts.

let covered = false;
const waiters = new Set<() => void>();

export const isCovered = () => covered;

export function setCovered(value: boolean) {
  covered = value;
  if (!value) {
    const run = [...waiters];
    waiters.clear();
    run.forEach((fn) => fn());
  }
}

/** Run `fn` now if the page is visible, otherwise as soon as the curtain lifts. Returns a cancel function. */
export function whenUncovered(fn: () => void): () => void {
  if (!covered) {
    fn();
    return () => {};
  }
  waiters.add(fn);
  return () => {
    waiters.delete(fn);
  };
}
