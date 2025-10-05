import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'; // Social icons
import { FaXTwitter } from 'react-icons/fa6'; // Twitter/X icon
import { GoDotFill } from 'react-icons/go'; // Status dot
import { IoLogoVercel } from 'react-icons/io5'; // Main logo
import { LuSquareArrowOutUpRight } from 'react-icons/lu'; // External link indicator

/**
 * Footer: Renders the site footer with multi-column link navigation,
 * social media links, and a system status indicator.
 */
export const Footer = () => {
    return (
        // Footer container: Centers the content and applies max-width/padding consistent with the page layout.
        <footer className="max-w-(--content-max-width) py-10 px-2 sm:px-4 xl:w-(--content-width) mx-auto">
            {/* --- Main Grid Container (Logo + Link Columns) --- */}
            {/* flex-col on mobile, transitions to flex-row on small screens (sm) */}
            <div className="flex flex-col gap-8 sm:flex-row">
                {/* 1. Logo Column */}
                {/* w-1/20 (very narrow), justifies left on mobile, right on small screens. 
                    sm:order-2 pushes the logo column to the end of the row on small screens and up. */}
                <div className="w-1/20 flex justify-start sm:justify-end sm:order-2">
                    <div>
                        <IoLogoVercel />
                    </div>
                </div>

                {/* 2. Link Columns Grid */}
                {/* Takes full available width. Grid starts as 2 columns, transitions to 4 columns on large screens (lg). */}
                <div className="w-full grid grid-cols-2 gap-8 lg:grid-cols-4 justify-between text-(--color-gray-500) text-sm">
                    {/* Column 1: Products */}
                    <div>
                        <ul>
                            {/* Heading in white for emphasis */}
                            <li className="text-white">Products</li>
                            <li>AI</li>
                            <li>Enterprise</li>
                            <li>Fluid Compute</li>
                            <li>Next.js</li>
                            <li>Observability</li>
                            <li>Previews</li>
                            <li>Rendering</li>
                            <li>Security</li>
                            <li>Turbo</li>
                            <li>v0</li>
                        </ul>
                    </div>

                    {/* Column 2: Resources */}
                    <div>
                        <ul>
                            <li className="text-white">Resources</li>
                            {/* Link with an icon to suggest an external resource */}
                            <li className="flex items-center gap-2">
                                Community <LuSquareArrowOutUpRight />
                            </li>
                            <li>Docs</li>
                            <li>Guides</li>
                            <li>Help</li>
                            <li>Integrations</li>
                            <li>Pricing</li>
                            <li>Resources</li>
                            <li>Solution Partners</li>
                            <li>Startups</li>
                            <li>Templates</li>
                        </ul>
                    </div>

                    {/* Column 3: Company */}
                    <div>
                        <ul>
                            <li className="text-white">Company</li>
                            <li>About</li>
                            <li>Blog</li>
                            <li>Careers</li>
                            <li>Changelog</li>
                            <li>Events</li>
                            <li>Contact Us</li>
                            <li>Customers</li>
                            <li>Partners</li>
                            <li>Shipped</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>

                    {/* Column 4: Social Links (Text with Icons) */}
                    <div>
                        <ul>
                            <li className="text-white">Social</li>
                            <li className="flex items-center gap-2">
                                <FaGithub />
                                GitHub
                            </li>
                            <li className="flex items-center gap-2">
                                <FaLinkedin />
                                LinkedIn
                            </li>
                            <li className="flex items-center gap-2">
                                <FaXTwitter />
                                Twitter
                            </li>
                            <li className="flex items-center gap-2">
                                <FaYoutube />
                                YouTube
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* --- System Status Indicator --- */}
            {/* Displayed below the main columns with a large top margin (mt-16) and a specific blue color */}
            <div className="mt-16 flex items-center gap-1 text-[#0070F3] text-sm">
                <GoDotFill className="text-lg" /> All systems normal
            </div>
            {/* --- Copyright and Attribution (New Addition) --- */}
            <div className="mt-4 text-(--color-gray-500) text-xs">
                {/* Credits the original Vercel design */}
                All rights reserved to Vercel. This is a landing page clone for
                a portfolio project.
            </div>
        </footer>
    );
};
