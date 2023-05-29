import styles from '../Modal/ModalContainer.module.scss'
import LearnMoreInfo from './LearnMoreInfo'

export default function ModalContainer ({ openModal, setOpenModal, currentPortfolio }) {
  return (
    <>
      {
                openModal
                  ? <>
                    <div className={styles.modalWrapper}>
                      <div className={styles.closeButton} onClick={() => { setOpenModal(false) }}>&#128939;</div>
                      <h1>Title!</h1>
                      <div className={styles.infoContainer}>
                        <LearnMoreInfo 
                          currentPortfolio={currentPortfolio}
                        />
                      </div>
                    </div>
                  </>
                  : ''
            }
    </>
  )
}
