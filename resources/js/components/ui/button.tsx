import { ArrowUpRight } from 'lucide-react';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

import { cn } from '@/lib/utils';

type Variant = 'primary' | 'ghost';

type ButtonProps = {
    variant?: Variant;
    className?: string;
    withArrow?: boolean;
    children: ReactNode;
} & ComponentPropsWithoutRef<'a'>;

const base =
    'group inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-base disabled:pointer-events-none disabled:opacity-50';

const variants: Record<Variant, string> = {
    primary: 'bg-accent px-5 py-2.5 font-medium text-base hover:bg-accent-soft',
    ghost: 'border border-line bg-panel/40 px-5 py-2.5 text-ink hover:border-accent/60 hover:text-accent',
};

export function Button({
    variant = 'primary',
    className,
    withArrow = false,
    children,
    ...props
}: ButtonProps) {
    return (
        <a className={cn(base, variants[variant], className)} {...props}>
            {children}
            {withArrow && (
                <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            )}
        </a>
    );
}
