import styles from '../FAQs/Faq.module.scss'

export default function Faq ({faq, question}) {
    return(
        <div className={styles.faqWrapper}>
            <h3>{question}</h3>
            <div className={styles.body}>
                {faq}
            </div>
            <div className={styles.arrow}>
                 &#8964;
            </div>
        </div>
    )
}