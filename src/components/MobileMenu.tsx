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
        <ul 
            className={`absolute space-y-2 bg-white p-4 shadow-md rounded text-xl ${showMenu ? "" : "hidden"}`} >
            { categories.map((category) => (
                <li 
                    onClick={() => {
                        router.push(`/category/${category.slug}`)
                        setShowMenu(!showMenu)
                    }}
                    key={category.slug} >
                    {category.name}
                </li>
            )) }
        </ul>
    )
}

export default MobileMenu