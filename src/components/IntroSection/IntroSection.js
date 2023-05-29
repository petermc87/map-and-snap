import styles from './IntroSection.module.scss'
import ContactForm from '../ContactForm/ContactForm'

export default function IntroSection ({ homeRef, refHandleClick, realEstateRef }) {
  return (
    <>
      <div className={styles.introContainer} ref={homeRef}>
        <div className={styles.introText}>
          <h1>CONVENIENT, EFFICIENT & TIMELY SERVICE</h1>
          <p>We are a team of passionate professionals who use the latest technology to create stunning images and models. Click below to learn about our services.</p>
        </div>
        <div className={styles.arrowAnim} onClick={() => { refHandleClick(realEstateRef) }}>
          <div className={styles.arrowSliding}>
            <div className={styles.arrow} />
          </div>
        </div>
      </div>
    </>
  )
}
