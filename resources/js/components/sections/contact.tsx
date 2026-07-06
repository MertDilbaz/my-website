import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/ui/reveal';
import { SectionLabel } from '@/components/ui/section-label';
import { SocialLinks } from '@/components/ui/social-links';
import { profile } from '@/data/profile';

export function Contact() {
    return (
        <section id="contact" className="scroll-mt-24 py-24 sm:py-32">
            <div className="mx-auto w-full max-w-5xl px-6">
                <Reveal>
                    <div className="rounded-2xl border border-line bg-panel/40 p-8 sm:p-12">
                        <SectionLabel>contact</SectionLabel>
                        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-balance text-ink sm:text-5xl">
                            Let&apos;s build something.
                        </h2>
                        <p className="mt-4 max-w-lg leading-relaxed text-muted">
                            I&apos;m open to junior &amp; full-stack roles and
                            the occasional freelance project. If anything here
                            resonates, my inbox is open.
                        </p>

                        <div className="mt-8 flex flex-col gap-1">
                            <span className="text-xs font-medium tracking-[0.2em] text-muted uppercase">
                                email
                            </span>
                            <a
                                href={`mailto:${profile.email}`}
                                className="text-lg text-ink transition-colors hover:text-accent"
                            >
                                {profile.email}
                            </a>
                        </div>

                        <div className="mt-8 flex flex-wrap items-center gap-3">
                            <Button href={`mailto:${profile.email}`} withArrow>
                                Say hello
                            </Button>
                            <SocialLinks className="ml-1" />
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
