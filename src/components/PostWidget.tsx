'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'
import { getRecentPosts, getSimilarPosts } from '@/services/graphql'

function PostWidget(
  { slug, categories }: { slug:string, categories:string[] }
) {
  const [relatedPosts, setRelatedPosts] = useState<blogPostDetails[]>([])
  const pathname = usePathname()

  useEffect(() => {
    if (pathname === "/") {
      getRecentPosts()
        .then((result:blogPostDetails[]) => setRelatedPosts(result))
    } else {
      getSimilarPosts(slug, categories)
        .then((result:blogPostDetails[]) => setRelatedPosts(result))
    }
  }, [pathname])

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        { pathname === "/" ? 'Recent Posts' : 'Related Posts' }
      </h3>
      { relatedPosts.map((post) => (
        <div
          key = {post.title} 
          className='flex items-center w-full mb-4'>
            <div className='w-16 flex-none'>
              <Image
                alt={post.title}
                height={60}
                width={60}
                className='align-middle rounded-md'
                src={post.featuredImage.url} />
            </div>
            <div className='flex-row ml-4'>
              <p className='text-gray-500 font-xs'>
                { moment(post.createdAt).format('MMM DD, YYYY') }
              </p>
              <Link
                href={`/post/${post.slug}`}
                className='text-md' >
                  {post.title}
              </Link>
            </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget