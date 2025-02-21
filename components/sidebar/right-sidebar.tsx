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
    <aside className='hidden lg:block w-[320px] flex-none'>
      <div className='sticky top-4 space-y-6 px-4'>
        {/* Trending Tags */}
        <div className='bg-background rounded-xl border border-border p-4'>
          <h3 className='text-lg font-semibold mb-3'>Neler oluyor?</h3>
          <div className='space-y-1'>
            {dummyTags.map((tag) => (
              <div
                key={tag.name}
                className='flex items-center justify-between hover:bg-accent/50 rounded-lg cursor-pointer transition-colors p-2'>
                <div className='flex flex-col'>
                  <span className='font-medium'>{tag.name}</span>
                  <span className='text-xs text-muted-foreground'>
                    {tag.count.toLocaleString()} gönderi
                  </span>
                </div>
                <Ellipsis className='h-5 w-5 text-muted-foreground' />
              </div>
            ))}
          </div>
        </div>

        {/* Who to follow */}
        <div className='bg-background rounded-xl border border-border p-4'>
          <h3 className='text-lg font-semibold mb-3'>Kimi takip etmeli</h3>
          <div className='space-y-3'>
            {suggestedUsers.map((user) => (
              <div
                key={user.id}
                className='flex items-center justify-between hover:bg-accent/50 rounded-lg cursor-pointer transition-colors p-2'>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 rounded-full bg-accent' />
                  <div>
                    <p className='font-medium line-clamp-1'>{user.name}</p>
                    <p className='text-sm text-muted-foreground'>@{user.username}</p>
                  </div>
                </div>
                <Button variant='outline' size='sm' className='ml-2 whitespace-nowrap'>
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
