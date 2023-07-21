'use client'

import { useContext } from "react"
import Link from "next/link"
import Image from "next/image"

function NavBar(
    { categories }: { categories:blogCategory[] }
) {
  return (
    <div className="mx-auto px-10 mb-8">
        <div className="w-full py-8 z-10 relative hidden lg:flex justify-between">
            <Link href={'/'}>
                <Image 
                    src={"/brand/ridge-proper-logo-full.png"} 
                    alt="ridge proper logo" 
                    height={35} 
                    width={200}
                    style={{ width: 'auto', height: 'auto' }} />
            </Link>
            <div>
                { categories.map((category) => (
                    <Link 
                        key={category.slug} 
                        href={`/category/${category.slug}`} 
                        className="p-2" >
                        {category.name}
                    </Link>
                )) }
            </div>
        </div>
    </div>
  )
}

export default NavBar