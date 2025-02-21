'use client'

import { columns } from '@/components/table/columns'
import { DataTable } from '@/components/table/data-table'
import { posts } from '@/lib/mock'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const getData = async (): Promise<Post[]> => {
  return posts
}

export default function PostsPage() {
  const router = useRouter()
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getData()
        setPosts(data)
      } catch (error) {
        console.error('Gönderiler getirilemedi: ', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const handleRowClick = (row: Post) => {
    router.push(`/settings/posts/${row.id}`)
  }

  return (
    <div className='container mx-auto p-5'>
      <h1>
        <span className='text-lg font-bold'>Gönderiler</span>
        <p>
          <span className='text-sm text-gray-500'>
            {isLoading ? 'Yükleniyor...' : `${posts.length} gönderi bulundu`}
          </span>
        </p>
      </h1>
      <DataTable columns={columns} data={posts} onRowClick={handleRowClick} isLoading={isLoading} />
    </div>
  )
}
