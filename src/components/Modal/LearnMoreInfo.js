import React from 'react'
import  { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css';
import styles from '../Modal/LearnMoreInfo.module.scss'

export default function LearnMoreInfo () {

    return (
            <CarouselProvider id={styles.carouselProv}
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                totalSlides={4}
            >
                    <p>We have a range of diffent options for your photography needs. These include:
                                <li>Virtual Staging</li>
                                <li>Professional Photo Editing</li>
                                <li>Indoor & Outdoor Shots</li>
                                <li>Aerial & Ground Shots</li>
                            Please see previous jobs completed below. Hover and click on an image to open the browse through the finished package.
                            </p>
                {/* <div className={styles.slidersAndButtons}> */}
                    <Slider>
                        <Slide index={0} > 
                            <div className={styles.imageContainer}>
                                <img className={styles.image} id={styles.irving}/>
                            </div>    
                        </Slide>
                        <Slide index={1}> 
                            <div className={styles.imageContainer}>
                                <img className={styles.image} id={styles.eagle}/>
                            </div>
                        </Slide>
                        <Slide index={2}> 
                            <div className={styles.imageContainer}>
                                <img className={styles.image} id={styles.beal}/>
                            </div>                    
                        </Slide>
                        <Slide index={3}> 
                            <div className={styles.imageContainer}>
                                <img className={styles.image} id={styles.jamaica}/>
                            </div>                    
                        </Slide>
                    
                    </Slider>
                    <div className={styles.buttonWrapper}>
                        <ButtonBack id={styles.backButton}>Back</ButtonBack>
                        <ButtonNext id={styles.nextButton}>Next</ButtonNext>
                    </div>    
                {/* </div> */}
            </CarouselProvider>
    )
}

