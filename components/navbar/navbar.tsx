'use client'

import { useState } from 'react'
import { CircleX, Code2, Menu, Search, User } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'
import { ModeToggle } from '../theme/theme-toggle'

export default function Navbar() {
  const [isLoggedIn] = useState(true) // Bu durumu auth sisteminizle değiştirin

  return (
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
          <SheetContent side='left' className='w-[280px] sm:w-[320px]'>
            <SheetHeader className='pb-6'>
              <SheetTitle>Kodexen</SheetTitle>
            </SheetHeader>
            <div className='flex flex-col gap-4'>
              <div className='flex flex-col gap-2'>
                <Button variant='ghost' asChild className='justify-start'>
                  <Link href='/feed'>Ana Sayfa</Link>
                </Button>
                <Button variant='ghost' asChild className='justify-start'>
                  <Link href='/explore'>Keşfet</Link>
                </Button>
                <Button variant='ghost' asChild className='justify-start'>
                  <Link href='/projects'>Projeler</Link>
                </Button>
              </div>

              <Separator />

              {/* Mobile Auth Section */}
              <div className='flex flex-col gap-4'>
                {isLoggedIn ? (
                  <>
                    <Button variant='outline' className='justify-start gap-2'>
                      <User className='h-5 w-5' />
                      Profile Git
                    </Button>
                    <Button variant='outline' className='justify-start gap-2 text-red-600'>
                      <CircleX className='h-5 w-5' />
                      Çıkış Yap
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
        <Link href='/' className='flex items-center gap-2 text-lg sm:text-xl font-bold'>
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
          {isLoggedIn && (
            <Button
              variant='outline'
              size='icon'
              className='text-red-600 hidden sm:inline-flex'
              title='Çıkış yap'>
              <CircleX className='h-6 w-6 sm:h-8 sm:w-8' />
            </Button>
          )}
          <ModeToggle />
          {/* Desktop Auth Buttons / Profile */}
          <div className='hidden lg:flex lg:items-center lg:gap-4'>
            {isLoggedIn ? (
              <Button variant='outline' size='icon' title='Profile git'>
                <User className='h-6 w-6 sm:h-8 sm:w-8' />
              </Button>
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
      </div>
    </nav>
  )
}
