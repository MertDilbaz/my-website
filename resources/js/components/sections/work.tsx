import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import type { ReactNode } from 'react';

import { Button } from '@/components/ui/button';
import { Overlay } from '@/components/ui/overlay';
import { Reveal } from '@/components/ui/reveal';
import { SectionLabel } from '@/components/ui/section-label';
import { Tag } from '@/components/ui/tag';
import { projects } from '@/data/projects';
import type { Project } from '@/data/projects';

export function Work() {
    const [active, setActive] = useState<Project | null>(null);

    return (
        <section id="work" className="scroll-mt-24 py-24 sm:py-28">
            <div className="mx-auto w-full max-w-5xl px-6">
                <Reveal>
                    <SectionLabel>work</SectionLabel>
                </Reveal>
                <Reveal>
                    <div className="mt-4 flex items-end justify-between gap-4">
                        <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                            Selected work
                        </h2>
                        <span className="hidden text-xs text-muted sm:block">
                            {projects.length} projects
                        </span>
                    </div>
                </Reveal>

                <div className="mt-10 grid gap-4">
                    {projects.map((project, index) => (
                        <Reveal key={project.slug} delay={index * 0.06}>
                            <button
                                type="button"
                                onClick={() => setActive(project)}
                                className="group block w-full rounded-xl border border-line bg-panel/40 p-6 text-left transition-colors hover:border-muted focus-visible:ring-2 focus-visible:ring-accent/60"
                            >
                                <div className="flex flex-wrap items-baseline justify-between gap-3">
                                    <div className="flex flex-wrap items-baseline gap-3">
                                        <h3 className="text-xl font-medium text-ink transition-colors group-hover:text-accent">
                                            {project.title}
                                        </h3>
                                        <span className="text-sm text-muted">
                                            {project.tagline}
                                        </span>
                                    </div>
                                    <span className="text-xs text-muted">
                                        {project.year}
                                    </span>
                                </div>
                                <p className="mt-3 max-w-2xl text-muted">
                                    {project.summary}
                                </p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.stack.slice(0, 4).map((item) => (
                                        <Tag key={item}>{item}</Tag>
                                    ))}
                                </div>
                                <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-muted transition-colors group-hover:text-ink">
                                    View case study
                                    <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </div>
                            </button>
                        </Reveal>
                    ))}
                </div>
            </div>

            <Overlay
                open={active !== null}
                onClose={() => setActive(null)}
                title={active?.title ?? ''}
                eyebrow={active ? `${active.year} · ${active.role}` : undefined}
            >
                {active && <ProjectCaseStudy project={active} />}
            </Overlay>
        </section>
    );
}

function Block({ label, children }: { label: string; children: ReactNode }) {
    return (
        <div>
            <h3 className="mb-2 text-xs font-medium tracking-[0.15em] text-muted uppercase">
                {label}
            </h3>
            {children}
        </div>
    );
}

function ProjectCaseStudy({ project }: { project: Project }) {
    return (
        <div className="space-y-6">
            <p className="text-lg text-ink/90">{project.summary}</p>

            <Block label="Problem">
                <p className="leading-relaxed text-muted">{project.problem}</p>
            </Block>

            <Block label="Approach">
                <ul className="space-y-2.5">
                    {project.approach.map((step) => (
                        <li key={step} className="flex gap-2.5">
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-muted" />
                            <span className="leading-relaxed text-muted">
                                {step}
                            </span>
                        </li>
                    ))}
                </ul>
            </Block>

            <Block label="Stack">
                <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                        <Tag key={item}>{item}</Tag>
                    ))}
                </div>
            </Block>

            <Block label="Outcome">
                <p className="leading-relaxed text-muted">{project.outcome}</p>
            </Block>

            <div className="flex flex-wrap gap-3 pt-2">
                {project.links.map((link) => (
                    <Button
                        key={link.label}
                        href={link.href}
                        variant="ghost"
                        withArrow
                    >
                        {link.label}
                    </Button>
                ))}
            </div>
        </div>
    );
}
