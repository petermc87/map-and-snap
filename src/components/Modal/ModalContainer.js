import styles from '../Modal/ModalContainer.module.scss'
import LearnMoreInfo from './LearnMoreInfo'

export default function ModalContainer ({ openModal, setOpenModal, currentPortfolio, currentJob, setCurrentJob }) {
  return (
    <>
      {
                openModal
                  ? <>
                    <div className={styles.modalWrapper}>
                      <div className={styles.closeButton} onClick={() => { setOpenModal(false) }}>&#128939;</div>
                      <h1>{currentPortfolio[1].title}</h1>
                      <div className={styles.infoContainer}>
                        <LearnMoreInfo
                          currentPortfolio={currentPortfolio}
                          currentJob={currentJob}
                          setCurrentJob={setCurrentJob}
                        />
                      </div>
                    </div>
                  </>
                  : ''
            }
    </>
  )
}
