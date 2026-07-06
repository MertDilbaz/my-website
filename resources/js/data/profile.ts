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
    role: 'Full-Stack Developer',
    tagline:
        'Backend-focused full-stack developer building reliable web apps — from Spring Boot APIs to React interfaces.',
    location: 'Manisa, Türkiye',
    availability: 'Open to junior & full-stack roles',
    bio: [
        "I'm a recent Computer Engineering graduate and full-stack developer with a focus on the backend. I'm most at home building REST APIs and services with Java and Spring Boot, and I pair them with React interfaces when a project needs one.",
        'I graduated from Sivas Cumhuriyet University with a 3.09/4 GPA, then worked as a Java developer at EYOSoft contributing to several projects. I care about clean, maintainable code, sensible architecture, and shipping things that actually work.',
    ],
    email: 'mertdilbaz202@gmail.com',
    resumeUrl: '/MertDilbazCV.pdf',
    socials,
} as const;
