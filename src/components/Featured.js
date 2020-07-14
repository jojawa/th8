import React from "react"
import Title from "./Title"
import { graphql, useStaticQuery, Link } from "gatsby"
import Image from "gatsby-image"
import styles from "../styles/featured.module.css"

const getBlogs = graphql`
  {
    blog: allContentfulBlog(filter: { featured: { eq: true } }) {
      nodes {
        title
        slug
        author
        featured
        date(formatString: "DD MMMM YYYY")
        id
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

const Featured = () => {
  const data = useStaticQuery(getBlogs)
  const { nodes: blogs } = data.blog
  return (
    <>
      <div className={styles.pageTitle}>
        <h1>The Hidden 8log</h1>
      </div>
      <Title title="Featured" />
      <section className={styles.container}>
        <div className={styles.featured}>
          {blogs.map(blog => {
            return (
              <article className={styles.card} key={blog.id}>
                <Link to={`/blogs/${blog.slug}`}>
                  <Image fluid={blog.image.fluid} className={styles.image} />
                </Link>
                <h5 className={styles.title}>{blog.title}</h5>
                <h6 className={styles.subHead}>
                  by <Link to="/">{blog.author}</Link> - {blog.date}
                </h6>
              </article>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Featured
