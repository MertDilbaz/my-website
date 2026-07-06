import { Code2, Layout, Server, Wrench } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

import { Reveal } from '@/components/ui/reveal';
import { SectionLabel } from '@/components/ui/section-label';
import { Tag } from '@/components/ui/tag';
import { skillGroups } from '@/data/skills';

const icons: Record<string, LucideIcon> = {
    code: Code2,
    layout: Layout,
    server: Server,
    wrench: Wrench,
};

export function Skills() {
    return (
        <section id="skills" className="scroll-mt-24 py-24 sm:py-28">
            <div className="mx-auto w-full max-w-5xl px-6">
                <Reveal>
                    <SectionLabel>skills</SectionLabel>
                </Reveal>
                <Reveal>
                    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                        Stack &amp; tools
                    </h2>
                </Reveal>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                    {skillGroups.map((group, index) => {
                        const Icon = icons[group.icon] ?? Code2;

                        return (
                            <Reveal key={group.label} delay={index * 0.08}>
                                <div className="h-full rounded-xl border border-line bg-panel/40 p-6 transition-colors hover:border-muted">
                                    <div className="flex items-center gap-2.5">
                                        <Icon className="size-4 text-muted" />
                                        <h3 className="text-sm font-medium tracking-[0.15em] text-ink uppercase">
                                            {group.label}
                                        </h3>
                                    </div>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {group.items.map((item) => (
                                            <Tag key={item}>{item}</Tag>
                                        ))}
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
