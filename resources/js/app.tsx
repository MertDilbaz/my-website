import { createInertiaApp } from '@inertiajs/react';

import { SmoothScrollProvider } from '@/components/providers/smooth-scroll-provider';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    progress: {
        color: '#34d399',
    },
    withApp: (app) => <SmoothScrollProvider>{app}</SmoothScrollProvider>,
});
