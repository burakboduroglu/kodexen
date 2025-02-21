'use client'

import { PostCard } from '@/components/post/post-card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Code2, FileText } from 'lucide-react'

// This will be replaced with real data from API
const dummyBookmarks = {
  posts: [
    {
      id: '1',
      content: 'TailwindCSS ile responsive tasarım best practices #frontend #css',
      author: {
        id: 'u1',
        name: 'Burak Boduroğlu',
        username: 'burakboduroglu',
        avatar: '',
      },
      createdAt: new Date(Date.now() - 3600000).toISOString(),
      likes: 24,
      comments: 5,
      shares: 2,
      tags: ['frontend', 'css'],
      status: 'Yayında' as const,
    },
  ],
  codeSnippets: [
    {
      id: '1',
      content: 'React custom hook örneği #react #hooks',
      author: {
        id: 'u2',
        name: 'Burak Boduroğlu',
        username: 'burakboduroglu',
        avatar: '',
      },
      createdAt: new Date(Date.now() - 7200000).toISOString(),
      likes: 42,
      comments: 8,
      shares: 12,
      tags: ['react', 'hooks'],
      status: 'Yayında' as const,
      codeSnippet: {
        language: 'typescript',
        code: `const useLocalStorage = <T,>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue] as const
}`,
      },
    },
  ],
}

export function Bookmarks() {
  return (
    <Tabs defaultValue='posts' className='w-full'>
      <TabsList className='w-full grid grid-cols-2'>
        <TabsTrigger value='posts' className='flex items-center gap-2'>
          <FileText className='w-4 h-4' />
          Gönderiler ({dummyBookmarks.posts.length})
        </TabsTrigger>
        <TabsTrigger value='code' className='flex items-center gap-2'>
          <Code2 className='w-4 h-4' />
          Kod Parçacıkları ({dummyBookmarks.codeSnippets.length})
        </TabsTrigger>
      </TabsList>

      <TabsContent value='posts' className='mt-6 space-y-4'>
        {dummyBookmarks.posts.map((post) => (
          <PostCard key={post.id} post={post} isDetailsView={false} />
        ))}
      </TabsContent>

      <TabsContent value='code' className='mt-6 space-y-4'>
        {dummyBookmarks.codeSnippets.map((snippet) => (
          <PostCard key={snippet.id} post={snippet} isDetailsView={false} />
        ))}
      </TabsContent>
    </Tabs>
  )
}
