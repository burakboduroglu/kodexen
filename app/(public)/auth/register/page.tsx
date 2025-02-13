'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Loader2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import AnimatedBackground from '@/components/custom/animated-background'

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    // Simüle edilmiş kayıt işlemi
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      // Burada gerçek kayıt işlemini yapacaksınız
    } catch (err) {
      setError(err as string)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className='fixed inset-0'>
      <AnimatedBackground />

      <div className='relative z-10 flex h-full items-center justify-center p-4'>
        <div className='w-full max-w-md'>
          <div className='flex items-center gap-4 mb-8'>
            <Button variant='ghost' size='icon' className='text-white hover:bg-white/10' asChild>
              <Link href='/'>
                <ArrowLeft className='h-5 w-5' />
                <span className='sr-only'>Geri Dön</span>
              </Link>
            </Button>
            <div>
              <h1 className='text-2xl font-bold text-white'>Kayıt Ol</h1>
              <p className='text-sm text-white/70'>{"Kodexen'e hoş geldin"}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='space-y-1'>
              <Label htmlFor='name' className='text-white'>
                Ad Soyad
              </Label>
              <Input
                id='name'
                type='text'
                placeholder='John Doe'
                required
                className='border-white/20 bg-white/10 text-white placeholder:text-white/50 focus-visible:ring-white'
              />
            </div>

            <div className='space-y-1'>
              <Label htmlFor='email' className='text-white'>
                Email
              </Label>
              <Input
                id='email'
                type='email'
                placeholder='ornek@kodexen.com'
                required
                className='border-white/20 bg-white/10 text-white placeholder:text-white/50 focus-visible:ring-white'
              />
            </div>

            <div className='space-y-1'>
              <Label htmlFor='password' className='text-white'>
                Şifre
              </Label>
              <Input
                id='password'
                type='password'
                placeholder='••••••••'
                required
                className='border-white/20 bg-white/10 text-white placeholder:text-white/50 focus-visible:ring-white'
              />
            </div>

            <div className='space-y-1'>
              <Label htmlFor='confirmPassword' className='text-white'>
                Şifre Tekrar
              </Label>
              <Input
                id='confirmPassword'
                type='password'
                placeholder='••••••••'
                required
                className='border-white/20 bg-white/10 text-white placeholder:text-white/50 focus-visible:ring-white'
              />
            </div>

            {error && (
              <div className='rounded-lg bg-red-500/10 p-3 text-sm text-red-500'>{error}</div>
            )}

            <div>
              <Button
                type='submit'
                className='w-full bg-white text-black hover:bg-white/90'
                disabled={isLoading}>
                {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
                Kayıt Ol
              </Button>

              <p className='text-center text-sm text-white/70 pt-3'>
                Zaten hesabın var mı?{' '}
                <Link
                  href={process.env.NEXT_PUBLIC_LOGIN_PATH as string}
                  className='font-medium text-white hover:text-white/90'>
                  Giriş Yap
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
