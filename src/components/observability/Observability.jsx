import { LuChartLine } from 'react-icons/lu'; // Icon for the feature title
import analyticsLarge from '../../assets/images/analytics-large-dark.avif'; // Large desktop image
import analyticsSmall from '../../assets/images/analytics-small-dark.avif'; // Small mobile image
import plus from '../../assets/icons/plus.svg'; // Decorative icon

/**
 * Observability: Renders a feature section that combines a headline with a large
 * analytics visualization image, using absolute positioning on desktop for effect.
 */
export const Observability = () => {
    return (
        // Main container. Sets the stage for the absolute positioning on desktop.
        <section className="relative flex flex-col sm:flex-row bg-(--color-black-900) border-b border-(--guide-color) p-(--padding-sm) lg:p-(--padding-lg)">
            {/* Decorative plus icon (absolute positioning in the bottom left) */}
            <img
                className="absolute -left-[11px] -bottom-[10px]"
                src={plus}
                alt="plus sign illustration"
            />

            {/* --- Feature Text Content Container --- */}
            <div className="sm:absolute sm:max-w-4/10">
                {/* Styling Breakdown:
                 * sm:absolute: KEY to the layout. On desktop, this makes the text float above the image.
                 * sm:max-w-4/10: Constrains the width of the text on desktop to avoid covering too much of the image.
                 */}

                {/* Feature Title Line (Icon and Text) */}
                <h2 className="flex items-center gap-2 text-(--color-gray-500) text-sm xs:text-base">
                    <LuChartLine />
                    Observability
                </h2>

                {/* Feature Headline and Tagline */}
                <div className="sm:text-lg lg:text-2xl mt-3 text-balance">
                    <strong>Route-aware observability.</strong>{' '}
                    <p className="text-(--color-gray-500) font-medium">
                        Monitor and analyze the performance and traffic of your
                        projects.
                    </p>
                </div>
            </div>

            {/* --- Image Visualization Container --- */}
            <div className="select-none pointer-events-none mt-10 md:mt-6 lg:mt-0">
                {/* Styling Breakdown:
                 * select-none pointer-events-none: Prevents users from accidentally dragging or interacting with the image.
                 * mt-10 md:mt-6 lg:mt-0: Responsive top margin to control spacing between text and image on mobile, and reduce it as screen size increases.
                 */}

                {/* Desktop Image (Hidden on mobile) */}
                <img
                    loading="lazy"
                    className="object-cover w-full h-full hidden sm:block"
                    src={analyticsLarge}
                    alt="A chart showing two lines that represent views and clicks of a website."
                />

                {/* Mobile Image (Hidden on desktop, uses a small version of the Desktop image) */}
                <img
                    loading="lazy"
                    className="mx-auto sm:hidden"
                    src={analyticsSmall}
                    alt="A chart showing two lines that represent views and clicks of a website."
                />
            </div>
        </section>
    );
};
