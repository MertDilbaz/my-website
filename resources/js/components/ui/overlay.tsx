import { X } from 'lucide-react';
import { useEffect, useRef, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

import { getLenis } from '@/components/providers/smooth-scroll-provider';
import { cn } from '@/lib/utils';

type OverlayProps = {
    open: boolean;
    onClose: () => void;
    title: string;
    eyebrow?: string;
    children: ReactNode;
    className?: string;
};

/**
 * Full-screen reading overlay for project case studies and articles.
 * Closes on Escape or backdrop click, traps focus, and pauses Lenis while open.
 */
export function Overlay({
    open,
    onClose,
    title,
    eyebrow,
    children,
    className,
}: OverlayProps) {
    const panelRef = useRef<HTMLDivElement>(null);
    const closeRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!open) {
            return;
        }

        const lenis = getLenis();
        const previouslyFocused = document.activeElement as HTMLElement | null;

        closeRef.current?.focus();
        lenis?.stop();
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        const focusables = () =>
            panelRef.current?.querySelectorAll<HTMLElement>(
                'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
            );

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                event.preventDefault();
                onClose();
                return;
            }
            if (event.key === 'Tab' && panelRef.current) {
                const items = focusables();
                if (!items || items.length === 0) {
                    return;
                }
                const first = items[0];
                const last = items[items.length - 1];
                if (event.shiftKey && document.activeElement === first) {
                    event.preventDefault();
                    last.focus();
                } else if (!event.shiftKey && document.activeElement === last) {
                    event.preventDefault();
                    first.focus();
                }
            }
        };

        document.addEventListener('keydown', onKeyDown);

        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.body.style.overflow = previousOverflow;
            lenis?.start();
            previouslyFocused?.focus?.();
        };
    }, [open, onClose]);

    if (!open) {
        return null;
    }

    return createPortal(
        <div
            className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label={title}
        >
            <button
                type="button"
                aria-label="Close overlay"
                tabIndex={-1}
                onClick={onClose}
                className="animate-fade-in absolute inset-0 cursor-default bg-base/80 backdrop-blur-sm"
            />
            <div
                ref={panelRef}
                data-lenis-prevent
                className={cn(
                    'animate-overlay-in relative z-10 mt-4 max-h-[90vh] w-full max-w-3xl overflow-y-auto overscroll-contain rounded-2xl border border-line bg-panel shadow-2xl shadow-black/50 sm:mt-[6vh]',
                    className,
                )}
            >
                <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-line bg-panel/90 px-6 py-4 backdrop-blur">
                    <div className="min-w-0">
                        {eyebrow && (
                            <div className="text-xs font-medium uppercase tracking-[0.15em] text-muted">
                                {eyebrow}
                            </div>
                        )}
                        <h2 className="truncate text-lg font-medium text-ink">
                            {title}
                        </h2>
                    </div>
                    <button
                        ref={closeRef}
                        type="button"
                        onClick={onClose}
                        aria-label="Close"
                        className="rounded-lg border border-line p-2 text-muted transition-colors hover:border-accent/60 hover:text-accent focus-visible:ring-2 focus-visible:ring-accent/60"
                    >
                        <X className="size-4" />
                    </button>
                </div>
                <div className="px-6 py-6">{children}</div>
            </div>
        </div>,
        document.body,
    );
}
