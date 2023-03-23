import { Link, useNavigate } from 'react-router-dom'
import styles from './NavBar.module.scss'
import { useState } from 'react'


export default function NavBar (props) {
  const [openHamburger, setOpenHamburger] = useState(false)
  const [hamburgerInitializer, setHamburgerInitializer] = useState(false)
  const navigate = useNavigate()


  return (
    <>
      <nav className={styles.navContainer}>
        <div className={styles.navLink} id={styles.navLogo}>Logo</div>
        <div className={styles.rightNavContainer}>
          <div className={styles.navLink}>Services</div>
          <div className={styles.navLink}>About</div>
          <div className={styles.navLink}>Login</div>
        </div>
          {/* <Link to='/orders'>Order History</Link>
            &nbsp; | &nbsp;
          <Link to='/orders/new'>New Order</Link> */}
        {!openHamburger
          ? <div className={styles.hamburgerMenu}>
              <div className={styles.lineOneHm} />
              <div className={styles.lineTwoHm} />
              <div className={styles.lineThreeHm} />
            </div>
          : ''}
      </nav>
    </>
    )
  }
