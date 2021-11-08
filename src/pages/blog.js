import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"


const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx
  return (
    <Layout pageTitle="My posts">
      <ul>
        {posts.map(({ node: post }) => (
          <li key={post.id}>
            <Link to={post.slug}>
              <h2>{post.frontmatter.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
export const pageQuery = graphql`
  query blogIndex {
    allMdx {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
          }
          
            slug
          
        }
      }
    }
  }
`
export default BlogIndex