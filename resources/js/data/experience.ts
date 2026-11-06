export type EntryType = 'feat' | 'fix' | 'commit' | 'release';

export type TimelineEntry = {
    type: EntryType;
    date: string;
    title: string;
    org: string;
    description: string;
    tags?: string[];
    link?: { label: string; href: string };
};

export const experience: TimelineEntry[] = [
    {
        type: 'release',
        date: 'October 2026',
        title: 'B.Sc. Computer Engineering',
        org: 'Sivas Cumhuriyet University',
        description:
            'Graduated in October 2026 with a cumulative GPA of 3.09/4.00.',
        tags: ['Computer Engineering', 'GPA 3.09 / 4.00'],
    },
    {
        type: 'release',
        date: 'July – October 2026',
        title: 'Artificial Intelligence Course',
        org: 'Samsung Innovation Campus',
        description:
            'Successfully completed the Artificial Intelligence course, held from July 1 to October 7, 2026. Certificate issued October 7, 2026.',
        tags: ['Artificial Intelligence', 'Certificate of Completion'],
        link: {
            label: 'View certificate (PDF)',
            href: '/certificates/Samsung_Innovation_Campus_AI_Mert_Dilbaz.pdf',
        },
    },
    {
        type: 'feat',
        date: 'February – August 2026',
        title: 'Software Engineering Intern',
        org: 'EYOSoft',
        description:
            'Contributed to REST API and microservice design discussions in a Java environment; participated in Agile stand-ups and collaborative code reviews.',
        tags: ['Java', 'REST APIs', 'Agile'],
    },
];
