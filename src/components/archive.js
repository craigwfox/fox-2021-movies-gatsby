import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const POST_ARCHIVE_QUERY = graphql`
  query BlogPostArchive {
    allMarkdownRemark(
      limit: 5
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
            date(formatString: "MMMM DD, YYYY")
          }
          excerpt
        }
      }
    }
  }
`

const Archive = () => {
  const data = useStaticQuery(POST_ARCHIVE_QUERY)

  return (
    <>
      <aside>
        <h3>Archive</h3>
        {data.allMarkdownRemark.edges.map(edge => (
          <article key={edge.node.frontmatter.slug}>
            <h4>
              <Link to={`/posts${edge.node.frontmatter.slug}`}>
                {edge.node.frontmatter.title}
              </Link>
            </h4>
            <time>{edge.node.frontmatter.date}</time>
            <p>{edge.node.excerpt}</p>
          </article>
        ))}
      </aside>
    </>
  )
}

export default Archive
