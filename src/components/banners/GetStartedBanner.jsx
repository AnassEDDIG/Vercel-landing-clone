import plus from '../../assets/icons/plus.svg';

/**
 * GetStartedBanner: Renders a Call-to-Action section with dual paths:
 * starting a free deployment and exploring enterprise options.
 */
export const GetStartedBanner = () => {
    return (
        <div className="relative">
            {/* Decorative Plus Icon - Top Left Corner */}
            <img
                className="absolute -left-[11px] -top-[11px]"
                src={plus}
                alt="plus sign illustration"
            />

            {/* --- Main Content Grid (1-column on mobile, 3-column on large screens) --- */}
            <div className="grid grid-cols-1 lg:grid-cols-3 overflow-hidden">
                {/* --- Primary CTA Section (Col-span 2 on large screens) --- */}
                <div
                    className="p-(--padding-sm) py-12 lg:p-(--padding-lg) col-span-2 
                               flex flex-col items-center gap-6 lg:items-start 
                               border-b border-dashed border-(--guide-color) lg:border-0"
                >
                    {/* Main Headline & Text */}
                    <p className="text-xl lg:text-2xl text-balance text-center lg:text-start">
                        <span className="font-semibold">Ready to deploy?</span>{' '}
                        <span className="text-(--color-gray-500)">
                            Start building with a free account. Speak to an
                            expert for your{' '}
                            {/* Differentiated text for pricing tiers */}
                            <span className="text-[#528AFF]">Pro</span> or{' '}
                            <span className="text-[#BF7AF0]">Enterprise</span>{' '}
                            needs.
                        </span>
                    </p>

                    {/* CTA Buttons (Flex row for horizontal alignment) */}
                    <div className="flex items-center gap-4 text-xs sm:text-sm">
                        {/* Primary Button */}
                        <button
                            className="px-4 py-2.5 border rounded-full bg-(--color-gray-50) text-black
                                        hover:opacity-90 duration-200 min-w-[8rem]"
                        >
                            Start Deploying
                        </button>
                        {/* Secondary Button */}
                        <button className="px-4 py-2.5 border border-(--color-gray-alpha-200) rounded-full cursor-pointer bg-(--color-black-900) hover:bg-(--color-gray-900) duration-200 min-w-[8rem]">
                            Talk to an expert
                        </button>
                    </div>

                    {/* Decorative Grid Lines - Mobile/Small Screen Only */}
                    <div className="grid-cells-figure pointer-events-none absolute inset-0 grid grid-cols-2 lg:hidden -z-10">
                        {/* These divs create the dashed lines visually separating the sections on mobile */}
                        <div className="lg:col-start-2 lg:border-l border-dashed border-(--guide-color)"></div>
                        <div className="border-l border-dashed border-(--guide-color)"></div>
                    </div>
                </div>

                {/* --- Secondary CTA Section (Col-span 1 on large screens) --- */}
                <div className="p-(--padding-sm) py-12 lg:p-(--padding-lg) flex flex-col items-center gap-6 lg:items-start col-span-2 lg:col-span-1">
                    {/* Secondary Text Content */}
                    <p className="text-(--color-gray-500) text-balance text-center lg:text-start">
                        <span className="text-white font-medium">
                            Explore Vercel Enterprise
                        </span>{' '}
                        with an interactive product tour, trial, or a
                        personalized demo.
                    </p>

                    {/* Secondary Button */}
                    <button className="px-4 py-2.5 border border-(--color-gray-alpha-200) rounded-full cursor-pointer bg-(--color-black-900) hover:bg-(--color-gray-900) duration-200 text-sm">
                        Explore Entreprise
                    </button>
                </div>

                {/* Decorative Grid Lines - Large Screen Only */}
                <div className="hidden grid-cells-figure pointer-events-none absolute inset-0 lg:grid grid-cols-2 lg:grid-cols-3 lg:grid-rows-1">
                    {/* This visually draws the vertical dashed line between the primary and secondary CTA sections */}
                    <div className="lg:col-start-2 lg:border-l border-dashed border-(--guide-color)"></div>
                    <div className="border-l border-dashed border-(--guide-color)"></div>
                </div>
            </div>

            {/* Decorative Plus Icon - Bottom Right Corner */}
            <img
                className="absolute -right-[10px] -bottom-[10px]"
                src={plus}
                alt="plus sign illustration"
            />
        </div>
    );
};
