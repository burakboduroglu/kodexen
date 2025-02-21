import Link from 'next/link'
import { Button } from '../ui/button'
import { CircleX, Settings, User } from 'lucide-react'
import { ModeToggle } from '../theme/theme-toggle'

export default function NavbarTools() {
  const currentUser = 'burakboduroglu'
  return (
    <>
      <Button
        variant='outline'
        size='icon'
        className='text-red-600 hidden sm:inline-flex'
        title='Çıkış yap'>
        <Link href={process.env.NEXT_PUBLIC_LOGIN_PATH as string}>
          <CircleX className='h-6 w-6 sm:h-8 sm:w-8' />{' '}
        </Link>
      </Button>
      <ModeToggle />
      <Button variant='outline' size='icon' title='Profile git' className=' hidden sm:inline-flex'>
        <Link href='/settings'>
          <Settings className='h-6 w-6 sm:h-8 sm:w-8' />
        </Link>
      </Button>
      <Button variant='outline' size='icon' title='Profile git' className=' hidden sm:inline-flex'>
        <Link href={`/u/${currentUser}`}>
          <User className='h-6 w-6 sm:h-8 sm:w-8' />
        </Link>
      </Button>
    </>
  )
}
