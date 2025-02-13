'use client'

import * as React from 'react'
import { BookOpen, Command, Frame } from 'lucide-react'

import { NavMain } from '@/components/sidebar/nav-main'
import { NavUser } from '@/components/sidebar/nav-user'
import { Sidebar, SidebarContent, SidebarFooter, SidebarRail } from '@/components/ui/sidebar'

const data = {
  user: {
    name: 'Burak Boduroglu',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
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
        {
          title: 'Paylaş',
          url: '/profile/share',
        },
        {
          title: 'Kaydedilenler',
          url: '/dashboard/bookmarks',
        },
      ],
    },
    {
      title: 'Profil',
      url: '/profile',
      icon: Frame,
      items: [
        {
          title: 'Bilgilerim',
          url: '/profile/info',
        },
        {
          title: 'Paylaşımlarım',
          url: '/profile/posts',
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

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible='icon' {...props}>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
