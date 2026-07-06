export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-line py-8">
            <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
                <p className="text-xs text-muted">© {year} Mert Dilbaz</p>
                <p className="text-xs text-muted">
                    built with Laravel, React &amp; GSAP
                </p>
                <a
                    href="#top"
                    className="text-xs text-muted transition-colors hover:text-ink"
                >
                    Back to top ↑
                </a>
            </div>
        </footer>
    );
}
