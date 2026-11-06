import { Menu, X } from 'lucide-react';
import { useState } from 'react';

import { navLinks } from '@/data/nav';
import { profile } from '@/data/profile';

export function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 sm:pt-4">
            <nav className="mx-auto flex h-12 w-full max-w-5xl items-center justify-between gap-4 rounded-full border border-line bg-base/70 px-3 shadow-lg shadow-black/40 backdrop-blur-md sm:px-4">
                <a
                    href="#top"
                    className="flex shrink-0 items-center gap-2.5 transition-opacity hover:opacity-80"
                >
                    <span className="size-1.5 rounded-full bg-accent" />
                    <span className="text-sm font-semibold tracking-tight text-ink">
                        Mert Dilbaz
                    </span>
                </a>

                <div className="hidden items-center gap-6 md:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="relative text-sm text-muted transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-ink after:transition-all after:duration-200 hover:text-ink hover:after:w-full"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className="flex shrink-0 items-center gap-2">
                    <a
                        href={profile.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden rounded-full bg-ink px-3.5 py-1.5 text-xs font-medium text-base transition-colors hover:bg-white sm:inline-flex"
                    >
                        Resume
                    </a>
                    <button
                        type="button"
                        onClick={() => setOpen((value) => !value)}
                        className="rounded-full border border-line p-2 text-muted transition-colors hover:border-muted hover:text-ink md:hidden"
                        aria-label="Toggle menu"
                        aria-expanded={open}
                    >
                        {open ? (
                            <X className="size-4" />
                        ) : (
                            <Menu className="size-4" />
                        )}
                    </button>
                </div>
            </nav>

            {open && (
                <div className="mx-auto mt-2 w-full max-w-5xl rounded-2xl border border-line bg-base/95 p-2 shadow-lg shadow-black/40 backdrop-blur-md md:hidden">
                    <div className="flex flex-col">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="rounded-lg px-3 py-2.5 text-sm text-muted transition-colors hover:bg-panel hover:text-ink"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href={profile.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setOpen(false)}
                            className="mt-1 rounded-lg bg-ink px-3 py-2.5 text-sm font-medium text-base"
                        >
                            Resume
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
