import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type TagProps = {
    children: ReactNode;
    className?: string;
};

export function Tag({ children, className }: TagProps) {
    return (
        <span
            className={cn(
                'inline-flex items-center rounded-md border border-line bg-panel/50 px-2.5 py-1 font-mono text-xs text-muted transition-colors hover:border-accent/50 hover:text-ink',
                className,
            )}
        >
            {children}
        </span>
    );
}
