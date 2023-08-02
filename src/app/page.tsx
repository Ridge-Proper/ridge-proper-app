import PostWidget from "@/components/PostWidget"
import PostCard from "@/components/PostCard"
import Categories from "@/components/Categories"
import { getPosts } from "@/services/graphql"

export default async function Home() {
  const posts:blogPostExcerpt[] = await getPosts()

  return (
    <div className='container mx-auto px-4 lg:px-10 mb-8'>
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
