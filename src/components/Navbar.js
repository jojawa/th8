import React from "react"
import { Link } from "gatsby"
import styles from "../styles/navbar.module.css"

const Navbar = () => {
  return (
    <header>
      <p className={styles.logo}>
        <Link to="/">The Hidden 8</Link>
      </p>
      <nav>
        <ul className={styles.navLinks}>
          <li className={styles.navLink}>
            <Link to="/blogs">Blog</Link>
          </li>
          <li className={styles.navLink}>
            <Link to="/hikes">Hikes</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
