import styles from '../Footer/Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { useNavigate } from 'react-router-dom'

export default function Footer ({ setContactForm, homeRef, faqRef, refHandleClick }) {
  const navigate = useNavigate()
  return (
    <footer>
      <div className={styles.navigation}>
        <ul className={styles.leftList}>
          <div className={styles.topNav}>
            <li onClick={() => { refHandleClick(homeRef) }}>Home</li>
            <li onClick={() => { setContactForm(true) }}>Contact</li>
            <li>About</li>
          </div>
          <div className={styles.middleNav}>
            <li onClick={() => { refHandleClick(faqRef) }}>FAQs</li>
            <li onClick={() => { navigate('/policy')}}>Privacy Policy</li>
            {/* <li onClick={navigate('/policy')}>Privacy Policy</li> */}
          </div>
          <div className={styles.bottomNav}>
            <li>&#9400; Drone Map & Snap 2023</li>
          </div>
        </ul>
      </div>
      <div className={styles.socials}>
        <ul className={styles.rightList}>
          <div className={styles.socialLinks}>
            <h4>Check Out Our Socials:</h4>
            <div className={styles.topIconWrapper}>
              <a><FontAwesomeIcon icon={faLinkedinIn} className='fa-solid fa-linkedin fa-2x' /></a>
              <a href='https://www.instagram.com/dronemapsnap/'><FontAwesomeIcon icon={faInstagram} className='fa-solid fa-instagram fa-2x' /></a>
            </div>
            <div className={styles.bottomIconWrapper}>
              <a href='https://www.facebook.com/profile.php?id=100091301148574'><FontAwesomeIcon icon={faFacebook} className='fa-solid fa-facebook fa-2x' /></a>
            </div>
          </div>
          <div className={styles.contactInfo}>
            <li>Tel: 929-418-5827</li>
            <li>Email: peter@mapandsnap.org</li>
            <div className={styles.bottomCopyright}><li>&#9400; Drone Map & Snap 2023</li></div>
          </div>
        </ul>
      </div>
    </footer>
  )
}
