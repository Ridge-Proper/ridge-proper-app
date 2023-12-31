'use client'

import MobileMenu from "./MobileMenu"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

function MobileNavBar(
    { categories }: { categories:blogCategory[] }
) {
    const [showMenu, setShowMenu] = useState<boolean>(false)
    // const [showSearch, setShowSearch] = useState<boolean>(false)

    return (
        <div className="mx-auto px-6 py-4">
            <div className="lg:hidden z-10 flex justify-between w-full mb-4 items-center">
                <Link href={'/'}>
                    <Image 
                        src={"/brand/ridge-proper-logo-full.png"} 
                        alt="ridge proper logo" 
                        height={35} 
                        width={150}
                        style={{ width: 'auto', height: 'auto' }} />
                </Link>
                <div className="inline-block h-fit">
                    <Image 
                        src="/icons/mobile-nav-icon.png" 
                        alt="click to navigate" 
                        height={35} 
                        width={35} 
                        className="hover:cursor-pointer"
                        onClick={() => setShowMenu(!showMenu)} />
                    <MobileMenu 
                        showMenu={showMenu} 
                        setShowMenu={setShowMenu} 
                        categories={categories} />
                </div>
                {/* <Image 
                    src="/icons/search-icon.png" 
                    alt="click to search" 
                    height={35} 
                    width={35} 
                    style={{ width: 'auto', height: 'auto' }}
                    className="hover:cursor-pointer"
                    onClick={() => setShowSearch(!showSearch)} /> */}
            </div>
        </div>
    )
}

export default MobileNavBar