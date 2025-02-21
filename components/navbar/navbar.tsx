'use client'

import {
  CircleX,
  Code2,
  Menu,
  Search,
  User,
  HomeIcon,
  BookmarkIcon,
  PlusCircle,
} from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import NavbarTools from './navbar-tools'

export default function Navbar() {
  const isLoggedIn = true
  const currentUser = 'burakboduroglu'

  return (
    <>
      {/* Top Navigation */}
      <nav className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
        <div className='flex h-14 sm:h-16 items-center px-2 sm:px-4'>
          {/* Mobile Menu Trigger */}
          <Sheet>
            <SheetTrigger asChild className='lg:hidden'>
              <Button variant='ghost' size='icon' className='mr-2'>
                <Menu className='h-5 w-5' />
                <span className='sr-only'>Aç</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side='left'
              className='w-[280px] sm:w-[320px] overflow-y-auto no-scrollbar'>
              <SheetHeader className='pb-6'>
                <SheetTitle>Kodexen</SheetTitle>
              </SheetHeader>
              <div className='flex flex-col gap-4'>
                {/* Mobile Auth Section */}
                <div className='flex flex-col gap-4'>
                  {isLoggedIn ? (
                    <>
                      <Button variant='outline' className='justify-start gap-2'>
                        <Link href={`u/${currentUser}`}>
                          <User className='h-6 w-6 sm:h-8 sm:w-8' />
                          Profile Git
                        </Link>
                      </Button>
                      <Button variant='outline' className='justify-start gap-2 text-red-600'>
                        <Link href={process.env.NEXT_PUBLIC_LOGIN_PATH as string}>
                          <CircleX className='h-6 w-6 sm:h-8 sm:w-8' />
                          Çıkış Yap
                        </Link>
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button variant='ghost' asChild className='w-full justify-start'>
                        <Link href={process.env.NEXT_PUBLIC_LOGIN_PATH as string}>Giriş Yap</Link>
                      </Button>
                      <Button asChild className='w-full justify-start'>
                        <Link href={process.env.NEXT_PUBLIC_REGISTER_PATH as string}>Kayıt Ol</Link>
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link href='/feed' className='flex items-center gap-2 text-lg sm:text-xl font-bold'>
            <Code2 className='h-5 w-5 sm:h-6 sm:w-6' />
            <span className='hidden sm:inline-block'>Kodexen</span>
          </Link>

          {/* Search Bar */}
          <div className='flex-1 px-2 sm:px-4'>
            <div className='relative max-w-md mx-auto'>
              <Search className='absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
              <input
                placeholder='Kod, proje veya geliştirici ara...'
                className='w-full h-9 rounded-md border bg-background pl-8 pr-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
              />
            </div>
          </div>

          {/* Theme Toggle and Desktop Auth */}
          <div className='flex items-center gap-2 sm:gap-4'>
            {isLoggedIn ? (
              <NavbarTools />
            ) : (
              <>
                <Button variant='ghost' asChild>
                  <Link href={process.env.NEXT_PUBLIC_LOGIN_PATH as string}>Giriş Yap</Link>
                </Button>
                <Button asChild>
                  <Link href={process.env.NEXT_PUBLIC_REGISTER_PATH as string}>Kayıt Ol</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Bottom Mobile Navigation */}
      <nav className='fixed bottom-0 left-0 z-50 w-full border-t bg-background lg:hidden'>
        <div className='flex h-16 items-center justify-around px-4'>
          <Button variant='ghost' size='icon' asChild className='flex flex-col items-center gap-1'>
            <Link href='/feed'>
              <HomeIcon className='h-6 w-6' />
              <span className='text-xs'>Akış</span>
            </Link>
          </Button>

          <Button variant='ghost' size='icon' asChild className='flex flex-col items-center gap-1'>
            <Link href='/bookmarks'>
              <BookmarkIcon className='h-6 w-6' />
              <span className='text-xs'>Kaydedilenler</span>
            </Link>
          </Button>

          <Button variant='ghost' size='icon' asChild className='flex flex-col items-center gap-1'>
            <Link href='/create'>
              <PlusCircle className='h-6 w-6' />
              <span className='text-xs'>Oluştur</span>
            </Link>
          </Button>

          <Button variant='ghost' size='icon' asChild className='flex flex-col items-center gap-1'>
            <Link href='/profile'>
              <User className='h-6 w-6' />
              <span className='text-xs'>Profil</span>
            </Link>
          </Button>
        </div>
      </nav>
    </>
  )
}
