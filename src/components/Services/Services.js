import styles from '../Services/Services.module.scss'

export default function Service() {
    return (
        <div className={styles.serviceContainer}>
            {/* <h1>Service</h1> */}
            <div className={styles.image}></div>
            <div className={styles.info}>
                <div className={styles.textContainer}>
                  <h1>REAL ESTATE PHOTOGRAHPY</h1>
                  <p>From aerial to ground photography, we have you covered.</p>
                  <div className={styles.button}>Learn More</div>
                </div>
            </div>
        </div>
    )
}