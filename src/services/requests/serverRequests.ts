import { getPosts } from "@/services/graphql"

export async function getAllPosts() {
    const posts = (await getPosts()) || []

    return posts
}