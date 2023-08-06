import PostWidget from "@/components/PostWidget"
import PostCard from "@/components/PostCard"
import Categories from "@/components/Categories"
import { getPostsByCategory } from "@/services/graphql"

export default async function Category (
    { params }: { params: { slug: string } }
) {
    const posts:blogPostExcerpt[] = await getPostsByCategory(params.slug)
    const category = posts[0].node.categories.filter((category) => (
        category.slug === params.slug
    ))

    return (
        <div className='container mx-auto px-4 mb-8'>
            <h1 className="mb-8 text-4xl font-semibold uppercase text-center lg:text-left text-white">
                { category[0].name }
            </h1>
            <div className='grid grid-cols-1 lg:grid-cols-12 lg:gap-12'>
                <div className='lg:col-span-8 col-span-1'>
                { posts.map((post, index) => <PostCard post={ post } key={ post.node.title } /> ) }
                </div>
                <div className='lg:col-span-4 col-span-1'>
                    <div className='lg:sticky relative top-8'>
                    <PostWidget slug={""} categories={[]} />
                    <Categories />
                    </div>
                </div>
            </div>
        </div>
    )
}