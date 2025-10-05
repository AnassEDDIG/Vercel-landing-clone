import { TbWorld } from 'react-icons/tb';
import { LuGitMerge } from 'react-icons/lu';
import { RiTerminalLine } from 'react-icons/ri';
import { CTA } from './CTA'; // Component containing the Call-to-Action content (Headline, buttons, etc.)
import { useEffect, useState } from 'react';
import plus from '../../assets/icons/plus.svg'; // Decorative icon
import triangle from '../../assets/icons/triangle.svg'; // Vercel-like logo/decoration
import styles from './Hero.module.css';

export const Hero = () => {
    // State to track if the screen is considered "small" (mobile)
    const [isSmall, setIsSmall] = useState(false);

    /**
     * useEffect: Manages the window resize listener to update the 'isSmall' state.
     * This is crucial for dynamically changing the grid size based on screen width.
     */
    useEffect(() => {
        // Function to check if the width is less than the 'sm' breakpoint (640px in Tailwind default)
        const check = () => setIsSmall(window.innerWidth < 640);

        check(); // Initial check on mount
        window.addEventListener('resize', check); // Add listener

        // Cleanup function runs on unmount to prevent memory leaks
        return () => window.removeEventListener('resize', check);
    }, []); // Empty dependency array ensures it runs only once on mount

    // Dynamic grid size calculations based on screen size:
    const cols = isSmall ? 8 : 12; // Mobile grid: 8 columns, Desktop grid: 12 columns
    const rows = isSmall ? 4 : 8; // Mobile grid: 4 rows, Desktop grid: 8 rows

    // Calculates the number of grid cells needed for the filler background.
    // The total is cols * rows, minus 40 cells on desktop to make room for the CTA and other content.
    const filler = cols * rows - (isSmall ? 0 : 40);

    return (
        <section className="relative">
            {/* Decorative plus icon (top left) */}
            <img
                className="absolute -top-[10px] -left-[10px]"
                src={plus}
                alt="plus sign illustration"
            />

            {/* Mobile CTA: Renders the CTA component only on small screens (hidden above 'sm') */}
            <div className="sm:hidden">
                <CTA />
            </div>

            {/* --- Main Grid Container (The Guide Grid) --- */}
            <div
                className="relative grid grid-cols-8 sm:grid-cols-12 sm:grid-row-8 auto-rows-fr border-t border-l
                border-(--guide-color)"
            >
                {/* Dynamic Grid Filler: Renders the repeating squares for the guide grid background */}
                {Array.from({ length: filler }, (_, i) => (
                    <div
                        key={i}
                        // Applies right and bottom borders to create the grid cell appearance
                        className="border-r border-b border-(--guide-color) aspect-square"
                    ></div>
                ))}

                {/* Desktop CTA Placeholder: This div spans the grid to hold the CTA content on large screens */}
                <div
                    // Hidden on mobile, shown on desktop
                    className="hidden sm:block border-r border-b border-(--guide-color) 
                    /* Grid span: starts at column 2, spans 10 columns; starts at row 2, spans 4 rows */
                    sm:col-[2/span_10] sm:row-[2/span_4]"
                >
                    <CTA />
                </div>

                {/* Background Gradient/Effect Container (Needs CSS for 'hero-gradient-bg') */}
                <div className={styles["hero-gradient-bg"]}></div>

                {/* Triangle Logo/Decoration */}
                <img
                    // Absolute positioning and z-index to place it over the grid.
                    className="absolute z-10 
                    /* Mobile placement: column 3, span 4 columns; row 2, span 2 rows */
                    col-[3/span_4] row-[2/span_2] 
                    /* Desktop adjustment: column 5, span 4 columns; row 6, span 2 rows */
                    sm:col-[5/span_4] sm:row-[6/span_2] w-full h-full "
                    src={triangle}
                    alt="Vercel's Triangle"
                />

                {/* Decorative plus icon (bottom right) */}
                <img
                    className="absolute -bottom-[9px] -right-[9px]"
                    src={plus}
                    alt="plus sign illustration"
                />
            </div>

            {/* --- Main Tagline Section (Below the Grid) --- */}
            <div className="border-x border-(--guide-color) min-h-56 flex items-center justify-center px-6">
                <p
                    className="text-2xl md:text-3xl font-semibold tracking-tight text-center leading-snug
                    text-balance"
                >
                    {/* First line of text with inline icon */}
                    <span>
                        Develop with your favorite tools{' '}
                        <RiTerminalLine className="inline-block" />
                    </span>
                    {/* Line break only visible on screens larger than mobile */}
                    <br className="hidden sm:block" />
                    {/* Second line of text with inline icons */}
                    <span>
                        Launch globally, instantly{' '}
                        <TbWorld className="inline-block" /> Keep pushing{' '}
                        <LuGitMerge className="inline-block" />
                    </span>
                </p>
            </div>
        </section>
    );
};
