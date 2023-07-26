import { GraphQLClient, gql } from "graphql-request";
import { NextResponse } from "next/server";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT || ""

export async function POST(req:Request) {

    const { name, email, comment, slug } = (await req.json()) as {
        name: string,
        email: string,
        comment: string,
        slug: string
    }

    const graphQLClient = new GraphQLClient(graphqlAPI, {
        headers: {
            authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
        },
    })

    const query = gql`
        mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
            createComment(data: { name: $name, email: $email, comment: $comment, post: { connect: { slug: $slug }}}) { id }
        }
    `
    
    try {
        const result = await graphQLClient.request(query, { name, email, comment, slug })

        return NextResponse.json(result, { status: 201 })
    } catch (error) {
        console.log(error)
    }
}