import PostWidget from "@/components/PostWidget"
import PostCard from "@/components/PostCard"
import Categories from "@/components/Categories"
import { getAllPosts } from "@/services/requests/serverRequests"

// const posts = [
//   { title: 'Skiing in Canada', excerpt: 'How I got lost in the canadian backcountry...' },
//   { title: 'Climbing the Matterhorn', excerpt: "I don't recommend free-soloing..." }
// ]

export default async function Home() {
  const posts:blogPost[] = await getAllPosts()
  // console.log(posts[0].node.categories)

  return (
    <div className='container mx-auto px-10 mb-8'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          { posts.map((post, index) => <PostCard post={ post } key={ post.node.title } /> ) }
        </div>
        <div className='lg:col-span-4 col-span-1'>
            <div className='lg:sticky relative top-8'>
              <PostWidget />
              <Categories />
            </div>
        </div>
      </div>
    </div>
  )
}
