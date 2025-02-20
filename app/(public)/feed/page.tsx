'use client'

import { PostCard } from '@/components/post/post-card'
import PostInput from '@/components/post/post-input'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useRouter } from 'next/navigation'

const dummyPosts: Post[] = [
  {
    id: '1',
    content:
      "Just deployed my first machine learning model to production! Here's a quick example of how to load and predict with sklearn 🚀 #AI #MachineLearning",
    author: {
      id: 'u1',
      name: 'Sarah Chen',
      username: 'sarahcodes',
      avatar: '',
    },
    createdAt: new Date().toISOString(),
    likes: 42,
    comments: 5,
    shares: 3,
    tags: ['AI', 'MachineLearning'],
    status: 'Yayında',
    codeSnippet: {
      language: 'python',
      code: `import joblib\n\n# Load the model\nmodel = joblib.load('model.pkl')\n\n# Make predictions\npredictions = model.predict(X_test)\nprint(f"Accuracy: {accuracy_score(y_test, predictions):.2f}")`,
    },
  },
  {
    id: '2',
    content:
      'Check out this neat TypeScript utility type I made for handling async state! 💪 #TypeScript #WebDev',
    author: {
      id: 'u2',
      name: 'Alex Kumar',
      username: 'alexdev',
      avatar: '',
    },
    createdAt: new Date(Date.now() - 3600000).toISOString(),
    likes: 28,
    comments: 12,
    shares: 4,
    tags: ['TypeScript', 'WebDev'],
    status: 'Yayında',
    codeSnippet: {
      language: 'typescript',
      code: `type AsyncState<T> = {\n  data: T | null;\n  loading: boolean;\n  error: Error | null;\n}\n\ntype AsyncAction<T> =\n  | { type: 'pending' }\n  | { type: 'fulfilled'; data: T }\n  | { type: 'rejected'; error: Error };`,
    },
  },
  {
    id: '3',
    content:
      'Found this amazing article about WebAssembly and its impact on web performance. Must read! #WebDev #Performance',
    author: {
      id: 'u3',
      name: 'Maria Rodriguez',
      username: 'mariatech',
      avatar: '',
    },
    createdAt: new Date(Date.now() - 7200000).toISOString(),
    likes: 15,
    comments: 3,
    shares: 7,
    tags: ['WebDev', 'Performance'],
    status: 'Yayında',
    linkPreview: {
      url: '',
      title: "WebAssembly Developer's Guide",
      image: '',
    },
  },
]

export default function FeedPage() {
  const router = useRouter()

  const handlePostClick = (postId: string) => {
    router.push(`/profile/posts/${postId}`)
  }

  return (
    <div className='container max-w-2xl mx-auto py-4 px-4'>
      <Card className='mb-4'>
        <PostInput />
      </Card>

      <Tabs defaultValue='all' className='mb-4'>
        <TabsList className='grid w-full grid-cols-3'>
          <TabsTrigger value='all'>All Posts</TabsTrigger>
          <TabsTrigger value='following'>Following</TabsTrigger>
          <TabsTrigger value='trending'>Trending</TabsTrigger>
        </TabsList>
        <TabsContent value='all' className='space-y-4 mt-4'>
          {dummyPosts.map((post) => (
            <div key={post.id} onClick={() => handlePostClick(post.id)}>
              <PostCard post={post} />
            </div>
          ))}
        </TabsContent>
        <TabsContent value='following' className='space-y-4 mt-4'>
          <p className='text-center text-muted-foreground'>
            Follow some engineers to see their posts here!
          </p>
        </TabsContent>
        <TabsContent value='trending' className='space-y-4 mt-4'>
          <p className='text-center text-muted-foreground'>Loading trending posts...</p>
        </TabsContent>
      </Tabs>
    </div>
  )
}
