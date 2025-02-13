'use client'

import { useState } from 'react'
import { Code2, Menu, Search } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import { ModeToggle } from '../theme/theme-toggle'

export default function Navbar() {
  const [isLoggedIn] = useState(false) // Bu durumu auth sisteminizle değiştirin

  return (
    <nav className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='flex h-16 items-center px-4'>
        {/* Mobile Menu Trigger */}
        <Sheet>
          <SheetTrigger asChild className='lg:hidden'>
            <Button variant='ghost' size='icon' className='mr-2'>
              <Menu className='h-5 w-5' />
              <span className='sr-only'>Aç</span>
            </Button>
          </SheetTrigger>
          <SheetContent side='left'>
            <SheetHeader>
              <SheetTitle>Kodexen</SheetTitle>
            </SheetHeader>
            <div className='mt-4 flex flex-col gap-2'>
              <Button variant='ghost' asChild className='justify-start'>
                <Link href='/feed'>Ana Sayfa</Link>
              </Button>
              <Button variant='ghost' asChild className='justify-start'>
                <Link href='/explore'>Keşfet</Link>
              </Button>
              <Button variant='ghost' asChild className='justify-start'>
                <Link href='/projects'>Projeler</Link>
              </Button>

              <Separator className='my-2' />

              {/* Mobile Auth Section */}
              <div className='space-y-2'>
                {isLoggedIn ? (
                  <div className='flex items-center gap-2 px-2'>
                    <Image
                      src='/placeholder.svg?height=32&width=32'
                      alt='Profile'
                      className='h-8 w-8 rounded-full'
                    />
                    <span className='text-sm font-medium'>Profilim</span>
                  </div>
                ) : (
                  <>
                    <Button variant='ghost' asChild className='w-full justify-start'>
                      <Link href='/login'>Giriş Yap</Link>
                    </Button>
                    <Button asChild className='w-full justify-start'>
                      <Link href='/register'>Kayıt Ol</Link>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link href='/' className='flex items-center gap-2 text-xl font-bold'>
          <Code2 className='h-6 w-6 hidden sm:inline-block' />
          <span className='hidden sm:inline-block'>Kodexen</span>
        </Link>

        {/* Search Bar */}
        <div className='ml-4 flex-1 lg:ml-8'>
          <div className='relative max-w-md'>
            <Search className='absolute left-2 top-2.5 h-4 w-4 text-muted-foreground' />
            <input
              placeholder='Kod, proje veya geliştirici ara...'
              className='w-11/12 sm:w-full rounded-md border bg-background px-8 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
            />
          </div>
        </div>

        {/* Theme Toggle and Desktop Auth */}
        <div className='ml-auto flex items-center gap-4'>
          <ModeToggle />
          {/* Desktop Auth Buttons / Profile */}
          <div className='hidden lg:flex lg:items-center lg:gap-4'>
            {isLoggedIn ? (
              <Button variant='ghost' size='icon' className='rounded-full'>
                <Image
                  src='/placeholder.svg?height=32&width=32'
                  alt='Profile'
                  className='h-8 w-8 rounded-full'
                />
                <span className='sr-only'>Profilim</span>
              </Button>
            ) : (
              <>
                <Button variant='ghost' asChild>
                  <Link href='/login'>Giriş Yap</Link>
                </Button>
                <Button asChild>
                  <Link href='/register'>Kayıt Ol</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
