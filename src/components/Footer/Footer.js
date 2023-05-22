import styles from '../Footer/Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Footer ({ setContactForm }) {
  return (
    <footer>
      <div className={styles.navigation}>
        <ul className={styles.leftList}>
          <div className={styles.topNav}>
            <li>Home</li>
            <li onClick={() => {
              setContactForm(true)
              console.log('click')
              }}>Contact</li>
            <li>About</li>
          </div>
          <div className={styles.middleNav}>
            <li>FAQs</li>
            <li>Privacy Policy</li>
          </div>
          <div className={styles.bottomNav}>
            <li>Drone Map & Snap 2023</li>
          </div>
        </ul>
      </div>
      <div className={styles.socials}>
        <ul className={styles.rightList}>
          <div className={styles.socialLinks}>
            <h4>Check Out Our Socials:</h4>
            <div className={styles.topIconWrapper}>
              <li><FontAwesomeIcon icon={faLinkedinIn} className='fa-solid fa-linkedin fa-2x' /></li>
              <li><FontAwesomeIcon icon={faInstagram} className='fa-solid fa-instagram fa-2x' /></li>
            </div>
            <div className={styles.bottomIconWrapper}>
              <li><FontAwesomeIcon icon={faFacebook} className='fa-solid fa-facebook fa-2x' /></li>
            </div>
          </div>
          <div className={styles.contactInfo}>
            <li>Tel: 929-418-5827</li>
            <li>Email: peter@mapandsnap.org</li>
          </div>
        </ul>
      </div>
    </footer>
  )
}
