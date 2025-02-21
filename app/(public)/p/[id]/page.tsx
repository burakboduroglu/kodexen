import { PostCard } from '@/components/post/post-card'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

async function getPost(id: string): Promise<Post | null> {
  const dummyPost: Post = {
    id: id,
    content:
      "TypeScript ile geliştirdiğim yeni projemin kaynak kodlarını GitHub'da paylaştım! Göz atmak isteyenler için link yorumlarda 🚀 #typescript #opensource",
    author: {
      id: 'user123',
      name: 'Burak Boduroglu',
      username: 'burakboduroglu',
      avatar: '',
    },
    createdAt: '2024-02-13',
    likes: 42,
    comments: 7,
    shares: 3,
    tags: ['typescript', 'opensource', 'webdev'],
    status: 'Arşivlendi',
  }

  return dummyPost
}

export default async function PostDetailsPage({ params }: { params: { postId: string } }) {
  const post = await getPost(params.postId)

  if (!post) {
    return (
      <div className='flex flex-col items-center justify-center min-h-[400px]'>
        <h1 className='text-2xl font-bold'>Gönderi bulunamadı.</h1>
        <p className='text-muted-foreground mt-2'>
          Bu gönderi silinmiş olabilir veya hiç var olmamış olabilir.
        </p>
        <Button asChild className='mt-4'>
          <Link href='/profile/posts'>
            <ArrowLeft className='w-4 h-4 mr-2' />
            Akışa Geri Dön
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className='container max-w-2xl mx-auto py-4 px-4'>
      <div className='flex items-center justify-between mb-6'>
        <Button variant='ghost' asChild>
          <Link href='/feed'>
            <ArrowLeft className='w-4 h-4 mr-2' />
            Akışa Geri Dön
          </Link>
        </Button>
      </div>
      <PostCard post={post} isDetailsView={true} />
    </div>
  )
}
