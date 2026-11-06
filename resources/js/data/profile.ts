export type Social = {
    label: string;
    handle: string;
    href: string;
    icon: 'github' | 'linkedin' | 'mail';
};

export const socials: Social[] = [
    {
        label: 'GitHub',
        handle: '@MertDilbaz',
        href: 'https://github.com/MertDilbaz',
        icon: 'github',
    },
    {
        label: 'LinkedIn',
        handle: 'in/mert-dilbaz',
        href: 'https://www.linkedin.com/in/mert-dilbaz-475033252/',
        icon: 'linkedin',
    },
    {
        label: 'Email',
        handle: 'mertdilbaz202@gmail.com',
        href: 'mailto:mertdilbaz202@gmail.com',
        icon: 'mail',
    },
];

export const profile = {
    name: 'Mert Dilbaz',
    role: 'Software Engineer',
    tagline:
        'Computer Engineer focused on backend development, AI-integrated applications, and software architecture. Building practical systems with Java, Go, and modern web technologies.',
    location: 'Manisa, Türkiye',
    focus: 'Backend & AI Systems',
    stack: 'Java · Go · Spring Boot',
    availability: 'Open to junior software engineering, backend & full-stack roles',
    bio: [
        'I am a Computer Engineering graduate from Sivas Cumhuriyet University (October 2026, GPA 3.09/4.00). My focus is backend development, practical software architecture, and integrating AI capabilities into applications.',
        'I work on Mevzun, a local-first legal desktop workspace with document and AI workflows, and Banking AI Harness, a Java-based proof of concept exploring controlled banking operations through LLM tool calling and MCP.',
        'During my studies, I joined EYOSoft as a software engineering intern. I also completed the Samsung Innovation Campus Artificial Intelligence course in October 2026. I care about maintainable services, clear boundaries, and testing systems against real use cases.',
    ],
    email: 'mertdilbaz202@gmail.com',
    resumeUrl: '/MertDilbazCV.pdf',
    socials,
} as const;
