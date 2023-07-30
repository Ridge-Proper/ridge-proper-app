import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT || ""

export const getPosts = async () => {
    const query = gql`
        query MyQuery {
            postsConnection (orderBy: createdAt_DESC) {
                edges {
                    node {
                        author {
                            bio
                            name
                            id
                            photo {
                                url
                            }
                        }
                        createdAt
                        slug
                        title
                        excerpt
                        featuredImage {
                            url
                        }
                        categories {
                            name
                            slug
                        }
                    }
                }
            }
        }
    `

    const results:any = await request(graphqlAPI, query)

    return results.postsConnection.edges;
}

export const getPostsByCategory = async (slug:string) => {
    const query = gql`
        query GetCategoryPost ($slug: String!) {
            postsConnection (
                orderBy: createdAt_DESC
                where: {categories_some: {slug: $slug}}
                ) {
                edges {
                    node {
                        author {
                            bio
                            name
                            id
                            photo {
                                url
                            }
                        }
                        createdAt
                        slug
                        title
                        excerpt
                        featuredImage {
                            url
                        }
                        categories {
                            name
                            slug
                        }
                    }
                }
            }
        }
    `

    const results:any = await request(graphqlAPI, query, { slug })

    return results.postsConnection.edges;
}

export const getRecentPosts = async () => {
    const query = gql`
        query GetPostDetails() {
            posts(
                orderBy: createdAt_DESC
                last: 3
            ) {
                title
                featuredImage {
                    url
                }
                createdAt
                slug
            }
        }
    `
    const results:any = await request(graphqlAPI, query)

    return results.posts;
}

export const getSimilarPosts = async (slug:string, categories:string[]) => {
    const query = gql`
        query GetPostDetails($slug: String!, $categories: [String!]) {
            posts(
                where: { slug_not: $slug, AND: { categories_some: { slug_in: $categories }}}
                last: 3
            ) {
                title
                featuredImage {
                    url
                }
                createdAt
                slug
            }
        }
    `
    const results:any = await request(graphqlAPI, query, { slug, categories })

    return results.posts;
}

export const getCategories = async () => {
    const query = gql`
        query GetCategories {
            categories {
                name
                slug
            }
        }
    `
    const results:any = await request(graphqlAPI, query)

    return results.categories;
}

export const getPostDetails = async (slug:string) => {
    const query = gql`
        query GetPostDetails($slug: String!) {
            post(where: { slug: $slug }) {
                author {
                    bio
                    name
                    id
                    photo {
                        url
                    }
                }
                createdAt
                slug
                title
                excerpt
                featuredImage {
                    url
                }
                categories {
                    name
                    slug
                }
                content {
                    raw
                }
                videoLink
            }
        }
    `

    const postDetails:any = await request(graphqlAPI, query, { slug })

    return postDetails.post;
}

export const submitComment = async (obj: commentObj) => {
    const result = await fetch('/api/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })

    return result.json();
}

export const getComments = async (slug:string) => {
    const query = gql`
        query GetComments($slug: String!) {
            comments(where: { post: { slug: $slug }}) {
                name
                createdAt
                comment
            }
        }
    `
    const results:any = await request(graphqlAPI, query, { slug })

    return results.comments;
}