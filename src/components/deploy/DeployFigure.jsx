import { FaLock } from 'react-icons/fa'; // Lock icon for the browser bar
import deploTriangle from '../../assets/images/deploy-triangle.svg'; // Vercel logo/decoration
import styles from './Deploy.module.css'; // Custom CSS Module for effects like 'hollow-text' and 'fade-to-r'

/**
 * DeployFigure: Renders a visual stack of two components: a simulated Git terminal
 * and a simulated secure browser window, illustrating the deploy flow.
 */
export const DeployFigure = () => {
    return (
        <div className="flex flex-col">
            {/* --- 1. Top Element: Simulated Git Terminal Window --- */}
            <div className="p-3 border border-(--guide-color) rounded-xl min-w-[180px] w-8/10 sm:max-w-[340px]">
                {/* Window Controls (Red, Yellow, Green dots) - Styled with gray/alpha background */}
                <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-(--color-gray-alpha-200)"></div>
                    <div className="w-2 h-2 rounded-full bg-(--color-gray-alpha-200)"></div>
                    <div className="w-2 h-2 rounded-full bg-(--color-gray-alpha-200)"></div>
                </div>

                {/* Terminal Content (Simulated Git Push Output) */}
                <div
                    className={`mt-3 text-xs leading-relaxed font-mono
                    font-semibold text-nowrap overflow-hidden ${styles['fade-to-r']}`}
                >
                    {/* Styling Breakdown:
                     * font-mono: Ensures fixed-width text like a terminal.
                     * fade-to-r: Custom CSS module class that applies a gradient mask on the right edge (fading effect).
                     * text-nowrap overflow-hidden: Ensures the content stays on one line and is clipped, essential for the fade effect.
                     */}

                    {/* Git Push Command */}
                    <p className="flex items-center gap-2">
                        ▲
                        <span className="text-(--color-gray-500)">
                            ~ vercel-site/
                        </span>
                        git push
                    </p>

                    {/* Git Output Lines */}
                    <p>Enumerating objects: 1, done.</p>
                    <p>Counting objects: 100% (1/1), done.</p>
                    <p>Writing objects: 100% (1/1), 72 bytes, done.</p>
                    <p>Total 1 (delta 0), reused 0 (delta 0).</p>
                    <p>To github.com:vercel/vercel-site.git</p>
                    <p>&nbsp;&nbsp;&nbsp;21326a9..81663c3 main -&gt; main</p>
                </div>
            </div>

            {/* --- 2. Bottom Element: Simulated Browser Window (Overlaps the Terminal) --- */}
            <div
                className="-mt-8 p-3 border border-(--guide-color) min-w-[180px] w-8/10 sm:max-w-[340px] 
                rounded-xl ml-auto bg-(--color-black-900) z-20"
            >
                {/* Styling Breakdown:
                 * -mt-8: Key to the overlapping visual stack.
                 * ml-auto: Pushes the element to the right, creating the offset stack.
                 * z-20: Ensures this "browser" window sits on top of the "terminal" window.
                 * bg-(--color-black-900): Sets the dark background color.
                 */}

                {/* Browser/URL Bar (Top section) */}
                <div className="flex items-center gap-1.5 relative">
                    {/* Window Controls (Styled with accent colors) */}
                    <div className="w-2 h-2 rounded-full bg-(--bg-red-accent)"></div>
                    <div className="w-2 h-2 rounded-full bg-(--bg-blue-accent)"></div>
                    <div className="w-2 h-2 rounded-full bg-(--bg-green-accent)"></div>

                    {/* URL/Lock Indicator (Centered in the bar) */}
                    <div
                        className="absolute inset-x-0 text-center flex items-center justify-center
                        text-xs gap-1.5"
                    >
                        <FaLock className="text-[10px]" />
                        vercel.com
                    </div>
                </div>

                {/* Main Content Area */}
                <div
                    className={`mt-3 px-4 pt-4 border border-b-0 border-(--guide-color) text-center
                    relative ${styles['fade-to-b']}`}
                >
                    {/* Styling Breakdown:
                     * border border-b-0: Creates the illusion of the content pane being separated from the bottom border.
                     * fade-to-b: Custom CSS module class likely applies a gradient mask on the bottom edge (fading effect).
                     */}

                    {/* Prominent Hollow Text Headline */}
                    <h2
                        className={`${styles['hollow-text']} text-[clamp(1rem,6vw,40px)] 
                        sm:text-lg md:text-xl lg:text-3xl`}
                    >
                        What will you ship?
                    </h2>

                    {/* Vercel Triangle Logo */}
                    <div className="w-fit mx-auto mt-6">
                        <img
                            src={deploTriangle}
                            className="w-3/4 mx-auto"
                            alt="Vercel's Triangle"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
