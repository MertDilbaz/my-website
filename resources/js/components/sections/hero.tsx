import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowDown } from 'lucide-react';
import { useRef } from 'react';

import { Button } from '@/components/ui/button';
import { SocialLinks } from '@/components/ui/social-links';
import { profile } from '@/data/profile';

const meta = [
    { label: 'based in', value: profile.location },
    { label: 'focus', value: profile.focus },
    { label: 'stack', value: profile.stack },
];

export function Hero() {
    const root = useRef<HTMLElement>(null);

    useGSAP(
        () => {
            gsap.matchMedia().add(
                '(prefers-reduced-motion: no-preference)',
                () => {
                    const timeline = gsap.timeline({ delay: 0.15 });
                    timeline
                        .from('.hero-eyebrow', {
                            y: 16,
                            opacity: 0,
                            duration: 0.6,
                        })
                        .from(
                            '.hero-name',
                            {
                                y: 40,
                                opacity: 0,
                                duration: 0.9,
                                ease: 'power3.out',
                            },
                            '-=0.35',
                        )
                        .from(
                            '.hero-intro',
                            { y: 16, opacity: 0, duration: 0.6 },
                            '-=0.55',
                        )
                        .from(
                            '.hero-cta',
                            {
                                y: 16,
                                opacity: 0,
                                duration: 0.5,
                                stagger: 0.1,
                            },
                            '-=0.4',
                        )
                        .from(
                            '.hero-social',
                            { opacity: 0, duration: 0.4 },
                            '-=0.3',
                        )
                        .from(
                            '.hero-meta',
                            { opacity: 0, duration: 0.6 },
                            '-=0.2',
                        );
                },
            );
        },
        { scope: root },
    );

    return (
        <section
            id="top"
            ref={root}
            className="relative flex min-h-[100svh] flex-col pt-28 pb-12"
        >
            <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-6">
                <div className="hero-eyebrow flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <span className="h-px w-8 bg-ink/25" />
                        <span className="text-xs font-medium tracking-[0.2em] text-muted uppercase">
                            {profile.role}
                        </span>
                    </div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/40 px-3 py-1.5 text-xs text-muted">
                        <span className="relative flex size-1.5">
                            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-50" />
                            <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
                        </span>
                        Available for work
                    </span>
                </div>

                <h1 className="hero-name mt-7 text-6xl leading-[0.92] font-semibold tracking-tight text-balance text-ink sm:text-7xl md:text-8xl">
                    Mert
                    <br />
                    Dilbaz
                </h1>

                <p className="hero-intro mt-7 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
                    {profile.tagline}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                    <Button href="#work" className="hero-cta" withArrow>
                        View work
                    </Button>
                    <Button
                        href={`mailto:${profile.email}`}
                        variant="ghost"
                        className="hero-cta"
                    >
                        Contact
                    </Button>
                    <SocialLinks className="hero-social ml-1" />
                </div>
            </div>

            <div className="hero-meta mx-auto flex w-full max-w-5xl items-end justify-between gap-6 px-6">
                <dl className="flex flex-wrap gap-x-10 gap-y-4">
                    {meta.map((item) => (
                        <div key={item.label}>
                            <dt className="text-xs tracking-[0.15em] text-muted uppercase">
                                {item.label}
                            </dt>
                            <dd className="mt-1 text-sm text-ink">
                                {item.value}
                            </dd>
                        </div>
                    ))}
                </dl>

                <a
                    href="#about"
                    className="group hidden items-center gap-1.5 text-xs text-muted transition-colors hover:text-ink sm:inline-flex"
                >
                    scroll
                    <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
                </a>
            </div>
        </section>
    );
}
