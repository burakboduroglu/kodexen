'use client'

import { PostCard } from '@/components/post/post-card'
import PostInput from '@/components/post/post-input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useRouter } from 'next/navigation'
import { LeftSidebar } from '@/components/sidebar/left-sidebar'
import { RightSidebar } from '@/components/sidebar/right-sidebar'
import { SidebarProvider } from '@/contexts/sidebar-context'
import { posts } from '@/lib/mock'

export default function FeedPage() {
  const router = useRouter()

  const handlePostClick = (postId: string) => {
    router.push(`/p/${postId}`)
  }

  return (
    <SidebarProvider>
      <div className='flex justify-center w-full'>
        <div className='flex w-full max-w-7xl'>
          <LeftSidebar />
          <main className='flex-1 min-h-screen border-x border-border max-w-2xl w-full mx-auto'>
            <div className='px-4'>
              <div className='mb-4'>
                <PostInput />
              </div>
              <Tabs defaultValue='all'>
                <div className='flex justify-center pb-3'>
                  <TabsList className='grid w-11/12 grid-cols-2'>
                    <TabsTrigger value='all'>Tüm Gönderiler</TabsTrigger>
                    <TabsTrigger value='following'>Takip Edilenler</TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent value='all' className='space-y-4 mt-4'>
                  {posts.map((post) => (
                    <div key={post.id} onClick={() => handlePostClick(post.id)}>
                      <PostCard post={post} />
                    </div>
                  ))}
                </TabsContent>
                <TabsContent value='following' className='space-y-4 mt-4'>
                  <p className='text-center text-muted-foreground'>
                    Gönderileri görmek için birilerini takip et.
                  </p>
                </TabsContent>
              </Tabs>
            </div>
          </main>
          <RightSidebar />
        </div>
      </div>
    </SidebarProvider>
  )
}
