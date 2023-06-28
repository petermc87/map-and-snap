import { React, useState } from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import styles from '../Modal/LearnMoreInfo.module.scss'

export default function LearnMoreInfo ({ currentPortfolio }) {
  // Setting the job to be viewed.
  const [viewingJob, setViewingJob] = useState(null)

  return (
    <CarouselProvider
      id={styles.carouselProv}
      naturalSlideWidth={100}
      naturalSlideHeight={125}

      // Position one in the portfolio object is the array of jobs.
      totalSlides={
          !viewingJob
            ? currentPortfolio[0].length
            : viewingJob.otherImages.length
        }

    >
      <p className={styles.carouselParagraph}>{currentPortfolio[1].serviceBreakdown}</p>
      <Slider>

        {/* Indexing the portfolio jobs per service and returning the hero image in the slide. NOTE:
        it will also distinguish between image based render and video by checking if each job has a
        set of images. If its image based, then there will! */}
        {!viewingJob && currentPortfolio[0][0].otherImages
          ? currentPortfolio[0].map((job, i) => {
            // console.log(job.hero)
            return (

              <Slide index={i}>
                <div className={styles.imageContainer}>
                  {/* Job title container will appear over the hero image. */}
                  <img
                    alt='service'
                    className={styles.image} style={{ backgroundImage: `url(${job.hero})` }}
                    onClick={() => { setViewingJob(job) }}
                  />
                  <div className={styles.imageOverlayText}>
                    <h1>{job.name}</h1>
                    <h2>Click for images</h2>
                  </div>
                </div>
              </Slide>

            )
          })
          :
        // Mapping the images per job
          viewingJob && currentPortfolio[0][0].otherImages
            ? viewingJob.otherImages.map((image, i) => {
              return (
                <Slide index={i}>
                  <div className={styles.closeButton} onClick={() => { setViewingJob(null) }}>&#10005;</div>
                  <div className={styles.imageContainer}>
                    <img alt='service' className={styles.image} style={{ backgroundImage: `url(${image})` }} id={styles.jobImage} />
                  </div>
                </Slide>
              )
            })
            : currentPortfolio[0].map((video, i) => {
              return (
                <Slide index={i}>
                  <div className={styles.imageContainer}>
                    <iframe
                      width='700'
                      height='500'
                      src={`https://www.youtube.com/embed/${video.hero}`}
                      allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen
                      title='Videography'
                    />
                  </div>
                </Slide>
              )
            })}

      </Slider>
      <div className={styles.buttonWrapper}>
        <ButtonBack id={styles.backButton}>&#x21FD;</ButtonBack>
        <ButtonNext id={styles.nextButton}>&#x21FE;</ButtonNext>
      </div>
    </CarouselProvider>
  )
}
