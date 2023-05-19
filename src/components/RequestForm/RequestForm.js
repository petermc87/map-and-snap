import { useState } from "react";
import styles from '../RequestForm/RequestForm.module.scss'

export default function RequestForm (){
    //Use state to determine the status. This will show on the button
    const [status, setStatus] = useState('Submit')

    //Post request
    const createRequest = async (details) => {
        try{
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.strinfify({
                    details
                })
            })
            resStatus('Submit')
        } catch (e) {
            res.status(400).json(e)
        }
    }


    //Handle submit.
    const handleSubmit = (evt) => {
        evt.preventDefault()
        setStatus('Sending...')
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value
        }
        createRequest(details)
    }


    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Name:</label>
                <input type='text' id={styles.name} required/>
            </div>
            <div>
                <label htmlFor='email'>Email:</label>
                <input type='email' id={styles.email} required/>
            </div>
            <div>
                <label htmlFor='message'>Message:</label>
                <text id={styles.message} required/>
            </div>
            <button>{status}</button>
        </form>
    )
}