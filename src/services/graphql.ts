import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT || ""

export const getPosts = async () => {
    const query = gql `
        query MyQuery {
            query Assets {
                postsConnection {
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
        }
    `

    const results:any = await request(graphqlAPI, query)

    return results.postsConnection.edges;
}