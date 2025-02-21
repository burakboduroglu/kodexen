import { PostCard } from '@/components/post/post-card'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { DeletePostButton } from '@/components/post/delete-post-button'
import { posts } from '@/lib/mock'

// This will be replaced with actual API call
async function getPost(id: string): Promise<Post | null> {
  const dummyPost: Post = posts[0]

  return dummyPost
}

async function deletePost(id: string) {
  'use server'
  console.log('Deleting post:', id)
  // Add your delete logic here
  return true
}

export default async function PostDetailsPage({
  params,
  searchParams,
}: {
  params: { postId: string }
  searchParams: { action?: string }
}) {
  const post = await getPost(params.postId)

  // Handle delete action from URL
  if (searchParams.action === 'delete' && post) {
    await deletePost(params.postId)
    redirect('/settings/posts')
  }

  if (!post) {
    return (
      <div className='flex flex-col items-center justify-center min-h-[400px]'>
        <h1 className='text-2xl font-bold'>Gönderi bulunamadı.</h1>
        <p className='text-muted-foreground mt-2'>
          Bu gönderi silinmiş olabilir veya hiç var olmamış olabilir.
        </p>
        <Button asChild className='mt-4'>
          <Link href='/settings/posts'>
            <ArrowLeft className='w-4 h-4 mr-2' />
            Gönderilere Geri Dön
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className='container max-w-2xl mx-auto py-4 px-4'>
      <div className='flex items-center justify-between mb-6'>
        <Button variant='ghost' asChild>
          <Link href='/settings/posts'>
            <ArrowLeft className='w-4 h-4 mr-2' />
            Gönderilere Geri Dön
          </Link>
        </Button>
        <DeletePostButton postId={post.id} onDelete={deletePost} />
      </div>
      <PostCard post={post} isDetailsView={true} />
    </div>
  )
}
