import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import styles from '../Modal/LearnMoreInfo.module.scss'

export default function LearnMoreInfo ({ currentPortfolio }) {

  return (
    <CarouselProvider
      id={styles.carouselProv}
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={currentPortfolio.length}
    >
      <p>We have a range of diffent options for your photography needs. These include:
        <li>Virtual Staging</li>
        <li>Professional Photo Editing</li>
        <li>Indoor & Outdoor Shots</li>
        <li>Aerial & Ground Shots</li>
        Please see previous jobs completed below. Hover and click on an image to open the browse through the finished package.
      </p>
      <Slider>
        {/* Indexing the portfolio jobs per service and returning the hero image in the slide. */}
        {currentPortfolio ?
          currentPortfolio.map((job, i) => {
            return(
                <Slide index={i}>
                    <div className={styles.imageContainer}>
                        <img className={styles.image} style={{ backgroundImage: `url(${job.hero})` }}/>
                    </div>
                </Slide>
            )
          })
          :
          ''
        }
      </Slider>
      <div className={styles.buttonWrapper}>
        <ButtonBack id={styles.backButton}>Back</ButtonBack>
        <ButtonNext id={styles.nextButton}>Next</ButtonNext>
      </div>
    </CarouselProvider>
  )
}

