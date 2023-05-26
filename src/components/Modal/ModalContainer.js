import styles from '../Modal/ModalContainer.module.scss'
import { useState } from 'react'

export default function ModalContainer ({ openModal, setOpenModal }) {



    return(
        <>
            {
                openModal ?
                <>
                    <div className={styles.modalWrapper}>
                        <div className={styles.closeButton} onClick={() => {setOpenModal(false)}}>&#128939;</div>
                        <h1>Title!</h1>
                        <div className={styles.infoContainer}>Info</div>
                    </div>
                </>
                :
                ''
            }
        </>
    )
        
}