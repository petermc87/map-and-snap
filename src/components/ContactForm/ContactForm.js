import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import styles from '../ContactForm/ContactForm.module.scss'

export default function ContactUs () {

    const form = useRef()

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
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
            <div className={styles.inputContainer}>
                <label>Name</label>
                <input type='text' name='user_name' />
                <label>Email</label>
                <input type='email' name='user_email' />
                <label>Subject</label>
                <input type='text' name='contact_subject' />
                <label>Message</label>
                <textarea name='message' className={styles.message} />
                <input className={styles.submitButton} type='submit' name='send' />
            </div>
        </form>
    )
}
