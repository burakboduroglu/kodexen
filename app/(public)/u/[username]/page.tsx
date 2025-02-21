import { notFound } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { PostCard } from '@/components/post/post-card'
import { GitHubLogoIcon, TwitterLogoIcon, LinkedInLogoIcon, GlobeIcon } from '@radix-ui/react-icons'
import { HeartIcon, UserPlus, UserRoundCheck } from 'lucide-react'
import { posts, users } from '@/lib/mock'

export default async function UserProfilePage() {
  const user = users[0]
  const userPosts = posts

  if (!user) {
    notFound()
  }

  return (
    <main className='container max-w-4xl mx-auto'>
      {/* Cover Image */}
      <div className='relative w-full h-[100px] md:h-[200px] mb-8 rounded-b-lg overflow-hidden bg-purple-900'>
        {/* Profile Image - Positioned over the cover image */}
        <div className='absolute pt-20 left-8'>
          <div className='relative h-28 w-28 rounded-full'>
            <div className='absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 dark:from-purple-600 dark:to-pink-400 rounded-full shadow-lg'>
              {user.name && (
                <div className='w-full h-full flex items-center justify-center text-white text-2xl font-bold'>
                  {user.name.charAt(0)}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Follow Button */}
        <div className='absolute bottom-4 right-4'>
          <div className='flex items-center gap-10'>
            {/* Stats */}
            <div className='flex gap-6 mt-4'>
              <div className='text-center'>
                <p className='flex flex-col justify-center items-center text-sm text-muted-foreground'>
                  <UserRoundCheck />
                  Takipçiler
                </p>
                <span className='text-xl font-semibold'>{user.followers}</span>
              </div>
              <div className='text-center'>
                <p className='flex flex-col justify-center items-center text-sm text-muted-foreground'>
                  <UserPlus />
                  Takip edilenler
                </p>
                <span className='text-xl font-semibold'>{user.following}</span>
              </div>
            </div>
            <Button variant='default'>
              <HeartIcon className='w-5 h-5 mr-2' />
              Takip Et
            </Button>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-4 justify-between'>
            <div>
              <h1 className='text-3xl font-bold'>{user.name}</h1>
            </div>
            {/* Social Links */}
            <div className='flex gap-4'>
              {user.socialLinks.github && (
                <a href={user.socialLinks.github} target='_blank' rel='noopener noreferrer'>
                  <GitHubLogoIcon className='w-5 h-5' />
                </a>
              )}
              {user.socialLinks.twitter && (
                <a href={user.socialLinks.twitter} target='_blank' rel='noopener noreferrer'>
                  <TwitterLogoIcon className='w-5 h-5' />
                </a>
              )}
              {user.socialLinks.linkedin && (
                <a href={user.socialLinks.linkedin} target='_blank' rel='noopener noreferrer'>
                  <LinkedInLogoIcon className='w-5 h-5' />
                </a>
              )}
              {user.socialLinks.website && (
                <a href={user.socialLinks.website} target='_blank' rel='noopener noreferrer'>
                  <GlobeIcon className='w-5 h-5' />
                </a>
              )}
            </div>
          </div>

          {/* User Info Section */}
          <div className='flex flex-col gap-2'>
            <p className='text-muted-foreground'>@{user.username}</p>
            {user.bio && <p className='mt-2 text-pretty'>{user.bio}</p>}
          </div>

          {/* Location and Join Date */}
          <div className='flex gap-6 items-center text-muted-foreground text-sm'>
            {user.location && <span>{user.location}</span>}
            <span>{user.joinDate}</span>
          </div>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue='posts' className='mt-1 mb-6'>
          <TabsList className='w-full justify-start border-b rounded-none'>
            <TabsTrigger value='posts'>Gönderiler</TabsTrigger>
            <TabsTrigger value='likes'>Beğeniler</TabsTrigger>
            <TabsTrigger value='about'>Hakkında</TabsTrigger>
          </TabsList>

          <TabsContent value='posts' className='mt-6 space-y-4'>
            {userPosts.map((post) => (
              <PostCard key={post.id} post={post} isDetailsView={false} />
            ))}
          </TabsContent>

          <TabsContent value='likes' className='mt-6'>
            <Card className='p-4'>
              <p className='text-center text-muted-foreground'>
                Beğendiğiniz gönderiler burada listelenecek.
              </p>
            </Card>
          </TabsContent>

          <TabsContent value='about' className='mt-6'>
            <Card className='p-6'>
              <h3 className='text-lg font-semibold mb-4'>Kaydedilenler</h3>
              <p className='text-muted-foreground'>Kaydedilen gönderiler.</p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
