import React from "react"
import styles from "../styles/footer.module.css"

const Footer = () => {
  return (
    <footer>
      <p className={styles.craft}>
        crafted with{" "}
        <span aria-labelledby="jsx-a11y/accessible-emoji" role="img">
          ❤️
        </span>{" "}
        by{" "}
        <a
          href="http://seitujoseph.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          c2
        </a>
      </p>
    </footer>
  )
}

export default Footer
