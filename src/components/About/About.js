import styles from './About.module.scss'
import { useNavigate } from 'react-router-dom'

export default function About ({ setContactForm, aboutRef }) {

  return (
    <>
      <h1 ref={aboutRef}>About</h1>
      <div className={styles.aboutContainer} >
        <div className={styles.paragraphContainer}>
          After three years of tinkering around with every kind of drone in the market, a new passion
          for Peter came to light; providing various <span>photography</span>, <span>videography</span> and <span>mapping</span> services the <span>greater New York and the Tri-State areas</span>. In January 2023,
          after development of a solid business plan and potential client base,
          Peter founded <span>Drone Map & Snap</span>.
        </div>
        <div className={styles.imageContainer}><img src='https://i.imgur.com/CVGIiux.png' /></div>
        <div className={styles.paragraphContainer}>
          Since its inception, <span>Drone Map & Snap</span> has completed a number of <span>photography</span>, <span>videography</span> and <span>mapping</span> projects,
          servicing <span>Real Estate</span> and <span>Construction</span> industries. We commit to provide a service that will satisfy all of your needs.
          For more information, please fill out or contact form <span id={styles.redirect} onClick={() => {setContactForm(true)}}>here</span>.
        </div>
      </div>
    </>
  )
}
