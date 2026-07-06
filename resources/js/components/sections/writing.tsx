import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

import { Overlay } from '@/components/ui/overlay';
import { Reveal } from '@/components/ui/reveal';
import { SectionLabel } from '@/components/ui/section-label';
import { Tag } from '@/components/ui/tag';
import { articles } from '@/data/writing';
import type { Article } from '@/data/writing';

const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric',
    });

export function Writing() {
    const [active, setActive] = useState<Article | null>(null);

    return (
        <section id="writing" className="scroll-mt-24 py-24 sm:py-28">
            <div className="mx-auto w-full max-w-5xl px-6">
                <Reveal>
                    <SectionLabel>writing</SectionLabel>
                </Reveal>
                <Reveal>
                    <div className="mt-4 flex items-end justify-between gap-4">
                        <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                            Writing
                        </h2>
                        <span className="hidden text-xs text-muted sm:block">
                            {articles.length} posts
                        </span>
                    </div>
                </Reveal>

                <div className="mt-8 divide-y divide-line border-t border-line">
                    {articles.map((article, index) => (
                        <Reveal key={article.slug} delay={index * 0.05}>
                            <button
                                type="button"
                                onClick={() => setActive(article)}
                                className="group flex w-full items-baseline justify-between gap-6 py-6 text-left focus-visible:ring-2 focus-visible:ring-accent/60"
                            >
                                <div className="min-w-0">
                                    <h3 className="text-lg font-medium text-ink transition-colors group-hover:text-accent">
                                        {article.title}
                                    </h3>
                                    <p className="mt-1 max-w-xl text-sm text-muted">
                                        {article.summary}
                                    </p>
                                </div>
                                <span className="hidden shrink-0 text-xs text-muted sm:block">
                                    {formatDate(article.date)}
                                </span>
                                <ArrowUpRight className="size-4 shrink-0 text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink" />
                            </button>
                        </Reveal>
                    ))}
                </div>
            </div>

            <Overlay
                open={active !== null}
                onClose={() => setActive(null)}
                title={active?.title ?? ''}
                eyebrow={
                    active
                        ? `${formatDate(active.date)} · ${active.readingTime}`
                        : undefined
                }
            >
                {active && <ArticleBody article={active} />}
            </Overlay>
        </section>
    );
}

function ArticleBody({ article }: { article: Article }) {
    return (
        <article className="space-y-5">
            <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                ))}
            </div>
            <div className="space-y-4">
                {article.body.map((paragraph, index) => (
                    <p
                        key={index}
                        className="text-lg leading-relaxed text-ink/85"
                    >
                        {paragraph}
                    </p>
                ))}
            </div>
        </article>
    );
}
