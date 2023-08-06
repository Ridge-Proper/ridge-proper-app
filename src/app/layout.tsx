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
  //bg-top bg-cover lg:bg-fixed bg-bg_img_mobile lg:bg-bg_img

  return (
    <html lang="en">
      <body className={nunito.className}>
        <div className='bg-center bg-no-repeat bg-cover bg-bg_img_mobile lg:bg-bg_img fixed h-[100vh] w-[100vw]'></div>
        <div className='absolute left-[50%] -translate-x-[50%] w-[100%] overscroll-contain'>
          { 
            // add searchbar here
            // send search state as params to navs
          }
          <NavBar categories={categories} />
          <MobileNavBar categories={categories} />
          {children}
        </div>
      </body>
    </html>
  )
}
