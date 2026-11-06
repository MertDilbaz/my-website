import { Reveal } from '@/components/ui/reveal';
import { SectionLabel } from '@/components/ui/section-label';
import { profile } from '@/data/profile';
import { stats } from '@/data/skills';

const facts = [
    { key: 'location', value: profile.location },
    { key: 'focus', value: profile.focus },
    { key: 'status', value: profile.availability },
];

export function About() {
    return (
        <section id="about" className="scroll-mt-24 py-24 sm:py-28">
            <div className="mx-auto w-full max-w-5xl px-6">
                <Reveal>
                    <SectionLabel>about</SectionLabel>
                </Reveal>

                <div className="mt-8 grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
                    <Reveal>
                        <h2 className="text-3xl leading-tight font-semibold tracking-tight text-balance text-ink sm:text-4xl">
                            Building software{' '}
                            <span className="text-muted">that solves real problems.</span>
                        </h2>
                    </Reveal>

                    <div className="space-y-6">
                        <Reveal>
                            <div className="space-y-4">
                                {profile.bio.map((paragraph) => (
                                    <p
                                        key={paragraph}
                                        className="leading-relaxed text-muted"
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </Reveal>

                        <Reveal>
                            <dl className="divide-y divide-line border-y border-line text-sm">
                                {facts.map((fact) => (
                                    <div
                                        key={fact.key}
                                        className="flex gap-4 py-2.5"
                                    >
                                        <dt className="w-24 shrink-0 text-xs font-medium tracking-[0.15em] text-muted uppercase">
                                            {fact.key}
                                        </dt>
                                        <dd className="text-ink/90">
                                            {fact.value}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </Reveal>

                        <Reveal>
                            <div className="flex flex-wrap gap-x-10 gap-y-4">
                                {stats.map((stat) => (
                                    <div key={stat.label}>
                                        <div className="text-3xl font-semibold text-ink tabular-nums">
                                            {stat.value}
                                        </div>
                                        <div className="mt-1 text-xs tracking-[0.15em] text-muted uppercase">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
