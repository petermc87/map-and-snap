import styles from '../FAQs/Faqs.module.scss'
import Faq from '../FAQs/Faq'

export default function Faqs() {
    const faqs = [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia', 
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollit', 
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mol',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime m',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime m',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime m',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime m'
    ]

    const questions = [
        'Why this site?', 
        'What are the benefits of this service?',
        'Do you service NYC?',
        'What is Photogrammetry?',
        'Do you service NYC?',
        'Do you service NYC?',
        'Do you service NYC?'
    ]

    return (
        <div className={styles.faqsWrapper}>
            {
                faqs.map((onefaq, i) => {
                    return(
                        <>
                            <Faq 
                                faq={onefaq}
                                question={questions[i]}
                            />
                        </>

                    )
                })
            }
        </div>
    ) 

}