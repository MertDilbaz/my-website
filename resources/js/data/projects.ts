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
        slug: 'mevzun',
        title: 'Mevzun',
        year: '2026 · In development',
        tagline: 'Legal workspace & AI assistant',
        summary:
            'A local-first desktop workspace bringing legal case files, documents, notes, and AI-assisted workflows into one application. Designed around explicit, user-controlled UYAP case operations.',
        role: 'Independent project',
        stack: ['Go', 'Wails', 'Svelte', 'SQLite / SQLCipher', 'MCP', 'LLM Tool Calling'],
        problem:
            'Legal professionals often move between case portals, document tools, and separate notes. That fragmentation makes it harder to keep context while working on a case.',
        approach: [
            'Built a desktop-oriented, local-first application using Go, Wails, and Svelte, with encrypted local data storage.',
            'Designed case and document workflows around actions initiated by the user, rather than unattended bulk collection.',
            'Developed MCP tools for scoped access to cases, documents, and document chunks, with execution and retrieval limits.',
            'Used field testing and diagnostic packages to investigate UYAP session and document-handling integration issues.',
        ],
        outcome:
            'An actively developed legal workspace with AI-assisted document workflows. UYAP integration and compatibility work remain in progress; it is not an official UYAP product.',
        links: [],
        featured: true,
    },
    {
        slug: 'banking-ai-harness',
        title: 'Banking AI Harness',
        year: '2026 · Proof of concept',
        tagline: 'Agentic banking assistant architecture',
        summary:
            'A Java-based proof of concept that translates natural-language banking requests into validated, approval-aware workflows using LLM tool calling, MCP, and mock banking services.',
        role: 'Independent proof of concept',
        stack: ['Java', 'MCP', 'LLM Tool Calling', 'Schema Validation', 'Mock Banking APIs'],
        problem:
            'Natural-language banking assistants must do more than generate responses: they need to understand account context, validate instructions, and keep sensitive actions under explicit user control.',
        approach: [
            'Designed a single orchestrator that combines native LLM tool calling with MCP tools for banking operations.',
            'Used schema validation and controlled execution steps to turn requests into checkable, approval-aware instructions.',
            'Implemented mock banking services for operations such as scheduled transfers, price-triggered gold sales, and transaction inquiries.',
            'Tested workflows through automated checks and live-model demo scenarios, including validation and rejection cases.',
        ],
        outcome:
            'A working architecture proof of concept with validated demo flows. It operates on mock services rather than real bank accounts, and some scenarios remain experimental.',
        links: [],
        featured: true,
    },
    {
        slug: 'my-smart-garden',
        title: 'My Smart Garden',
        year: '2026 · Prototype',
        tagline: 'IoT monitoring system',
        summary:
            'An IoT project for monitoring soil conditions through ESP32 sensor nodes, a wireless gateway, backend services, and application interfaces.',
        role: 'Independent project',
        stack: ['ESP32', 'ESP-NOW', 'Go', 'PostgreSQL', 'Flutter'],
        problem:
            'Monitoring several growing areas manually is time-consuming. A small wireless sensor network can make soil data available remotely and support informed watering decisions.',
        approach: [
            'Defined a pilot architecture with one gateway and three soil-moisture sensor nodes.',
            'Designed ESP-NOW communication between sensor nodes and the gateway, with Wi-Fi connectivity for upstream data.',
            'Planned Go backend services with PostgreSQL storage and mobile access through Flutter.',
            'Considered BLE provisioning to simplify network setup for the devices.',
        ],
        outcome:
            'A prototype/pilot architecture under development; the full sensor network is not presented as a deployed product.',
        links: [],
        featured: true,
    },
];
