import styles from '../Services/Services.module.scss'

export default function Service ({ realEstateRef, mapRef, roofInspectionRef, constructionRef, videoRef, setOpenModal }) {
  return (
    <div className={styles.servicesWrapper} ref={realEstateRef}>
      <div className={styles.serviceContainer}>
        <div className={styles.image} id={styles.realestateImage}/>
        <div className={styles.info} id={styles.realestateInfo}>
          <div className={styles.textContainer} id={styles.realestateServiceContainer}>
            <h1>REAL ESTATE <span>PHOTOGRAPHY</span></h1>
            <p>From aerial to ground photography, we have you covered.</p>
            <div className={styles.button} onClick={() => {setOpenModal(true)}}>Learn More</div>
          </div>
        </div>
      </div>

      <div className={styles.serviceContainer} id={styles.mapServiceContainer} ref={mapRef}>
        <div className={styles.info} id={styles.mapInfo}>
          <div className={styles.textContainer} id={styles.mapTextContainer}>
            <h1 id={styles.mapHeading}>DRONE MAPPING SERVICES</h1>
            <p id={styles.mapParagraph}>3-D and 2-D Mapping for Construction, Agricultural or private.</p>
            <div className={styles.button} onClick={() => {setOpenModal(true)}}>Learn More</div>
          </div>
        </div>
        <div className={styles.image} id={styles.mapImage} />
      </div>

      <div className={styles.serviceContainer} id={styles.roofServiceContainer}>

        <div className={styles.serviceWrapper} ref={roofInspectionRef}>
          <div className={styles.image} id={styles.roofImage} />
          <div className={styles.info} id={styles.roofInfo}>
            <div className={styles.textContainer} id={styles.roofTextContainer}>
              <h1 id={styles.roofHeading}>ROOF INSPECTION & APPRAISALS</h1>
              <p id={styles.roofParagraph}>For clear and concise aerial imagery to assist your work, we have you covered.</p>
              <div className={styles.button} onClick={() => {setOpenModal(true)}}>Learn More</div>
            </div>
          </div>
        </div>
        <div className={styles.serviceWrapper} ref={constructionRef}>
          <div className={styles.info} id={styles.roofInfo}>
            <div className={styles.textContainer} id={styles.roofTextContainer}>
              <h1 id={styles.roofHeading}>CONSTRUCTION </h1>
              <p id={styles.roofParagraph}>Construction progress, surveying or planning</p>
              <div className={styles.button} onClick={() => {setOpenModal(true)}}>Learn More</div>
            </div>
          </div>
          <div className={styles.image} id={styles.roofImage} />
        </div>

      </div>

      <div className={styles.image} id={styles.videoImage} ref={videoRef}/>
      <div className={styles.textContainer} id={styles.videoTextContainer}>
        <h1 id={styles.roofHeading}>VIDEOGRAPHY </h1>
        <p id={styles.roofParagraph}>Video footage up to 4K in resolution, raw or edited.</p>
        <div className={styles.button} onClick={() => {setOpenModal(true)}}>Learn More</div>
      </div>
    </div>

  )
}
