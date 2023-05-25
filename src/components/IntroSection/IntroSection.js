import styles from './IntroSection.module.scss'
import ContactForm from '../ContactForm/ContactForm'

export default function IntroSection ({ homeRef }) {
  return (
    <>
      <div className={styles.introContainer} ref={homeRef}>
        <div className={styles.introText}>
          <h1>CONVENIENT, EFFICIENT & TIMELY SERVICE</h1>
          <p>At Drone Map & Snap, we pride ourselves in good customer service. Whatever your drone needs, we have it.</p>
        </div>
        <div className={styles.button}>Sign Up</div>
      </div>
    </>
  )
}
