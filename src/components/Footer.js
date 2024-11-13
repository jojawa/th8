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
          href="https://www.linkedin.com/in/josephjawara/"
          target="_blank"
          rel="noopener noreferrer"
        >
          joe
        </a>
      </p>
    </footer>
  )
}

export default Footer
