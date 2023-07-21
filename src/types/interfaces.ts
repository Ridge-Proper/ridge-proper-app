interface blogPost {
    node: {
        author: blogAuthor,
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
    bio?: string,
    name: string
    id: string
    photo: { 
        url: string 
    }
}

interface blogCategory {
    name:string
    slug:string
}