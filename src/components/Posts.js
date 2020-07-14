import React from "react"
import Title from "./Title"
import { graphql, useStaticQuery, Link } from "gatsby"
import Image from "gatsby-image"
import styles from "../styles/posts.module.css"

const getPosts = graphql`
  {
    blogs: allContentfulBlog(
      skip: 0
      limit: 4
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

const Posts = () => {
  const data = useStaticQuery(getPosts)
  const { nodes: posts } = data.blogs
  return (
    <main className={styles.main}>
      <Title title="Posts" />
      <section className={styles.section}>
        {posts.map(post => {
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
        <Link to="/blogs/2" className={styles.active}>
          see more delicious posts
        </Link>
      </div>
    </main>
  )
}

export default Posts
