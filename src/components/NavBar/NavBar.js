import { Link, useNavigate } from 'react-router-dom'
import styles from './NavBar.module.scss'

export default function NavBar (props) {

const navigate = useNavigate()
  return (
    <nav className={styles.navContainer}>

      {/* Navigation to a few different links using the
      useNavigatehook */}

      {/* Add in an onClick for each once the about, login
      and services have been added */}
      <div className={styles.navLink}>Logo</div>
      <div className={styles.rightNavContainer}>
        <div className={styles.navLink}>Services</div>
        <div className={styles.navLink}>About</div>
        <div className={styles.navLink}>Login</div>
      </div>
      {/* <Link to='/orders'>Order History</Link>
        &nbsp; | &nbsp;
      <Link to='/orders/new'>New Order</Link> */}
    </nav>
  )
}
