import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, Link, graphql } from "gatsby"
import Image from "gatsby-image"
import styles from "../styles/hikes.module.css"

const getHikes = graphql`
  {
    allContentfulHike {
      nodes {
        id
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        slug
        title
        synopsis
      }
    }
  }
`

const Hikes = () => {
  const data = useStaticQuery(getHikes)
  const { nodes: hikes } = data.allContentfulHike

  return (
    <Layout>
      <div className={styles.pageTitle}>
        <h1>The Hidden Trails</h1>
      </div>
      <section className={styles.cards}>
        {hikes.map(hike => {
          return (
            <article className={styles.card} key={hike.id}>
              <Image fluid={hike.image.fluid} alt={hike.title} />
              <div className={styles.textContainer}>
                <div className={styles.cardHead}>
                  <h3>{hike.title}</h3>
                  <p>
                    <Link to={`/hikes/${hike.slug}`}>more</Link>
                  </p>
                </div>
                <h6>{hike.synopsis}</h6>
              </div>
            </article>
          )
        })}
      </section>
    </Layout>
  )
}

export default Hikes
