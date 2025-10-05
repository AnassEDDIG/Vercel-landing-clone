import { Hero } from './components/hero/Hero';
import { Deploy } from './components/deploy/Deploy';
import { Observability } from './components/observability/Observability';
import { Features } from './components/features/Features';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Separator } from './components/separator/Separator';
import { GetStartedBanner } from './components/banners/GetStartedBanner';
import './App.css';

function App() {
    return (
        // Main application container: ensures minimum width and holds all content
        <div className="min-w-[280px]">
            <Header />
            {/* Main content area: Centered, width-constrained, and handles padding */}
            <main className="px-2 sm:px-4 xl:w-(--content-width) mx-auto max-w-(--content-max-width)">
                <Hero />

                {/* The main content block container, applying the Vercel-style borders */}
                <div className="border-x border-b border-(--guide-color) w-full">
                    {/* Visual Separator Component */}
                    <Separator />

                    {/* Core Landing Page Sections */}
                    <Deploy />
                    <Observability />
                    <Features />

                    {/* Visual Separator Component */}
                    <Separator />

                    {/* Call to Action */}
                    <GetStartedBanner />
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default App;
