import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import styles from "../styles/blogTemplate.module.css"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Component = ({ data }) => {
  const {
    title,
    image,
    author,
    content: { json },
    date,
  } = data.blog
  const options = {
    renderNode: {
      paragraph: (node, children) => {
        return (
          <div className={styles.paragraph}>
            <p>{children}</p>
          </div>
        )
      },
      blockquote: (node, children) => {
        return (
          <div className={styles.blockquote}>
            <p>{children}</p>
          </div>
        )
      },
    },
  }
  return (
    <Layout>
      <main className={styles.container}>
        <div className={styles.title}>
          <h3>{title}</h3>
        </div>
        <section className={styles.template}>
          <article className={styles.image}>
            <Image fluid={image.fluid} />
          </article>
          <article className={styles.content}>
            <h6>
              by <span>{author}</span> - {date}
            </h6>
            <p className={styles.post}>
              {documentToReactComponents(json, options)}
            </p>
          </article>
        </section>
        <p className={styles.back}>
          <Link to="/blogs">Back to Blogs</Link>
        </p>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: contentfulBlog(slug: { eq: $slug }) {
      title
      author
      date(formatString: "DD MMMM YYYY")
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      content {
        json
      }
    }
  }
`

export default Component
