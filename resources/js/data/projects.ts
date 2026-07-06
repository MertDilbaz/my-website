export type ProjectLink = { label: string; href: string };

export type Project = {
    slug: string;
    title: string;
    year: string;
    tagline: string;
    summary: string;
    role: string;
    stack: string[];
    problem: string;
    approach: string[];
    outcome: string;
    links: ProjectLink[];
    featured: boolean;
};

export const projects: Project[] = [
    {
        slug: 'manul-sentinel',
        title: 'Manul Sentinel',
        year: '2026',
        tagline: 'Personal job radar',
        summary:
            'A Python assistant that scans job sources, scores postings against a target software/IT profile, dedupes them in SQLite, and sends clean Telegram digests on a schedule.',
        role: 'Solo',
        stack: ['Python', 'SQLite', 'Telegram API', 'GitHub Actions', 'YAML'],
        problem:
            "Checking dozens of job boards every day is exhausting, and most postings aren't even a fit for an early-career candidate.",
        approach: [
            'Built a modular source layer that normalizes postings from many boards and ATS platforms (HRPeak, Workable, Greenhouse, Lever, and more) into a common Job model.',
            'Wrote a rule-based scorer that ranks each posting on software/IT relevance, seniority, location, and target-role fit, then hard-filters the rest.',
            'Used SQLite for duplicate detection so the same posting is never sent twice, and packed results into paginated Telegram digest cards.',
            'Scheduled unattended weekday runs on GitHub Actions with YAML-based config for sources and scoring.',
        ],
        outcome:
            'A quiet, self-running job radar that surfaces only relevant, non-duplicate roles straight to Telegram.',
        links: [
            {
                label: 'Code',
                href: 'https://github.com/MertDilbaz/manul-radar',
            },
        ],
        featured: true,
    },
    {
        slug: 'pixel-asset-generator',
        title: 'Pixel Asset Generator',
        year: '2026',
        tagline: 'AI pixel-art asset pipeline',
        summary:
            'A FastAPI service that turns text prompts into pixel-art game assets — generating images with Google Vertex AI, then running a pixel pipeline to produce clean, categorized 32×32 sprites.',
        role: 'Solo',
        stack: ['Python', 'FastAPI', 'Vertex AI', 'Pillow', 'Pydantic'],
        problem:
            'Hand-drawing consistent pixel-art sprites is slow, and game-jam teams often need many small assets fast.',
        approach: [
            'Exposed batch endpoints through FastAPI with typed Pydantic request models.',
            'Generated raw images from prompts using Google Vertex AI (Gemini / Imagen).',
            'Ran a dedicated pixel pipeline that downscales each raw image into a crisp 32×32 pixel-art sprite.',
            'Saved categorized raw and pixel outputs per asset so results are easy to browse and drop into a project.',
        ],
        outcome:
            'A self-service API that produces categorized pixel-art assets in batches, straight from prompts.',
        links: [
            {
                label: 'Code',
                href: 'https://github.com/MertDilbaz/asset-generator-tool',
            },
        ],
        featured: true,
    },
    {
        slug: 'getajob',
        title: 'GetAJob',
        year: '2026',
        tagline: 'Full-stack job portal',
        summary:
            'A full-stack job portal where candidates register, browse listings, and apply, while a Spring Boot backend handles auth, applications, and notifications end to end.',
        role: 'Full-stack · solo',
        stack: [
            'Java',
            'Spring Boot',
            'Spring Security',
            'JWT',
            'Spring Data JPA',
            'React',
        ],
        problem:
            'I wanted one project to practice building a real, secured platform across the whole stack.',
        approach: [
            'Structured a layered Spring Boot backend — controllers, DTOs, entities, and config — covering companies, job listings, applications, careers, and notifications.',
            'Secured the API with Spring Security and stateless JWT authentication (jjwt).',
            'Modeled the hiring flow with Spring Data JPA, including profile and resume image uploads.',
            'Added email notifications through Spring Mail and built a React frontend that consumes the API.',
        ],
        outcome:
            'A complete, secured job portal covering the full flow from registration and login to applying for a role.',
        links: [
            {
                label: 'Code',
                href: 'https://github.com/MertDilbaz/GetAJob-Fullstack-JobPortal',
            },
        ],
        featured: true,
    },
];
