type Post = {
  id: string
  content: string
  author: {
    id: string
    name: string
    username: string
    avatar: string
  }
  createdAt: string
  likes: number
  comments: number
  shares: number
  tags: string[]
  status: 'Taslak' | 'Yayında' | 'Arşivlendi'
}
