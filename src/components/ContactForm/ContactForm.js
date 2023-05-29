import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import styles from '../ContactForm/ContactForm.module.scss'

export default function ContactForm ({ contactForm, setContactForm }) {
  const form = useRef()

  const [messageSent, setMessageSent] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_or1uyhe', 'contact_form', form.current, '3gTUXhQb4txIRZrtR')
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })
  }

  return (
    <>
      {
            contactForm
              ? <>
                <form ref={form} onSubmit={sendEmail} className={styles.form}>
                  <div
                    className={styles.closeButton} onClick={() => {
                      setContactForm(false)
                      setMessageSent(false)
                    }}
                  >&#128939;
                  </div>
                  <div className={styles.titleText}>
                    {messageSent
                      ? <>
                        <div className={styles.messageSent}>Your message was sent!</div>
                        </>
                      : ''}
                    <h1>Send us a message!</h1>
                    <p>If you have any questions about our services, or would like to submit a service request, please fill out the form below and hit submit!</p>
                  </div>
                  <div className={styles.inputContainer}>
                    <label>Name</label>
                    <input type='text' name='user_name' />
                    <label>Email</label>
                    <input type='email' name='user_email' />
                    <label>Subject</label>
                    <input type='text' name='contact_subject' />
                    <label>Message</label>
                    <textarea name='message' className={styles.message} />
                    <input className={styles.submitButton} type='submit' name='send' onClick={() => { setMessageSent(true) }} />
                  </div>
                </form>
                </>
              : ''
        }
    </>

  )
}
