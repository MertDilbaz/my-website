import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type SectionLabelProps = {
    children: ReactNode;
    className?: string;
};

/**
 * A quiet section eyebrow: a short rule + a tracked uppercase label.
 * Replaces the old `// code-comment` terminal motif with something neutral.
 */
export function SectionLabel({ children, className }: SectionLabelProps) {
    return (
        <div className={cn('flex items-center gap-3', className)}>
            <span className="h-px w-8 bg-ink/25" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                {children}
            </span>
        </div>
    );
}
