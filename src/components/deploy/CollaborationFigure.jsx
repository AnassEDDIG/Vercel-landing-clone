import { FaArrowUp } from 'react-icons/fa'; // Icon used for the "approval" button

/**
 * CollaborationFigure: Renders a visual sequence of chat bubbles and cursors,
 * illustrating a collaborative review process in pre-production.
 */
export const CollaborationFigure = () => {
    return (
        // Main container with large vertical gap for the bubbles.
        <div className="flex flex-col gap-y-8 overflow-hidden p-(--padding-sm) lg:p-(--padding-lg)">
            {/* --- 1st Chat Bubble (Left-aligned, Self-start) --- */}
            <div
                className="p-3 text-xs xs:text-sm bg-(--color-black-900) border border-(--guide-color) shadow-sm
                rounded-xl self-start"
            >
                Swapped out the {/* Inline Code Styling */}
                <code className="bg-(--color-black-600) color-(--color-gray-500) py-0.5 px-2 rounded-sm">
                    button
                </code>{' '}
                for<span aria-hidden="true" className="xs:block"></span> some
                variants we needed
            </div>

            {/* --- 2nd Chat Bubble (Right-aligned, with Cursor/Name Indicator) --- */}
            <div className="flex">
                {/* Cursor/Name Indicator Container (Takes up available space on the left) */}
                <div className=" flex-1 relative">
                    <div className="absolute right-10 top-4">
                        {/* SVG: Acts as the Pointer/Cursor Shape (Filled with --bg-blue-accent) */}
                        <svg
                            className="absolute -top-4 -right-4"
                            fill="none"
                            height="18"
                            viewBox="0 0 17 18"
                            width="17"
                        >
                            <path
                                d="m15.504 3.11-2.968 12.296c-.27 1.114-1.772 1.309-2.316.299l-2.744-5.096-5.472-1.954C.916 8.266.892 6.737 1.967 6.315l11.864-4.662a1.25 1.25 0 0 1 1.673 1.457Zm-7.937 7.532.084-.236z"
                                fill="var(--bg-blue-accent)" // Cursor fill color
                                stroke="var(--color-black-900)" // Cursor stroke/outline
                                stroke-width="1.5"
                            />
                        </svg>
                        {/* Name Tag */}
                        <span className="px-1 py-0.5 text-xs font-medium text-black bg-(--bg-blue-accent) rounded-md">
                            Pranathi
                        </span>
                    </div>
                </div>

                {/* Chat Bubble Content (Right-aligned via ml-auto on its container) */}
                <div
                    className="p-3 text-xs xs:text-sm bg-(--color-black-900) border border-(--guide-color) shadow-sm
                    rounded-xl ml-auto"
                >
                    How about this instead
                </div>
            </div>

            {/* --- 3rd Chat Bubble (Left-aligned, with Cursor/Name Indicator on the right) --- */}
            <div className="flex">
                {/* Chat Bubble Content (Left-aligned via self-start) */}
                <div
                    className="p-3 text-xs xs:text-sm bg-(--color-black-900) border border-(--guide-color) shadow-sm
                    rounded-xl self-start"
                >
                    I like it. Does this work with
                    <span aria-hidden="true" className="block"></span> the brand
                    tweaks <strong>@mamuso</strong> ?
                </div>

                {/* Cursor/Name Indicator Container (Takes up available space on the right) */}
                <div className="flex-1 relative">
                    <div className="absolute left-12 bottom-4">
                        {/* SVG: Acts as the Pointer/Cursor Shape (Mirrored and Filled with --bg-red-accent) */}
                        <svg
                            className="absolute -top-4 -left-4 scale-x-[-1]" // scale-x-[-1] flips the SVG horizontally
                            fill="none"
                            height="18"
                            viewBox="0 0 17 18"
                            width="17"
                        >
                            <path
                                d="m15.504 3.11-2.968 12.296c-.27 1.114-1.772 1.309-2.316.299l-2.744-5.096-5.472-1.954C.916 8.266.892 6.737 1.967 6.315l11.864-4.662a1.25 1.25 0 0 1 1.673 1.457Zm-7.937 7.532.084-.236z"
                                fill="var(--bg-red-accent)" // Cursor fill color
                                stroke="var(--color-black-900)"
                                stroke-width="1.5"
                            />
                        </svg>
                        {/* Name Tag */}
                        <span className="px-1 py-0.5 text-xs font-medium text-black bg-(--bg-red-accent) rounded-md">
                            Rauno
                        </span>
                    </div>
                </div>
            </div>

            {/* --- 4th Chat Bubble (Right-aligned, Final Action) --- */}
            <div
                className="p-3 text-xs xs:text-sm bg-(--color-black-900) border border-(--guide-color) shadow-sm
                rounded-xl self-end flex items-center gap-4 relative"
            >
                {/* Content text */}
                <span className="border-r ">This looks great</span>{' '}
                {/* Approval Button/Icon */}
                <span className="bg-(--color-gray-100) p-1.5 rounded-full text-black">
                    <FaArrowUp />
                </span>
                {/* SVG: Acts as the Pointer/Cursor Shape (Right-aligned and Mirrored) */}
                <svg
                    className="absolute bottom-0 -right-8 scale-x-[-1]" // Flips and places outside the bubble
                    fill="none"
                    height="18"
                    viewBox="0 0 17 18"
                    width="17"
                >
                    <path
                        d="m15.504 3.11-2.968 12.296c-.27 1.114-1.772 1.309-2.316.299l-2.744-5.096-5.472-1.954C.916 8.266.892 6.737 1.967 6.315l11.864-4.662a1.25 1.25 0 0 1 1.673 1.457Zm-7.937 7.532.084-.236z"
                        fill="var(--bg-green-accent)" // "Approved" cursor color
                        stroke="var(--color-black-900)"
                        strokeWidth="1.5"
                    />
                </svg>
            </div>
        </div>
    );
};
