'use client'

import { Home, Settings, User } from 'lucide-react'
import Link from 'next/link'
import { useSidebar } from '@/contexts/sidebar-context'

export function LeftSidebar() {
  const { isLeftSidebarOpen } = useSidebar()

  return (
    <aside className='w-72 flex-none'>
      <div className='sticky top-0 h-screen flex flex-col px-4'>
        <nav className='space-y-2 mt-4'></nav>
      </div>
    </aside>
  )
}
