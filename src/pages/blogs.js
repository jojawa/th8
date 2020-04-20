import React from "react"
import Layout from "../components/layout"
import styles from "../styles/blogs.module.css"

const blogs = () => {
  return (
    <Layout>
      <main>
        <section className={styles.empty}>
          <div className={styles.title}>
            <h1>The Hidden 8log</h1>
            <h5>
              Coming soon... <span>on Island Time</span>
            </h5>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default blogs
