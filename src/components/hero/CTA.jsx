import { IoLogoVercel } from 'react-icons/io5'; // Icon used for the primary button

/**
 * CTA: Renders the primary call-to-action content (Headline, Tagline, and Buttons).
 * This component is used in two places: inside the main Hero grid (desktop) and above it (mobile).
 */
export const CTA = () => {
    return (
        <div
            className="p-6 lg:p-12 flex flex-col items-center justify-center gap-y-4 lg:justify-evenly h-full
            lg:gap-y-0 border border-(--guide-color) sm:border-0"
        >
            {/* Styling breakdown:
             * p-6 lg:p-12: Responsive padding (more padding on desktop).
             * flex flex-col items-center: Centers all content vertically and horizontally.
             * gap-y-4 lg:justify-evenly h-full lg:gap-y-0: Adjusts spacing and distribution for full height on desktop.
             * border border-t-0 border-(--guide-color): Applies a border below the grid (for mobile layout).
             * sm:border-0: Removes the border on screens larger than mobile, as the parent Hero component handles the border there.
             */}

            {/* --- Headline --- */}
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-center text-balance">
                Build and deploy on the AI Cloud.
            </h1>

            {/* --- Tagline/Description Container --- */}
            <div className="max-w-8/10 sm:max-w-full">
                <p
                    className="text-center text-sm md:text-base lg:text-xl/relaxed text-(--color-gray-500)
                    text-balance"
                >
                    Vercel provides the developer tools and cloud infrastructure
                    to build, scale, and secure a faster, more personalized web.
                </p>
            </div>

            {/* --- Buttons Container --- */}
            {/* Uses a responsive grid for button layout, ensuring they sit side-by-side */}
            <div className="grid grid-cols-2 gap-4 text-xs md:text-base">
                {/* Button 1: Start Deploying (Primary Action) */}
                <button
                    className="bg-(--color-gray-200) hover:opacity-90 text-(--color-black-900) flex items-center gap-2
                    px-4 py-2 lg:py-3 rounded-full font-medium cursor-pointer duration-200"
                >
                    <IoLogoVercel />
                    {/* Full text for larger screens */}
                    <span className="hidden sm:block">Start Deploying</span>
                    {/* Shorter text for mobile (to save space) */}
                    <span className="sm:hidden">Deploy</span>
                </button>

                {/* Button 2: Get a Demo (Secondary Action) */}
                <button
                    className="bg-(--color-black-900) hover:bg-(--color-black-600) text-(--color-gray-200) 
                    px-4 py-2 lg:py-3 rounded-full font-medium duration-200"
                >
                    Get a Demo
                </button>
            </div>
        </div>
    );
};
