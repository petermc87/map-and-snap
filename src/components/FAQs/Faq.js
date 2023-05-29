import styles from '../FAQs/Faq.module.scss'
import { useState } from 'react'

export default function Faq ({ faq, question }) {
  const [textReveal, setTextReveal] = useState(false)

  return (
    <div className={styles.faqWrapper}>
      <h3>{question}</h3>
      <div className={styles.body}>
        {faq}
      </div>
      {/* Setting the reveal default state */}
      {textReveal
        ? <>
          {/* Will slide down when the false state is clicked. */}
          <div
            className={styles.arrow} id={styles.arrowDown} onClick={() => {
              setTextReveal(false)
            }}
          >
            &#8963;
          </div>
        </>
        :
      // This will active state and reveal the text with the animation
        <div
          className={styles.arrow} onClick={() => {
            setTextReveal(true)
          }}
        >&#8964;
        </div>}
    </div>
  )
}
