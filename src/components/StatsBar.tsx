export default function StatsBar() {
    return (
        <section className="w-full bg-surface-container-lowest border-t border-b border-surface-container shadow-[0_4px_24px_-2px_rgba(15,23,42,0.04)] py-space-xl">
            <div className="max-w-[1440px] mx-auto px-margin">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter divide-y md:divide-y-0 md:divide-x divide-surface-container">
                    <div className="flex flex-col space-y-space-xs p-space-md">
                        <div className="font-display-hero text-display-hero text-primary-container tracking-tight leading-none font-bold">
                            500<span className="text-secondary">+</span>
                        </div>
                        <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Vertical Installations</span>
                    </div>
                    <div className="flex flex-col space-y-space-xs p-space-md">
                        <div className="font-display-hero text-display-hero text-primary-container tracking-tight leading-none font-bold">
                            1.2M<span className="text-secondary">+</span>
                        </div>
                        <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">CFM Engineered</span>
                    </div>
                    <div className="flex flex-col space-y-space-xs p-space-md">
                        <div className="font-display-hero text-display-hero text-primary-container tracking-tight leading-none font-bold">
                            99.8<span className="text-secondary">%</span>
                        </div>
                        <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">System Uptime</span>
                    </div>
                    <div className="flex flex-col space-y-space-xs p-space-md">
                        <div className="font-display-hero text-display-hero text-primary-container tracking-tight leading-none font-bold">
                            15<span className="text-secondary">+</span>
                        </div>
                        <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Years in UAE</span>
                    </div>
                </div>
            </div>
        </section>
    );
}