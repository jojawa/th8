import React from "react"
import Title from "../components/Title"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import styles from "../styles/posts.module.css"

const Posts = props => {
  const { currentPage, numPages } = props.pageContext

  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? `/blogs` : `/blogs/${currentPage - 1}`
  const nextPage = `/blogs/${currentPage + 1}`
  const { data } = props
  return (
    <Layout>
      <main className={styles.main}>
        <Title title="Posts" />
        <section className={styles.section}>
          {data.blogs.nodes.map(post => {
            return (
              <article key={post.id} className={styles.container}>
                <div className={styles.card}>
                  <Link to={`/blogs/${post.slug}`}>
                    <Image fluid={post.image.fluid} className={styles.image} />
                  </Link>
                  <div className={styles.info}>
                    <h5>{post.title}</h5>
                    <p>{post.summary}</p>
                    <h6>
                      by {post.author} - {post.date}
                    </h6>
                  </div>
                </div>
              </article>
            )
          })}
        </section>
        <div className={styles.pagination}>
          <Link to={prevPage} className={styles.link}>
            Prev
          </Link>
          {Array.from({ length: numPages }, (_, i) => {
            return (
              <Link
                to={`/blogs/${i === 0 ? "" : i + 1}`}
                className={
                  i + 1 === currentPage
                    ? `${styles.link} ${styles.active}`
                    : `${styles.link}`
                }
              >
                {i + 1}
              </Link>
            )
          })}
          {!isLast && (
            <Link to={nextPage} className={styles.link}>
              Next
            </Link>
          )}
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query Pagination($skip: Int!, $limit: Int!) {
    blogs: allContentfulBlog(
      limit: $limit
      skip: $skip
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        title
        slug
        author
        date(formatString: "DD MMMM YYYY")
        id
        category
        summary
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`
export default Posts
