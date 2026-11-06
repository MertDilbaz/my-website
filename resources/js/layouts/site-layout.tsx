import { Head } from '@inertiajs/react';
import type { ReactNode } from 'react';

import { Footer } from '@/components/sections/footer';
import { Navbar } from '@/components/sections/navbar';
import { AmbientBackground } from '@/components/ui/ambient-background';

const description =
    'Mert Dilbaz — Software Engineer focused on backend development, AI-integrated applications, and practical software systems with Java and Go.';

export function SiteLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <Head>
                <title>Mert Dilbaz — Software Engineer</title>
                <meta name="description" content={description} />
                <meta name="author" content="Mert Dilbaz" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Mert Dilbaz — Software Engineer"
                />
                <meta property="og:description" content={description} />
                <meta name="theme-color" content="#0a0d0c" />
            </Head>

            <a
                href="#main"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-base"
            >
                skip to content
            </a>
            <AmbientBackground />
            <Navbar />
            <main id="main" className="relative z-10">
                {children}
            </main>
            <Footer />
        </>
    );
}
