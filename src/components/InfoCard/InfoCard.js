import styles from './InfoCard.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'


export default function InfoCard ({title, text, icon, iconStyle}) {
  return (
    <div className={styles.infoContainer}>
      {/* <FontAwesomeIcon icon={faMapLocation} className='fa-regular fa-map-location fa-3x' /> */}
      {/* <FontAwesomeIcon icon={faDriversLicense} className='fa-solid fa-drivers-license fa-3x' /> */}
      <FontAwesomeIcon icon={icon} className={iconStyle} />
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  )
}
