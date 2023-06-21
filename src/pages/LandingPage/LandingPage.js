// AuthPage.js
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'
import NavBar from '../../components/NavBar/NavBar'
import Services from '../../components/Services/Services'
import IntroSection from '../../components/IntroSection/IntroSection'
import InfoCard from '../../components/InfoCard/InfoCard'
import styles from '../LandingPage/LandingPage.module.scss'
import Faqs from '../../components/FAQs/Faqs'
import Footer from '../../components/Footer/Footer'
import ContactForm from '../../components/ContactForm/ContactForm'
import ModalContainer from '../../components/Modal/ModalContainer'
import ModalContainerJob from '../../components/Modal/ModalContainer'
import About from '../../components/About/About'

import { faMapLocation, faDriversLicense, faPeopleGroup, faBusinessTime } from '@fortawesome/free-solid-svg-icons'
import { useState, useRef } from 'react'

export default function AuthPage (props) {
  const [contactForm, setContactForm] = useState(false)

  // The modal will be open for different purposes.
  const [openModal, setOpenModal] = useState(false)

  // // Modal for an individual job carousel.
  // const [openModalJob, setOpenModalJob] = useState(false)

  // Services ref instances.
  const realEstateRef = useRef(null)
  const mapRef = useRef(null)
  const roofInspectionRef = useRef(null)
  const videoRef = useRef(null)
  const constructionRef = useRef(null)
  const homeRef = useRef(null)
  const faqRef = useRef(null)

  // DOM reference handleClick event.
  const refHandleClick = (reference) => {
    reference.current?.scrollIntoView({ behavior: 'smooth' })
  }

  // Populate state with an array of elements
  const [currentPortfolio, setCurrentPortfolio] = useState(null)

  // Store the information of the current job selected in state
  const [currentJob, setCurrentJob] = useState(null)

  return (
    <>
      <ContactForm
        contactForm={contactForm}
        setContactForm={setContactForm}
      />
      <ModalContainer
        openModal={openModal}
        setOpenModal={setOpenModal}
        currentPortfolio={currentPortfolio}
        setCurrentJob={setCurrentJob}
        currentJob={currentJob}
      />
      <header>
        <NavBar
          setContactForm={setContactForm}
          refHandleClick={refHandleClick}
          realEstateRef={realEstateRef}
          mapRef={mapRef}
          roofInspectionRef={roofInspectionRef}
          videoRef={videoRef}
          constructionRef={constructionRef}
          homeRef={homeRef}
        />
      </header>
      <main>
        <IntroSection
          homeRef={homeRef}
          refHandleClick={refHandleClick}
          realEstateRef={realEstateRef}
        />
        <div className={styles.infoCardWrapper}>
          <InfoCard
            title='Coverage for the Tri-State Area'
            text='If you are in NY, Connecticut or New Jersey, we have you covered.'
            icon={faMapLocation}
            iconStyle='fa-regular fa-map-location fa-3x'
          />
          <InfoCard
            title='Experienced Drone Pilots'
            text='Drone Map & Snap have experienced PART 107 Licensed pilots on the ready.'
            icon={faDriversLicense}
            iconStyle='fa-solid fa-drivers-license fa-3x'
          />
          <InfoCard
            title='A service you can trust'
            text='We will produce results based exactly on your needs, everytime.'
            icon={faPeopleGroup}
            iconStyle='fa-solid fa-people-group fa-3x'
          />
          <InfoCard
            title='Timely Results'
            text='We will provide you with the product you need on time.'
            icon={faBusinessTime}
            iconStyle='fa-solid fa-business-time fa-3x'
          />
        </div>
        <Services
          realEstateRef={realEstateRef}
          mapRef={mapRef}
          roofInspectionRef={roofInspectionRef}
          videoRef={videoRef}
          constructionRef={constructionRef}
          setOpenModal={setOpenModal}
          setCurrentPortfolio={setCurrentPortfolio}
        />
        <h1 ref={faqRef}>FAQ's</h1>
        <Faqs />
        <About />
        <Footer
          setContactForm={setContactForm}
          homeRef={homeRef}
          faqRef={faqRef}
          refHandleClick={refHandleClick}
        />
      </main>
    </>
  )
}
