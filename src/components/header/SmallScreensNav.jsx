import React, { useState } from 'react';
import styles from './Header.module.css';
import { FaAngleDown } from 'react-icons/fa';
// Import all icon bundles
import { ProductsIcons } from './toolbox/icons/productsICons';
import { ResourcesIcons } from './toolbox/icons/resourcesIcons';
import { SolutionsIcons } from './toolbox/icons/solutionsIcons';

/**
 * SmallScreensNav: Full-screen overlay menu for mobile and tablet views (hidden on 'xl' screens).
 * Implements accordion logic for main navigation categories (Products, Solutions, Resources).
 */
export const SmallScreensNav = () => {
    // State to control the visibility of each collapsible menu section
    const [openProducts, setOpenProducts] = useState(false);
    const [openResources, setOpenResources] = useState(false);
    const [openSolutions, setOpenSolutions] = useState(false);

    return (
        // Wrapper for the full menu. Positioned absolutely to cover the screen below the header.
        <section className="absolute inset-x-0 xl:hidden bg-(--bg-primary) ">
            <nav
                // Calculates minimum height to fill the viewport below the fixed header (64px)
                className={`${styles['small-screens-nav']} h-[calc(100vh-64px)] w-full overflow-y-auto`}
            >
                {/* --- 1. Authentication Buttons (Sign Up / Log In) --- */}
                <div className="px-6 grid grid-cols-1 gap-3 text-sm font-medium">
                    <button className={styles['header-btn-secondary']}>
                        Sign Up
                    </button>
                    <button className={styles['header-btn-primary']}>
                        Log In
                    </button>
                </div>

                {/* --- 2. Main Navigation Links (Accordion + Static) --- */}
                <ul className="px-3 mt-3 grid grid-cols-1 text-(--color-gray-500) font-medium">
                    {/* --- PRODUCTS ACCORDION TOGGLE --- */}
                    <li
                        onClick={() => setOpenProducts((oldVal) => !oldVal)}
                        className="flex justify-between items-center gap-2 cursor-pointer" // Hover text color can be applied here too
                    >
                        <span>Products</span>
                        <FaAngleDown className="text-[10px]" />
                    </li>

                    {/* Collapsible Products Sub-Menu */}
                    <ul
                        // styles['sub-menu'] applies flex, gap, and hover styles to children
                        // Conditional height for the smooth accordion transition (450px to fit all items)
                        className={`${styles['sub-menu']} h-0 ${
                            openProducts && 'h-[450px] '
                        } duration-300 overflow-y-scroll`}
                    >
                        <li>
                            <ProductsIcons.RiNextjsFill /> Next.js
                        </li>
                        <li>
                            <ProductsIcons.SiTurborepo /> Turborepo
                        </li>
                        <li>
                            <ProductsIcons.HiOutlineCube /> AI SDK
                        </li>
                        <li>
                            <ProductsIcons.FiLayout /> CI/CD
                        </li>
                        <li>
                            <ProductsIcons.TbWorld /> Delivery network
                        </li>
                        <li>
                            <ProductsIcons.BiChip /> Fluid compute
                        </li>
                        <li>
                            <ProductsIcons.BsStars /> AI Infrastructure
                        </li>
                        <li>
                            <ProductsIcons.FiBarChart2 /> Observability
                        </li>
                        <li>
                            <ProductsIcons.LuShield /> Platform security
                        </li>
                        <li>
                            <ProductsIcons.LuGrid2X2Check /> Web Application
                            Firewall
                        </li>
                        <li>
                            <ProductsIcons.GrRobot /> Bot management
                        </li>
                        <li>
                            <ProductsIcons.LuScanLine /> BotID
                        </li>
                    </ul>

                    {/* --- SOLUTIONS ACCORDION TOGGLE --- */}
                    <li
                        onClick={() => setOpenSolutions((oldVal) => !oldVal)}
                        className="flex justify-between items-center gap-2 cursor-pointer"
                    >
                        Solutions <FaAngleDown className="text-[10px]" />
                    </li>

                    {/* Collapsible Solutions Sub-Menu */}
                    <ul
                        className={`${styles['sub-menu']} h-0 ${
                            openSolutions && 'h-[300px] ' // Slightly smaller height needed
                        } duration-300 overflow-hidden`}
                    >
                        <li>
                            <SolutionsIcons.BsStars /> AI Apps
                        </li>
                        <li>
                            <SolutionsIcons.MdStorefront /> Composable Commerce
                        </li>
                        <li>
                            <SolutionsIcons.FaChartLine /> Marketing sites
                        </li>
                        <li>
                            <SolutionsIcons.MdKeyboardCommandKey /> Multi-tenant
                            Platforms
                        </li>
                        <li>
                            <SolutionsIcons.MdWebAsset /> Web Apps
                        </li>
                        <li>
                            <SolutionsIcons.HiOutlineWrench /> Platform
                            engineers
                        </li>
                        <li>
                            <SolutionsIcons.TbTriangleSquareCircleFilled />{' '}
                            Design Engineers
                        </li>
                    </ul>

                    {/* --- RESOURCES ACCORDION TOGGLE --- */}
                    <li
                        onClick={() => setOpenResources((oldVal) => !oldVal)}
                        className="flex justify-between items-center gap-2 cursor-pointer"
                    >
                        Resources <FaAngleDown className="text-[10px]" />
                    </li>

                    {/* Collapsible Resources Sub-Menu */}
                    <ul
                        className={`${styles['sub-menu']} h-0 ${
                            openResources && 'h-[450px] '
                        } duration-300 overflow-y-scroll`}
                    >
                        <li>
                            <ResourcesIcons.HiOutlineCube /> Resource Center
                        </li>
                        <li>
                            <ResourcesIcons.PiPuzzlePiece /> Marketplace
                        </li>
                        <li>
                            <ResourcesIcons.GoProjectTemplate /> Templates
                        </li>
                        <li>
                            <ResourcesIcons.IoBookOutline /> Guides
                        </li>
                        <li>
                            <ResourcesIcons.CiCompass1 /> Partner Finder
                        </li>
                        <li>
                            <ResourcesIcons.RiEmotionHappyLine /> Customers
                        </li>
                        <li>
                            <ResourcesIcons.RiPenNibLine /> Blog
                        </li>
                        <li>
                            <ResourcesIcons.BiBookContent /> Changelog
                        </li>
                        <li>
                            <ResourcesIcons.PiSuitcaseSimple /> Press
                        </li>
                        <li>
                            <ResourcesIcons.TbCalendarEvent /> Events
                        </li>
                    </ul>

                    {/* --- Static Links (Always visible) --- */}
                    <li className="cursor-pointer">Docs</li>
                    <li className="cursor-pointer">Pricing</li>
                    <li className="cursor-pointer">Contact</li>
                </ul>
            </nav>
        </section>
    );
};
