// import { NextApiRequest } from "next"
interface blogPostExcerpt {
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

interface blogAuthor {
    bio?: string
    name: string
    id: string
    photo: { 
        url: string 
    }
}

interface blogCategory {
    name: string
    slug: string
}

interface blogPostDetails {
    title: string
    featuredImage: {
        url: string
    }
    createdAt: string
    slug: string
}

interface blogPost {
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
    videoLink?: string
}

interface commentObj {
    name: string
    email: string
    comment: string
    slug: string
}

interface blogComment {
    name: string
    createdAt: string
    comment: string
}

// export interface commentRequestObj extends NextApiRequest {
//     name: string
//     email: string
//     comment: string
//     slug: string
// }