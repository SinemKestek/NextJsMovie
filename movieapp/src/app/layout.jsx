import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './Providers'
import Tabs from '@/components/Tabs'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Movie App  '
 
}

 const Layout=({ children }) =>{
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        <Header/>
        <Tabs/>
        {children}
        </Providers>
        </body>
    </html>
  )
}
export default Layout