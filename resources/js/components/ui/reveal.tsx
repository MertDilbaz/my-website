import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useRef, type ReactNode } from 'react';

import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger, useGSAP);

type RevealProps = {
    children: ReactNode;
    className?: string;
    /** seconds, staggered behind siblings when set */
    delay?: number;
    /** vertical travel in px */
    y?: number;
    duration?: number;
};

/**
 * Fades + lifts its content into view on scroll. Honors prefers-reduced-motion
 * (content simply renders in place). The restrained motion of the whole site.
 */
export function Reveal({
    children,
    className,
    delay = 0,
    y = 24,
    duration = 0.8,
}: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap
                .matchMedia()
                .add('(prefers-reduced-motion: no-preference)', () => {
                    gsap.from(ref.current, {
                        autoAlpha: 0,
                        y,
                        duration,
                        delay,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: ref.current,
                            start: 'top 85%',
                            toggleActions: 'play none none none',
                        },
                    });
                });
        },
        { scope: ref },
    );

    return (
        <div ref={ref} className={cn(className)}>
            {children}
        </div>
    );
}
