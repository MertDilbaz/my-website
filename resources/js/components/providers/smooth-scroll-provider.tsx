import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { useEffect } from 'react';
import type { ReactNode } from 'react';

gsap.registerPlugin(ScrollTrigger);

// Module-level singleton: the whole app shares one Lenis instance.
// Using this instead of React state avoids a setState-in-effect cascade.
let lenisInstance: Lenis | null = null;

/** Read-only access to the shared Lenis instance (e.g. to pause it in overlays). */
export function getLenis(): Lenis | null {
    return lenisInstance;
}

/**
 * Wires Lenis smooth scrolling to the GSAP ticker so ScrollTrigger stays in
 * sync. Disabled entirely for reduced-motion users (native scroll). In-page
 * anchor clicks are intercepted and smooth-scrolled via Lenis.
 */
export function SmoothScrollProvider({ children }: { children: ReactNode }) {
    useEffect(() => {
        const prefersReducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)',
        ).matches;

        if (prefersReducedMotion) {
            return;
        }

        const instance = new Lenis({
            duration: 1.1,
            smoothWheel: true,
        });
        lenisInstance = instance;

        const onScroll = () => ScrollTrigger.update();
        instance.on('scroll', onScroll);

        // Intercept in-page anchor clicks and smooth-scroll via Lenis.
        const onClick = (event: MouseEvent) => {
            if (
                event.defaultPrevented ||
                event.button !== 0 ||
                event.metaKey ||
                event.ctrlKey ||
                event.shiftKey ||
                event.altKey
            ) {
                return;
            }

            const anchor = (event.target as HTMLElement | null)?.closest(
                'a[href]',
            );

            if (!anchor) {
                return;
            }

            const href = anchor.getAttribute('href');

            if (!href || !href.startsWith('#') || href.length < 2) {
                return;
            }

            const target = document.querySelector(href);

            if (!target) {
                return;
            }

            event.preventDefault();
            instance.scrollTo(target as HTMLElement, { offset: -72 });
        };
        document.addEventListener('click', onClick, true);

        const raf = (time: number) => instance.raf(time * 1000);
        gsap.ticker.add(raf);
        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove(raf);
            document.removeEventListener('click', onClick, true);
            instance.off('scroll', onScroll);
            instance.destroy();
            lenisInstance = null;
        };
    }, []);

    return <>{children}</>;
}
