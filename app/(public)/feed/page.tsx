'use client'

import { PostCard } from '@/components/post/post-card'
import PostInput from '@/components/post/post-input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useRouter } from 'next/navigation'
import { LeftSidebar } from '@/components/sidebar/left-sidebar'
import { RightSidebar } from '@/components/sidebar/right-sidebar'
import { SidebarProvider } from '@/contexts/sidebar-context'

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
    router.push(`/p/${postId}`)
  }

  return (
    <SidebarProvider>
      <div className="flex justify-center w-full">
        <div className="flex w-full max-w-7xl">
          <LeftSidebar />
          <main className="flex-1 min-h-screen border-x border-border max-w-2xl w-full mx-auto">
            <div className="px-4">
              <div className="mb-4">
                <PostInput />
              </div>
              <Tabs defaultValue="all">
                <div className="flex justify-center pb-3">
                  <TabsList className="grid w-11/12 grid-cols-2">
                    <TabsTrigger value="all">Tüm Gönderiler</TabsTrigger>
                    <TabsTrigger value="following">Takip Edilenler</TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent value="all" className="space-y-4 mt-4">
                  {dummyPosts.map((post) => (
                    <div key={post.id} onClick={() => handlePostClick(post.id)}>
                      <PostCard post={post} />
                    </div>
                  ))}
                </TabsContent>
                <TabsContent value="following" className="space-y-4 mt-4">
                  <p className="text-center text-muted-foreground">
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
