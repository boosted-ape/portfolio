import { Inter } from 'next/font/google'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hello!',
  description: 'my portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  )
}
