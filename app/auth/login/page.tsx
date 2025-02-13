'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Loader2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import AnimatedBackground from '@/components/custom/animated-background'

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    // Simüle edilmiş login işlemi
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      // Burada gerçek login işlemini yapacaksınız
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
              <Link href='/' className='hover:text-white'>
                <ArrowLeft className='h-5 w-5' />
                <span className='sr-only'>Geri Dön</span>
              </Link>
            </Button>
            <div>
              <h1 className='text-2xl font-bold text-white'>Giriş Yap</h1>
              <p className='text-sm text-white/70'>Kodexen hesabına giriş yap</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className='space-y-4'>
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

            {error && (
              <div className='rounded-lg bg-red-500/10 p-3 text-sm text-red-500'>{error}</div>
            )}

            <div className='space-y-2'>
              <Button
                type='submit'
                className='w-full bg-white text-black hover:bg-white/90'
                disabled={isLoading}>
                {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
                Giriş Yap
              </Button>

              <p className='text-center text-sm text-white/70'>
                Hesabın yok mu?{' '}
                <Link
                  href={process.env.NEXT_PUBLIC_REGISTER_PATH as string}
                  className='font-medium text-white hover:text-white/90'>
                  Kayıt Ol
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
