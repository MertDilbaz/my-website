/**
 * Quiet ambient backdrop: a single soft glow near the top plus a gentle
 * vignette that darkens the edges. No grid. Purely decorative.
 */
export function AmbientBackground() {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        >
            <div className="absolute -top-1/3 left-1/2 h-[70vh] w-[130vw] -translate-x-1/2 rounded-full bg-white/[0.035] blur-[150px]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,transparent,rgba(0,0,0,0.55))]" />
        </div>
    );
}
