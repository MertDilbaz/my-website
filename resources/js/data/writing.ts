export type Article = {
    slug: string;
    title: string;
    date: string;
    readingTime: string;
    summary: string;
    tags: string[];
    body: string[];
};

export const articles: Article[] = [
    {
        slug: 'building-manul-sentinel',
        title: 'Building Manul Sentinel: a personal job radar in Python',
        date: '2026-06-20',
        readingTime: '7 min read',
        summary:
            'How I built a small Python service that scores job postings and ships only the relevant ones to Telegram.',
        tags: ['Python', 'Project'],
        body: [
            "Applying to jobs is mostly noise. Every morning I'd open the same handful of boards, scroll past senior roles I'd never get, and lose an hour. Manul Sentinel started as a way to get that hour back.",
            "The idea is simple: pull postings from several sources, normalize them into one Job model, then score each one against the profile I actually want — early-career, backend, Java, Turkey-based. Anything that doesn't fit gets hard-filtered before I ever see it.",
            "The part I'm happiest about is the dedup. A SQLite store keeps track of what's already been sent, so the same posting never hits my Telegram twice. The whole thing runs unattended on GitHub Actions and messages me a clean digest. It's a tiny system, but it does one job well.",
        ],
    },
    {
        slug: 'spring-boot-jwt-auth',
        title: 'Securing a Spring Boot REST API with JWT',
        date: '2026-03-10',
        readingTime: '8 min read',
        summary:
            'What I learned wiring Spring Security and JWT into the GetAJob backend.',
        tags: ['Java', 'Spring Boot', 'Security'],
        body: [
            'Authentication is one of those things that feels mysterious until you build it once. For GetAJob, I wanted stateless JWT auth on top of Spring Boot, so the frontend could hold a token and call the API without sessions.',
            "Spring Security is powerful but its configuration has a learning curve. The key was a filter that reads the token from the request, validates it with jjwt, and sets the authentication context so the controllers don't have to think about it.",
            'A few lessons: never put secrets in code, keep token lifetimes short, and return clear, consistent error responses. Once the filter was in place, protecting an endpoint came down to a single line in the security config.',
        ],
    },
    {
        slug: 'cs-grad-to-first-dev-job',
        title: 'From CS grad to first dev job: what actually helped',
        date: '2026-01-15',
        readingTime: '5 min read',
        summary:
            'A few honest notes on what got me from graduation to my first developer role.',
        tags: ['Career'],
        body: [
            "Graduating feels like the finish line until you realize it's the start. A degree proves you can learn; it doesn't prove you can ship. That gap is where most of us flounder.",
            "What helped me most was building real things in public. The projects on this site weren't tutorials — they were problems I actually had, which meant I cared enough to finish them. That's what gave me something to talk about in interviews.",
            "If you're in that gap right now: pick one problem, build the smallest thing that solves it, and put it somewhere people can see. Everything else compounds from there.",
        ],
    },
];
