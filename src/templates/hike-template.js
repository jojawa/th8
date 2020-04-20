import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import styles from "../styles/hikeTemplate.module.css"

const Component = ({ data }) => {
  const { hikeOrder, image, title, description } = data.hike

  return (
    <Layout>
      <main>
        <div className={styles.title}>
          <h1>The Hidden {hikeOrder} of 8</h1>
          <p>
            <Link to="/hikes">Back to Hikes</Link>
          </p>
        </div>
        <section className={styles.template}>
          <article className={styles.image}>
            <Image fluid={image.fluid} />
          </article>
          <article className={styles.content}>
            <h3>{title}</h3>
            <p>{description.description}</p>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleHike($slug: String) {
    hike: contentfulHike(slug: { eq: $slug }) {
      hikeOrder
      title
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      description {
        description
      }
    }
  }
`

export default Component
