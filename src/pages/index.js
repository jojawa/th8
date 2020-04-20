import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, Link, graphql } from "gatsby"
import styles from "../styles/index.module.css"
import { Button } from "../components/button"
import Image from "gatsby-image"

const getImages = graphql`
  {
    file(relativePath: { eq: "hero.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Index = () => {
  const data = useStaticQuery(getImages)

  return (
    <Layout>
      <section className={styles.home}>
        <article className={styles.img}>
          <Image fluid={data.file.childImageSharp.fluid} />
        </article>
        <article>
          <div className={styles.content}>
            <h3>Experience</h3>
            <h1>The Hidden 8eaches</h1>
            <h5>Discover the secrets that await before Maracas Bay</h5>
            <Link to="/hikes">
              <Button style={{ background: "#4a90e2" }}>explore</Button>
            </Link>
          </div>
        </article>
      </section>
    </Layout>
  )
}
export default Index
