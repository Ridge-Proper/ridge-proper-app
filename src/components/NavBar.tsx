'use client'

import { useContext } from "react"
import Link from "next/link"
import Image from "next/image"

function NavBar(
    { categories }: { categories:blogCategory[] }
) {
  return (
    <div className="mx-auto px-10">
        <div className="w-full pt-8 z-10 relative hidden lg:flex justify-between items-center">
            <Link href={'/'}>
                <Image 
                    src={"/brand/ridge-proper-logo-full.png"} 
                    alt="ridge proper logo" 
                    height={35} 
                    width={200}
                    style={{ width: 'auto', height: 'auto' }} />
            </Link>
            <div
                className="space-x-2">
                { categories.map((category) => (
                    <Link 
                        key={category.slug} 
                        href={`/category/${category.slug}`} 
                        className="py-2 px-4 text-xl font-semibold text-white bg-[#7048CF] rounded-md transition duration-100 hover:text-[#DDB109] shadow-md" >
                        {category.name}
                    </Link>
                )) }
            </div>
        </div>
    </div>
  )
}

export default NavBar