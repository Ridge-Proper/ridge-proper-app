import { useRouter } from "next/navigation"

function MobileMenu(
    { 
        showMenu, 
        setShowMenu, 
        categories 
    }: 
    { 
        showMenu: boolean, 
        setShowMenu: React.Dispatch<React.SetStateAction<boolean>>,
        categories: blogCategory[]
    }
) {
    const router = useRouter()

    return (
        <div
            className={`absolute space-y-2 bg-white p-4 shadow-md rounded-md text-xl z-40 top-16 right-6 ${showMenu ? "" : "hidden"}`} >
            <h3 className="text-xl font-bold text-[#DDB109]">Topics:</h3>
            <ul>
                { categories.map((category) => (
                    <li 
                        onClick={() => {
                            router.push(`/category/${category.slug}`)
                            setShowMenu(!showMenu)
                        }}
                        key={category.slug} 
                        className="text-[#7048CF]">
                        {category.name}
                    </li>
                )) }
            </ul>
        </div>
    )
}

export default MobileMenu