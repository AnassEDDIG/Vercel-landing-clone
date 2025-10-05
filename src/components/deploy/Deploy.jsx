import { RiTerminalLine } from 'react-icons/ri'; // Icon for 'Deploys' section
import { FiMessageCircle } from 'react-icons/fi'; // Icon for 'Collaboration' section
import { DeployFigure } from './DeployFigure'; // Child component for the Deploy visualization
import { CollaborationFigure } from './CollaborationFigure'; // Child component for the Collaboration visualization
import plus from '../../assets/icons/plus.svg'; // Decorative icon

/**
 * Deploy: Renders a two-column feature section detailing the Git-connected Deploy flow
 * and Collaborative Pre-production environment.
 */
export const Deploy = () => {
    return (
        // Main section container. Uses 'relative' for absolute positioning of the plus icon.
        <section className="relative border-b border-(--guide-color)">
            {/* --- Main Two-Column Grid --- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:divide-x divide-(--guide-color)">
                {/* --- Column 1: Deploy Feature --- */}
                <div className="p-(--padding-sm) lg:p-(--padding-lg)">
                    {/* Feature Title Line (Icon and Text) */}
                    <h2 className="flex items-center gap-2 text-(--color-gray-500) text-sm xs:text-base">
                        <RiTerminalLine />
                        Git-connected Deploys
                    </h2>

                    {/* Feature Headline and Tagline */}
                    <div className="sm:text-xl lg:text-2xl mt-3 text-balance">
                        {/* Strong/Bold Headline */}
                        <strong>
                            From localhost to https, in seconds.
                        </strong>{' '}
                        {/* Muted Tagline (inlined with the headline) */}
                        <p className="text-(--color-gray-500) font-medium inline">
                            Deploy from Git or your CLI.
                        </p>
                    </div>

                    {/* Figure Component (Visual Representation) */}
                    <div className="mt-10">
                        <DeployFigure />
                    </div>
                </div>

                {/* --- Column 2: Collaboration Feature --- */}
                {/* Professional Tip: You can reuse the padding utility class string from Column 1. */}
                <div>
                    <div className="p-(--padding-sm) lg:p-(--padding-lg)">
                        {/* Feature Title Line (Icon and Text) */}
                        <h2 className="flex items-center gap-2 text-(--color-gray-500) text-sm xs:text-base">
                            <FiMessageCircle />
                            Collaborative Pre-production
                        </h2>

                        {/* Feature Headline and Tagline */}
                        <div className="sm:text-xl lg:text-2xl mt-3 text-balance">
                            {/* Strong/Bold Headline */}
                            <strong>Every deploy is remarkable.</strong>{' '}
                            {/* Muted Tagline */}
                            <p className="text-(--color-gray-500) font-medium inline">
                                Chat with your team on real, production-grade
                                UI, not just designs.
                            </p>
                        </div>
                    </div>

                    {/* Figure Component (Visual Representation) */}
                    <div className="mt-10">
                        <CollaborationFigure />
                    </div>
                </div>
            </div>

            {/* Decorative plus icon (bottom right corner of the section) */}
            <img
                className="absolute -bottom-[10px] -right-[10px]"
                src={plus}
                alt="plus sign illustration"
            />
        </section>
    );
};
