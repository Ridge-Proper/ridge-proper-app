import React from 'react'
import Categories from '@/components/Categories'
import PostWidget from '@/components/PostWidget'
import PostDetail from '@/components/PostDetail'
import Author from '@/components/Author'
import Comments from '@/components/Comments'
import CommentForm from '@/components/CommentForm'
import { getPostDetails } from '@/services/graphql'

const PostDetails = async (
    { params }: { params: { slug: string } }
) => {
    const postData = await getPostDetails(params.slug)

    return (
        <div className='mx-auto px-10 mb-8'>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
                <div className='col-span-1 lg:col-span-8'>
                    <PostDetail post={postData} />
                    <Author author={postData.author} />
                    <CommentForm slug={postData.slug} />
                    <Comments slug={postData.slug} />
                </div>
                <div className='col-span-1 lg:col-span-4'>
                    <div className='relative lg:sticky top-8'>
                        <PostWidget slug={postData.slug} categories={postData.categories.map((category:blogCategory) => category.slug)} />
                        <Categories />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostDetails