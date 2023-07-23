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
}