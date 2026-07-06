import { About } from '@/components/sections/about';
import { Contact } from '@/components/sections/contact';
import { Experience } from '@/components/sections/experience';
import { Hero } from '@/components/sections/hero';
import { Skills } from '@/components/sections/skills';
import { Work } from '@/components/sections/work';
import { Writing } from '@/components/sections/writing';
import { SiteLayout } from '@/layouts/site-layout';

export default function Home() {
    return (
        <SiteLayout>
            <Hero />
            <About />
            <Skills />
            <Work />
            <Writing />
            <Experience />
            <Contact />
        </SiteLayout>
    );
}
