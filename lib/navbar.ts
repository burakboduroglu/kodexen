import {BookOpen, Command, Frame} from "lucide-react";

export  const data = {
    user: {
        name: 'Burak Boduroglu',
        email: 'm@example.com',
        avatar: '',
    },
    navMain: [
        {
            title: 'Ana Sayfa',
            url: '/dashboard',
            icon: Command,
            isActive: true,
            items: [
                {
                    title: 'Akış',
                    url: '/feed',
                },
            ],
        },
        {
            title: 'Profil',
            url: '/settings',
            icon: Frame,
            items: [
                {
                    title: 'Paylaşımlarım',
                    url: '/settings/posts',
                },
            ],
        },
        {
            title: 'Topluluk',
            url: '/community',
            icon: BookOpen,
            items: [
                {
                    title: 'Gruplar',
                    url: '#',
                },
                {
                    title: 'Etkinlikler',
                    url: '#',
                },
                {
                    title: 'Mentorlar',
                    url: '#',
                },
            ],
        },
    ],
}