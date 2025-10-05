import { PiBridge } from 'react-icons/pi'; // Icon for AI Gateway
import { LuHistory, LuShieldCheck } from 'react-icons/lu'; // Icons for Rollbacks and Security
import { CommitsFigure } from './CommitsFigure'; // Child component for Rollback visualization
import { HiBuildingOffice2 } from 'react-icons/hi2'; // Icon for Enterprise
import aiGatewayLarge from '../../assets/images/ai-gateway-large.svg'; // Large desktop image
import aiGatewaySmall from '../../assets/images/ai-gateway-small.svg'; // Small mobile image

/**
 * Features: Renders two key features (AI Gateway and Instant Rollbacks) in a grid,
 * followed by a concluding enterprise/security callout.
 */
export const Features = () => {
    return (
        <section>
            {/* --- 1. Two-Column Feature Grid --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x divide-(--guide-color) overflow-hidden">
                {/* --- Column 1: Vercel AI Gateway --- */}
                <div className="p-(--padding-sm) lg:p-(--padding-lg)">
                    {/* Feature Title Line */}
                    <h2 className="flex items-center gap-2 text-(--color-gray-500) text-sm xs:text-base">
                        <PiBridge />
                        Vercel AI Gateway
                    </h2>

                    {/* Feature Headline and Tagline */}
                    <div className="sm:text-xl lg:text-2xl mt-3 text-balance">
                        <strong>Deploy AI in seconds.</strong>{' '}
                        <p className="text-(--color-gray-500) font-medium inline">
                            Access all major models through a single, unified
                            interface and shared AI credit wallet.
                        </p>
                    </div>

                    {/* Responsive AI Gateway Illustration */}
                    <div className="mt-16">
                        {/* Desktop Image */}
                        <img
                            className="hidden md:block"
                            src={aiGatewayLarge}
                            alt="Vercel ai gateway illustration large"
                            loading="lazy"
                        />
                        {/* Mobile Image */}
                        <img
                            className="md:hidden mx-auto"
                            src={aiGatewaySmall}
                            alt="Vercel ai gateway illustration large"
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* --- Column 2: Instant Rollbacks --- */}
                <div className="p-(--padding-sm) lg:p-(--padding-lg)">
                    {/* Feature Title Line */}
                    <h2 className="flex items-center gap-2 text-(--color-gray-500) text-sm xs:text-base">
                        <LuHistory />
                        Instant Rollbacks
                    </h2>

                    {/* Feature Headline and Tagline */}
                    <div className="sm:text-xl lg:text-2xl mt-3 text-balance">
                        <strong>Go ahead, deploy on Friday.</strong>{' '}
                        <p className="text-(--color-gray-500) font-medium inline">
                            Safely manage releases with automated deployments
                            and instant rollbacks.
                        </p>
                    </div>

                    {/* Commits Visualization Component */}
                    <CommitsFigure />
                </div>
            </div>

            {/* --- 2. Closing Statement/Callout (Full Width) --- */}
            <div className="p-(--padding-sm) lg:p-(--padding-lg) border-t border-(--guide-color) ">
                <p className="flex flex-col md:flex-row items-center justify-center gap-2 sm:text-2xl">
                    {/* Phrase 1: Scale your Enterprise */}
                    <span className="flex items-center gap-2">
                        <strong>Scale your</strong>
                        {/* Enterprise Chip/Link */}
                        <span
                            className="flex items-center px-3 py-2 border border-(--guide-color) rounded-full
                            text-sm gap-2 shadow-md bg-(--color-black-900) hover:bg-(--color-gray-900) cursor-pointer"
                        >
                            <HiBuildingOffice2 /> Enterprise
                        </span>
                    </span>

                    {/* Phrase 2: without compromising Security */}
                    <span className="flex items-center gap-2">
                        <strong>without compromising</strong>
                        {/* Security Chip/Link */}
                        <span
                            className="flex items-center px-3 py-2 border border-(--guide-color) rounded-full
                            text-sm gap-2 shadow-md bg-(--color-black-900) hover:bg-(--color-gray-900) cursor-pointer"
                        >
                            <LuShieldCheck /> Security
                        </span>
                    </span>
                </p>
            </div>
        </section>
    );
};
