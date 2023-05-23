import styles from '../FAQs/Faqs.module.scss'
import Faq from '../FAQs/Faq'

export default function Faqs () {
  const faqs = [
    'Aerial photography using drones or aircraft offers a unique viewpoint, capturing stunning shots and providing a broader context that traditional ground-based photography cannot achieve.',
    'Aerial photography enhances real estate by showcasing unique angles, attracting buyers with comprehensive views, highlighting features, and improving understanding of surroundings.',
    'Aerial photography has legal requirements. Commercial drone operations need licensing and adherence to regulations. Choose a knowledgeable professional for compliance, safety, and privacy.',
    'Photogrammetry extracts measurements, creates 3D models from photos, benefiting your business with accurate representations for architecture, engineering and construction.',
    'Booking is easy! Contact us via the contact form in the top ribbon or footer. Share your specific requirements for the service you require. We will discuss, quote, and schedule for high-quality results!',
    'Project completion time varies based on complexity. Small-scale projects may take days, while larger ones can span weeks. We provide accurate estimates tailored to project requirements.',
    'Certainly! We are thrilled to share our portfolio of past projects, showcasing our capabilities, quality, and diverse range of successful endeavors.'
  ]

  const questions = [
    'How is aerial photography different from traditional photography?',
    'How can aerial photography benefit my real estate business?',
    'Are there any legal requirements or restrictions for aerial photography?',
    'What is photogrammetry and how can it benefit my business?',
    'Where do I go to book a service or make a service request?',
    'How long does it take to complete a photogrammetry project?',
    'Can you provide examples of previously completed works?'
  ]

  return (
    <div className={styles.faqsWrapper}>
      {
                faqs.map((onefaq, i) => {
                  return (
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
