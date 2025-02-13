import { columns } from '@/components/table/columns'
import { DataTable } from '@/components/table/data-table'

// Fetch data from API here.
async function getData(): Promise<Post[]> {
  return [
    {
      id: '728ed52f',
      content:
        "TypeScript ile geliştirdiğim yeni projemin kaynak kodlarını GitHub'da paylaştım! Göz atmak isteyenler için link yorumlarda 🚀 #typescript #opensource",
      author: {
        id: 'user123',
        name: 'Burak Boduroglu',
        username: 'burakboduroglu',
        avatar: '/avatars/burak.jpg',
      },
      createdAt: '2024-02-13',
      likes: 42,
      comments: 7,
      shares: 3,
      tags: ['typescript', 'opensource', 'webdev'],
      status: 'Arşivlendi',
    },
    {
      id: '489e1d42',
      content:
        'React ve Next.js ile mikroservis mimarisi üzerine bir yazı hazırladım. Deneyimlerimi paylaşmak istedim. Düşüncelerinizi bekliyorum! 💭 #react #nextjs #microservices',
      author: {
        id: 'user456',
        name: 'Ahmet Yılmaz',
        username: 'ahmetyilmaz',
        avatar: '/avatars/ahmet.jpg',
      },
      createdAt: '2024-02-13',
      likes: 128,
      comments: 23,
      shares: 15,
      tags: ['react', 'nextjs', 'microservices'],
      status: 'Arşivlendi',
    },
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className='container mx-auto p-5'>
      <h1>
        <span className='text-lg font-bold'>Gönderiler</span>
        <p>
          <span className='text-sm text-gray-500'>{data.length} gönderi bulundu</span>
        </p>
      </h1>
      <DataTable columns={columns} data={data} />
    </div>
  )
}
