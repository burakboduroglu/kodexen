import type { Metadata } from 'next'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/sidebar/app-sidebar'
import { ThemeProvider } from '@/components/theme/theme-provider'
import { ModeToggle } from '@/components/theme/theme-toggle'

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
            <ModeToggle />
          </div>
          {children}
        </div>
      </SidebarProvider>
    </ThemeProvider>
  )
}
