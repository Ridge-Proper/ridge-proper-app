function PostCard({ post }:{ post:blogPost }) {
  return (
    <div>
        { post.title }
        { post.excerpt }
    </div>
  )
}

export default PostCard