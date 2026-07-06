export type SkillGroup = {
    label: string;
    icon: 'code' | 'layout' | 'server' | 'wrench';
    items: string[];
};

export const skillGroups: SkillGroup[] = [
    {
        label: 'Languages',
        icon: 'code',
        items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
    },
    {
        label: 'Backend',
        icon: 'server',
        items: [
            'Spring Boot',
            'REST APIs',
            'Spring Security',
            'JPA / Hibernate',
            'MySQL',
            'H2',
        ],
    },
    {
        label: 'Frontend',
        icon: 'layout',
        items: ['React', 'JavaScript', 'TailwindCSS', 'HTML', 'CSS'],
    },
    {
        label: 'Tools & DevOps',
        icon: 'wrench',
        items: ['Git', 'GitHub', 'Postman', 'Linux'],
    },
];

export const stats: { label: string; value: string }[] = [
    { label: 'cumulative gpa', value: '3.09' },
    { label: 'projects shipped', value: '3' },
    { label: 'industry experience', value: '5 mo' },
];
