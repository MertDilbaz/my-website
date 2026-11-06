export type SkillGroup = {
    label: string;
    icon: 'code' | 'layout' | 'server' | 'wrench';
    items: string[];
};

export const skillGroups: SkillGroup[] = [
    {
        label: 'Languages',
        icon: 'code',
        items: ['Java', 'Go', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
    },
    {
        label: 'Backend & Data',
        icon: 'server',
        items: [
            'Spring Boot',
            'REST APIs',
            'Spring Security',
            'JPA / Hibernate',
            'PostgreSQL',
            'MySQL',
            'SQLite',
        ],
    },
    {
        label: 'Frontend & Desktop',
        icon: 'layout',
        items: ['React', 'Svelte', 'Wails', 'Tailwind CSS', 'HTML', 'CSS'],
    },
    {
        label: 'AI & Developer Tools',
        icon: 'wrench',
        items: [
            'LLM Tool Calling',
            'MCP',
            'Workflow Validation',
            'Git',
            'GitHub',
            'Linux',
            'Postman',
        ],
    },
];

export const stats: { label: string; value: string }[] = [
    { label: 'cumulative gpa', value: '3.09' },
    { label: 'featured projects', value: '3' },
    { label: 'AI course certificate', value: '1' },
];
