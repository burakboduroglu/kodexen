import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme/theme-provider'
import Navbar from '@/components/navbar/navbar'

export const metadata: Metadata = {
  title: 'Kodexen | Ana Sayfa',
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
      <Navbar />
      {children}
    </ThemeProvider>
  )
}
