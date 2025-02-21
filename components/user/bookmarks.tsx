'use client'

import { PostCard } from '@/components/post/post-card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { FileText } from 'lucide-react'
import { posts } from '@/lib/mock'

export function Bookmarks() {
  return (
    <Tabs defaultValue='posts' className='w-full'>
      {/* TabsList component is used to render the tabs. */}
      <TabsList className='w-full grid grid-cols-1'>
        <TabsTrigger value='posts' className='flex items-center gap-2'>
          <FileText className='w-4 h-4' />
          Gönderiler ({posts.length})
        </TabsTrigger>
      </TabsList>

      {/* TabsContent component is used to render the content of the tabs. */}
      <TabsContent value='posts' className='mt-6 space-y-4'>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} isDetailsView={false} />
        ))}
      </TabsContent>
    </Tabs>
  )
}
