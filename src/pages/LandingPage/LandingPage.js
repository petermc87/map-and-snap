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
import { faMapLocation, faDriversLicense, faPeopleGroup, faBusinessTime } from '@fortawesome/free-solid-svg-icons'
import { useState, useRef } from 'react'
import ContactForm from '../../components/ContactForm/ContactForm'


export default function AuthPage (props) {

  const [contactForm, setContactForm] = useState(false)

  //Real estate smooth scroll ref.
  const realEstateRef = useRef(null)

  //Real estate handleClick event.
  const realHandleClick = () => {
    realEstateRef.current?.scrollIntoView({behavior: 'smooth'})
  }


  return (
    <>
      <ContactForm
        contactForm={contactForm}
        setContactForm={setContactForm}
      />
      <header>
        <NavBar 
         setContactForm={setContactForm}
         realHandleClick={realHandleClick}
        />
      </header>
      <main>
        <IntroSection />
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
        />
        <h1>FAQ's</h1>
        <Faqs />
        <Footer 
          setContactForm={setContactForm}
        />
      </main>
    </>
  )
}
