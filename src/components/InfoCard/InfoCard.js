import styles from './InfoCard.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function InfoCard ({ title, text, icon, iconStyle }) {
  return (
    <div className={styles.infoContainer}>
      <FontAwesomeIcon icon={icon} className={iconStyle} />
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  )
}
