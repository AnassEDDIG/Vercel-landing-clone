import { useEffect, useState, useRef } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { SmallScreensNav } from './SmallScreensNav'; // Mobile navigation component
import { Toolbox } from './toolbox/Toolbox'; // The desktop mega-menu container
import logo from '../../assets/icons/vercel.svg'; // Vercel logo asset
import styles from './Header.module.css'; // For scoped CSS/modules (e.g., button styles)

export const Header = () => {
    // State for UI control
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false); // Mobile menu visibility (hamburger state)
    const [scrolled, setScrolled] = useState(false); // Tracks if the user has scrolled past the top
    const [popup, setPopup] = useState(''); // Active mega-menu: 'products', 'solutions', 'resources', or ''

    // Ref to manage the timeout ID for hover delay, preventing menu flickering
    const timeoutRef = useRef(null);

    // --- Hover Handlers for Mega-Menu ---

    /**
     * Immediately opens the specified mega-menu and clears any pending close timer.
     * @param {string} menu - The menu key ('products', 'solutions', etc.)
     */
    const openPopup = (menu) => {
        // Clear any previous close timer to prevent flicker
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        setPopup(menu);
    };

    /**
     * Sets a small delay before closing the mega-menu. If openPopup runs before the
     * delay completes, the close operation is cancelled.
     */
    const closePopup = () => {
        // Set a timer (e.g., 150ms) to close the menu
        timeoutRef.current = setTimeout(() => {
            setPopup('');
        }, 150);
    };

    // --- useEffect Hooks ---

    /**
     * Effect to handle window resize. Ensures the mobile menu is closed when switching
     * to a large screen (xl breakpoint).
     */
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1280) {
                setIsMobileNavOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize(); // Run once on mount to check initial size
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    /**
     * Effect to handle scroll position. Toggles the 'scrolled' state, typically
     * used to add a border or shadow to the header for visual separation.
     */
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 0);
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Run once on mount to check initial scroll
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    /**
     * Effect to disable the body scroll so the user can scroll in the small screen nav if it's open
     */
    useEffect(() => {
        const body = document.body;

        if (isMobileNavOpen) {
            // When the mobile nav is open, add the no-scroll class
            body.classList.add('no-scroll');
        } else {
            // When it is closed, remove the no-scroll class
            body.classList.remove('no-scroll');
        }

        // Cleanup function: This is CRUCIAL. It runs when the component unmounts
        // or before the effect runs again (e.g., when the state changes to open again).
        return () => {
            body.classList.remove('no-scroll');
        };
    }, [isMobileNavOpen]); // Re-run this effect whenever isMobileNavOpen changes
    // --- Component Render ---

    return (
        <header
            // The sticky header, conditionally adding a bottom border when scrolled and not in mobile view
            className={`sticky top-0 bg-(--bg-primary) z-[9999] ${
                !isMobileNavOpen && scrolled ? 'border-b' : ''
            } border-(--guide-color)`}
        >
            {/* Mega-menu Wrapper: Only visible on desktop (xl:block) */}
            {popup && (
                <div
                    // This wrapper is CRITICAL for persistent hover logic.
                    // It ensures the menu stays open when the user moves the mouse
                    // from the nav link DOWN to the mega-menu content.
                    className="hidden xl:block"
                    onMouseEnter={() => openPopup(popup)}
                    onMouseLeave={closePopup}
                >
                    <Toolbox popup={popup} />
                </div>
            )}

            {/* Main Header Row */}
            <div
                className={`flex items-center justify-between px-6 h-16 bg-(--bg-primary) max-w-[1500px] mx-auto`}
            >
                <div className="flex items-center justify-between gap-10">
                    {/* Logo */}
                    <div className="w-[6rem]">
                        <img
                            className="object-cover"
                            src={logo}
                            alt="Vercel Logo"
                        />
                    </div>

                    {/* Desktop Navigation Links */}
                    <nav
                        className={`${styles['desktop-nav']} hidden xl:block relative`}
                    >
                        <ul className="flex items-center text-(--color-gray-500) text-sm">
                            {/* Dynamic Links (Mega-Menu Triggers) */}
                            <li
                                className="flex items-center gap-2 group cursor-pointer"
                                onMouseEnter={() => openPopup('products')}
                                onMouseLeave={closePopup}
                            >
                                Products
                                <FaAngleDown className="text-[10px] group-hover:rotate-180 duration-200" />
                            </li>
                            <li
                                className="flex items-center gap-2 group cursor-pointer"
                                onMouseEnter={() => openPopup('solutions')}
                                onMouseLeave={closePopup}
                            >
                                Solutions
                                <FaAngleDown className="text-[10px] group-hover:rotate-180 duration-200" />
                            </li>
                            <li
                                className="flex items-center gap-2 group cursor-pointer"
                                onMouseEnter={() => openPopup('resources')}
                                onMouseLeave={closePopup}
                            >
                                Resources
                                <FaAngleDown className="text-[10px] group-hover:rotate-180 duration-200" />
                            </li>
                            {/* Static Links */}
                            <li className="cursor-pointer">Entreprise</li>
                            <li className="cursor-pointer">Docs</li>
                            <li className="cursor-pointer">Pricing</li>
                        </ul>
                    </nav>
                </div>

                {/* Desktop Action Buttons */}
                <div className="hidden xl:flex items-center gap-3 text-sm">
                    {/* proper semantics: buttons for actions, anchors for navigation */}
                    <button className={styles['header-btn-primary']}>
                        Log In
                    </button>
                    <button className={styles['header-btn-primary']}>
                        Contact
                    </button>
                    <button className={styles['header-btn-secondary']}>
                        Sign Up
                    </button>
                </div>

                {/* Mobile Hamburger Icon */}
                <div
                    onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                    className="xl:hidden h-8 w-8 p-1.5 border-2 border-(--color-gray-900) rounded-full flex flex-col gap-1 items-center justify-center cursor-pointer"
                >
                    {/* Hamburger bar transformations (CSS animation) */}
                    <div
                        className={`h-0.5 w-full bg-(--color-gray-50) transition-all duration-300
                        ${
                            isMobileNavOpen ? 'rotate-45 translate-y-[3px]' : ''
                        }`}
                    />
                    <div
                        className={`h-0.5 w-full bg-(--color-gray-50) transition-all duration-300
                        ${
                            isMobileNavOpen
                                ? '-rotate-45 -translate-y-[3px]'
                                : ''
                        }`}
                    />
                </div>
            </div>

            {/* Mobile Navigation (Conditionally Rendered) */}
            {isMobileNavOpen && <SmallScreensNav />}
        </header>
    );
};
