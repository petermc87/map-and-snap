import styles from '../Services/Services.module.scss'

export default function Service() {
    return (
        <>
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
            <div className={styles.serviceContainer} id={styles.mapServiceContainer}>
                <div className={styles.info} id={styles.mapInfo}>
                    <div className={styles.textContainer} id={styles.mapTextContainer}>
                        <h1 id={styles.mapHeading}>DRONE MAPPING SERVICES</h1>
                        <p id={styles.mapParagraph}>3-D and 2-D Mapping for Construction, Agricultural or private.</p>
                    <div className={styles.button}>Learn More</div>
                    </div>
                </div>
                <div className={styles.image} id={styles.mapImage}></div>
            </div>
        </>

    )
}