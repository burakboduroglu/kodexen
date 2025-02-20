import { notFound } from 'next/navigation'
import Image from 'next/image'

interface PageProps {
  params: {
    username: string
  }
}

export default async function UserProfilePage({ params }: PageProps) {
  const user = {
    username: 'burakboduroglu',
    avatar: '',
    bio: 'Full-stack developer, open-source enthusiast, and content creator.',
    followers: 1234,
    following: 4321,
  }

  if (!user) {
    notFound()
  }

  return (
    <main className='container mx-auto px-4 py-8'>
      <div className='flex flex-col items-center gap-6'>
        <div className='relative h-32 w-32'>
          <Image
            src={user.avatar || '/default-avatar.png'}
            alt={`${user.username}'s avatar`}
            fill
            className='rounded-full object-cover'
            priority
          />
        </div>

        <div className='text-center'>
          <h1 className='text-3xl font-bold'>{user.username}</h1>
          {user.bio && <p className='mt-2 text-gray-600'>{user.bio}</p>}
        </div>

        <div className='flex gap-4'>
          <div className='text-center'>
            <span className='text-xl font-semibold'>{user.followers}</span>
            <p className='text-sm text-gray-600'>Followers</p>
          </div>
          <div className='text-center'>
            <span className='text-xl font-semibold'>{user.following}</span>
            <p className='text-sm text-gray-600'>Following</p>
          </div>
        </div>
      </div>
    </main>
  )
}
