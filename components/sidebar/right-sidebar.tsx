'use client'

import { useSidebar } from '@/contexts/sidebar-context'
import { Button } from '../ui/button'
import { Ellipsis } from 'lucide-react'

const dummyTags = [
  { name: 'JavaScript', count: 1234 },
  { name: 'React', count: 890 },
  { name: 'TypeScript', count: 756 },
  { name: 'NextJS', count: 543 },
  { name: 'TailwindCSS', count: 432 },
]

const suggestedUsers = [
  {
    id: 'u4',
    name: 'John Doe',
    username: 'johndoe',
    avatar: '',
    bio: 'Senior Frontend Developer',
  },
  {
    id: 'u5',
    name: 'Jane Smith',
    username: 'janesmith',
    avatar: '',
    bio: 'Full Stack Developer',
  },
]

export function RightSidebar() {
  const { isRightSidebarOpen } = useSidebar()

  if (!isRightSidebarOpen) return null

  return (
    <aside className='w-80 pl-4 flex-none pt-4'>
      <div className='sticky top-0 h-screen flex flex-col'>
        {/* Trending Tags */}
        <div className='bg-background rounded-lg mb-10 border border-border p-5'>
          <h3 className='text-xl font-semibold mb-3'>Neler oluyor?</h3>
          <div className='space-y-2'>
            {dummyTags.map((tag) => (
              <div
                key={tag.name}
                className='flex items-center justify-between hover:bg-accent/50 pt-2 rounded-lg cursor-pointer transition-colors'>
                <div className='flex flex-col'>
                  <span>{tag.name}</span>
                  <span className='text-xs text-muted-foreground'>{tag.count} gönderi</span>
                </div>
                <Ellipsis />
              </div>
            ))}
          </div>
        </div>

        {/* Who to follow */}
        <div className='bg-background rounded-lg mb-10 border border-border p-5'>
          <h3 className='text-xl font-semibold mb-4'>Kimi takip etmeli</h3>
          <div className='space-y-4'>
            {suggestedUsers.map((user) => (
              <div key={user.id} className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 rounded-full bg-accent' />
                  <div>
                    <p className='font-semibold'>{user.name}</p>
                    <p className='text-sm text-muted-foreground'>@{user.username}</p>
                  </div>
                </div>
                <Button variant='outline' size='sm' className='rounded-full bg-white text-black'>
                  Takip Et
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}
