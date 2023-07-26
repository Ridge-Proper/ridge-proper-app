// import { NextApiRequest } from "next"
export interface blogPostExcerpt {
    node: {
        author: blogAuthor
        createdAt: string
        slug: string
        title: string
        excerpt: string
        featuredImage: { 
            url: string 
        }
        categories: blogCategory[]
    }
}

export interface blogAuthor {
    bio?: string
    name: string
    id: string
    photo: { 
        url: string 
    }
}

export interface blogCategory {
    name: string
    slug: string
}

export interface blogPostDetails {
    title: string
    featuredImage: {
        url: string
    }
    createdAt: string
    slug: string
}

export interface blogPost {
    author: {
        bio: string
        name: string
        id: string
        photo: {
            url: string
        }
    }
    createdAt: string
    slug: string
    title: string
    excerpt: string
    featuredImage: {
        url: string
    }
    categories: {
        name: string
        slug: string
    }
    content: {
        raw: any
    }
}

export interface commentObj {
    name: string
    email: string
    comment: string
    slug: string
}

// export interface commentRequestObj extends NextApiRequest {
//     name: string
//     email: string
//     comment: string
//     slug: string
// }