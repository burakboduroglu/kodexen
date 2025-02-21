import type { Metadata } from 'next'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/sidebar/app-sidebar'
import { ThemeProvider } from '@/components/theme/theme-provider'
import { ModeToggle } from '@/components/theme/theme-toggle'
import Footer from '@/components/custom/footer'
import { Button } from '@/components/ui/button'
import { CircleX, User } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kodexen | Profil',
  description:
    'Kodexen is a community-driven platform for developers to share and discover code snippets.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
      <SidebarProvider>
        <AppSidebar />
        <div className='flex flex-col h-screen w-full'>
          <div className='flex items-center justify-between p-4 border-b border-gray-200'>
            <SidebarTrigger />
            <div className='flex gap-3'>
              <Button
                variant='outline'
                size='icon'
                className='text-red-600 hidden sm:inline-flex'
                title='Çıkış yap'>
                <CircleX className='h-6 w-6 sm:h-8 sm:w-8' />
              </Button>
              <ModeToggle />
              <Button
                variant='outline'
                size='icon'
                title='Profile git'
                className=' hidden sm:inline-flex'>
                <User className='h-6 w-6 sm:h-8 sm:w-8' />
              </Button>
            </div>
          </div>
          <div className='flex flex-col flex-1'>
            <div className='flex-1'>{children}</div>
            <Footer />
          </div>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  )
}
