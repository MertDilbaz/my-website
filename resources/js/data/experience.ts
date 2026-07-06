export type EntryType = 'feat' | 'fix' | 'commit' | 'release';

export type TimelineEntry = {
    type: EntryType;
    date: string;
    title: string;
    org: string;
    description: string;
    tags?: string[];
};

export const experience: TimelineEntry[] = [
    {
        type: 'feat',
        date: '5 months',
        title: 'Software Developer',
        org: 'EYOSoft',
        description:
            'Joined as a Java developer and contributed to several projects — building backend services and full-stack features with Java, Spring Boot, and React.',
        tags: ['Java', 'Spring Boot', 'React'],
    },
    {
        type: 'release',
        date: 'Graduated',
        title: 'B.Sc. Computer Engineering',
        org: 'Sivas Cumhuriyet University',
        description:
            'Graduated with a cumulative GPA of 3.09/4. Coursework covered software engineering, algorithms, databases, and web systems.',
        tags: ['Algorithms', 'Databases', 'Software Eng.'],
    },
];
