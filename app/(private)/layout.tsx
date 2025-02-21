import type { Metadata } from 'next'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/sidebar/app-sidebar'
import { ThemeProvider } from '@/components/theme/theme-provider'
import Footer from '@/components/custom/footer'
import NavbarTools from '@/components/navbar/navbar-tools'

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
              <NavbarTools />
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
