import { useNavigate } from 'react-router-dom'
import styles from './NavBar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { faFacebook, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function NavBar ({setContactForm}) {
  // Setting the hamburger to open when the icon is click.
  // The initiliazer is only activated when the icon is
  // click and not any other time (i.e. when the page loads).
  const [openHamburger, setOpenHamburger] = useState(false)
  const [hamburgerInitializer, setHamburgerInitializer] = useState(false)

  // State is set when hamburger services is selected
  const [expandServices, setExpandServices] = useState(false)

  // Dropdown menu listing the services
  const [servicesDropDown, setServicesDropDown] = useState(false)

  const navigate = useNavigate()

  return (
    <>
      <nav className={styles.navContainer} onMouseOut={() => setServicesDropDown(false)}>
        <div className={styles.navLink} id={styles.navLogo}>Logo</div>
    
        <div className={styles.rightNavContainer}>
          {servicesDropDown
            ? <>
              <div className={styles.navLink} id={styles.servicesNavBar}>Services <div>&#8963;</div></div>
              <div className={styles.servicesDropDown} onMouseOut={() => setServicesDropDown(false)}>
                <div className={styles.navLink} id={styles.dropDownLink} onMouseOver={() => setServicesDropDown(true)}>Photography</div>
                <div className={styles.navLink} id={styles.dropDownLink} onMouseOver={() => setServicesDropDown(true)}>Mapping</div>
                <div className={styles.navLink} id={styles.dropDownLink} onMouseOver={() => setServicesDropDown(true)}>Roof Inspections</div>
                <div className={styles.navLink} id={styles.dropDownLink} onMouseOver={() => setServicesDropDown(true)}>Videography</div>
              </div>
            </>
            : <div className={styles.navLink} id={styles.servicesNavBar} onMouseOver={() => setServicesDropDown(true)}>Services <div>&#8964;</div></div>}
          <div className={styles.navLink}>About</div>
          <div className={styles.navLink} onClick={() => {setContactForm(true)}}>Contact</div>
          <div className={styles.navLink}>Login</div>

        </div>

        {!openHamburger
          ? <div
              onClick={() => {
                setOpenHamburger(true)
                setHamburgerInitializer(true)
              }} className={styles.hamburgerMenu}
            >
            <div className={styles.lineOneHm} />
            <div className={styles.lineTwoHm} />
            <div className={styles.lineThreeHm} />
            </div>
          : <div onClick={() => {setOpenHamburger(false)}} className={styles.hamburgerMenu}>
            &#10005;
          </div>}
      </nav>

      {openHamburger && hamburgerInitializer
        ? <div className={styles.hamburgerNav}>
          <div className={styles.topNavItems}>
            <div className={styles.navItem}>Home</div>
            {expandServices
              ? <>
                <div className={styles.navItem} id={styles.services} onClick={() => setExpandServices(false)}>Services <div>&#8963;</div></div>
                <div className={styles.servicesContainer}>
                  <div className={styles.navItem}>Photography</div>
                  <div className={styles.navItem}>Mapping</div>
                  <div className={styles.navItem}>Videography</div>
                </div>
              </>
              : <>
                <div className={styles.navItem} id={styles.services} onClick={() => setExpandServices(true)}>Services <div>&#8964;</div></div>
                </>}
            <div className={styles.navItem}>About</div>
            <div className={styles.navItem} onClick={() => {
              setContactForm(true)
              setOpenHamburger(false)
              }}>Contact</div>
            <div className={styles.navItem}>Login</div>
          </div>
          <div className={styles.navItem} id={styles.bottomNavItems}>
            <div className={styles.icons}>
              <li><FontAwesomeIcon icon={faLinkedinIn} className='fa-solid fa-linkedin fa-2x' /></li>
              <a href='https://www.instagram.com/dronemapsnap/'><FontAwesomeIcon icon={faInstagram} className='fa-solid fa-instagram fa-2x'/> </a>
              <a href='https://www.facebook.com/profile.php?id=100091301148574'><FontAwesomeIcon icon={faFacebook} className='fa-solid fa-facebook fa-2x' /></a>
            </div>
            <div>&#9400; Drone Map & Snap 2023</div>
          </div>
          </div>

        : !openHamburger && hamburgerInitializer
            ? <div className={styles.hamburgerNavOut}>
              <div className={styles.topNavItems}>
                <div className={styles.navItem}>Home</div>
                {expandServices
                  ? <>
                    <div className={styles.navItem} id={styles.services} onClick={() => setExpandServices(false)}>Services <div>&#8963;</div></div>
                    <div className={styles.servicesContainer}>
                      <div className={styles.navItem}>Photography</div>
                      <div className={styles.navItem}>Mapping</div>
                      <div className={styles.navItem}>Videography</div>
                    </div>
                  </>
                  : <>
                    <div className={styles.navItem} id={styles.services} onClick={() => setExpandServices(true)}>Services <div>&#8964;</div></div>
                  </>}
                <div className={styles.navItem}>About</div>
                <div className={styles.navItem}>Login</div>
              </div>
              <div className={styles.navItem} id={styles.bottomNavItems}>
                <div className={styles.icons}>
                  <FontAwesomeIcon icon={faLinkedinIn} className='fa-solid fa-linkedin fa-2x' />
                  <FontAwesomeIcon icon={faInstagram} className='fa-solid fa-instagram fa-2x' />
                  <FontAwesomeIcon icon={faFacebook} className='fa-solid fa-facebook fa-2x' />
                </div>
                <div>&#9400; Drone Map & Snap 2023</div>
              </div>
              </div>
            : ''}
    </>
  )
}
