import styles from '../Modal/ModalContainer.module.scss'
import LearnMoreInfo from './LearnMoreInfo'

export default function ModalContainer ({ openModal, setOpenModal }) {
    return(
        <>
            {
                openModal ?
                <>
                    <div className={styles.modalWrapper}>
                        <div className={styles.closeButton} onClick={() => {setOpenModal(false)}}>&#128939;</div>
                        {/* <div className={styles.textWrapper}> */}
                            <h1>Title!</h1>
                        {/* </div> */}
                        <div className={styles.infoContainer}>
                            <LearnMoreInfo />
                        </div>
                    </div>
                </>
                :
                ''
            }
        </>
    )
        
}