import './globals.css'
import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import NavBar from '@/components/NavBar'
import MobileNavBar from '@/components/MobileNavBar'
import { getCategories } from '@/services/graphql'
// import SearchBar here

const nunito = Nunito_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ridge Proper',
  description: 'A blog about adventure.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const categories = await getCategories()

  return (
    <html lang="en">
      <body className={nunito.className}>
        { 
          // add searchbar here
          // send search state as params to navs
        }
        <NavBar categories={categories} />
        <MobileNavBar categories={categories} />
        {children}
      </body>
    </html>
  )
}
