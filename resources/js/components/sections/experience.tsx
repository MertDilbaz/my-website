import { Reveal } from '@/components/ui/reveal';
import { SectionLabel } from '@/components/ui/section-label';
import { Tag } from '@/components/ui/tag';
import { experience } from '@/data/experience';
import type { EntryType } from '@/data/experience';

// Monochrome: feat/release get a bright node, commit/fix a muted one.
// The text label still conveys the type, so no color-coding is needed.
const typeStyles: Record<EntryType, { dot: string }> = {
    feat: { dot: 'bg-accent' },
    release: { dot: 'bg-accent' },
    commit: { dot: 'bg-muted' },
    fix: { dot: 'bg-muted' },
};

export function Experience() {
    return (
        <section id="experience" className="scroll-mt-24 py-24 sm:py-28">
            <div className="mx-auto w-full max-w-5xl px-6">
                <Reveal>
                    <SectionLabel>experience</SectionLabel>
                </Reveal>
                <Reveal>
                    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance text-ink sm:text-4xl">
                        Experience
                    </h2>
                    <p className="mt-2 text-sm text-muted">
                        Professional experience, education, and certification.
                    </p>
                </Reveal>

                <div className="mt-10">
                    {experience.map((entry, index) => {
                        const style = typeStyles[entry.type];
                        const isLast = index === experience.length - 1;

                        return (
                            <Reveal
                                key={`${entry.type}-${entry.title}`}
                                delay={index * 0.08}
                            >
                                <div className="flex gap-5 pb-10 last:pb-0">
                                    <div className="flex flex-col items-center">
                                        <span
                                            className={`mt-1.5 size-3 shrink-0 rounded-full ring-4 ring-base ${style.dot}`}
                                        />
                                        {!isLast && (
                                            <span className="mt-1 w-px flex-1 bg-line" />
                                        )}
                                    </div>

                                    <div className="flex-1 pb-2">
                                        <div className="flex flex-wrap items-center gap-3">
                                            <span className="rounded border border-line bg-panel/50 px-1.5 py-0.5 font-mono text-[10px] tracking-wider text-muted uppercase">
                                                {entry.type}
                                            </span>
                                            <span className="text-xs text-muted">
                                                {entry.date}
                                            </span>
                                        </div>
                                        <h3 className="mt-2 text-lg font-medium text-ink">
                                            {entry.title}
                                            <span className="text-muted">
                                                {' '}
                                                — {entry.org}
                                            </span>
                                        </h3>
                                        <p className="mt-1 max-w-2xl leading-relaxed text-muted">
                                            {entry.description}
                                        </p>
                                        {entry.link && (
                                            <a
                                                href={entry.link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mt-3 inline-flex text-sm font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:text-accent-soft"
                                            >
                                                {entry.link.label}
                                            </a>
                                        )}
                                        {entry.tags && (
                                            <div className="mt-3 flex flex-wrap gap-2">
                                                {entry.tags.map((tag) => (
                                                    <Tag key={tag}>{tag}</Tag>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
