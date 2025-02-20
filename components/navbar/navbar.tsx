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
                  <div className='flex gap-4 flex-col'>
                    <div className='text-red-600 flex gap-2 items-center'>
                      <Button variant='outline' size='icon'>
                        <CircleX className='w-8 h-8' />
                      </Button>
                      <p className='text-sm'>Çıkış Yap</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                      <Button variant='outline' size='icon'>
                        <User className='w-8 h-8' />
                      </Button>
                      <p className='text-sm'>Profile Git</p>
                    </div>
                  </div>
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
              className='w-full sm:w-full rounded-md border bg-background px-8 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
            />
          </div>
        </div>

        {/* Theme Toggle and Desktop Auth */}
        <div className='hidden ml-auto lg:flex items-center gap-4'>
          <Button variant='outline' size='icon' className='text-red-600'>
            <CircleX className='w-8 h-8' />
          </Button>
          <ModeToggle />
          {/* Desktop Auth Buttons / Profile */}
          <div className='hidden lg:flex lg:items-center lg:gap-4'>
            {isLoggedIn ? (
              <Button variant='outline' size='icon'>
                <User className='w-8 h-8' />
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
