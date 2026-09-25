const fs = require('fs');

const gsapLib = `"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
`;

fs.writeFileSync('src/lib/gsap.ts', gsapLib);
console.log('src/lib/gsap.ts written.');
