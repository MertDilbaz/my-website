import { Mail } from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';

import { socials } from '@/data/profile';
import { GithubIcon, LinkedinIcon } from '@/components/ui/social-icons';
import { cn } from '@/lib/utils';

type IconCmp = ComponentType<SVGProps<SVGSVGElement>>;

const iconFor: Record<string, IconCmp> = {
    github: GithubIcon,
    linkedin: LinkedinIcon,
};

type SocialLinksProps = {
    className?: string;
};

export function SocialLinks({ className }: SocialLinksProps) {
    return (
        <div className={cn('flex items-center gap-2', className)}>
            {socials.map((social) => {
                const Icon = iconFor[social.icon] ?? Mail;
                const isMail = social.icon === 'mail';
                return (
                    <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        title={social.label}
                        {...(!isMail && { target: '_blank', rel: 'noreferrer' })}
                        className="rounded-lg border border-line p-2.5 text-muted transition-colors hover:border-accent/60 hover:text-accent focus-visible:ring-2 focus-visible:ring-accent/60"
                    >
                        <Icon className="size-4" />
                    </a>
                );
            })}
        </div>
    );
}
