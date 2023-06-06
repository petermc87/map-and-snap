import styles from '../Services/Services.module.scss'

export default function Service ({ realEstateRef, mapRef, roofInspectionRef, constructionRef, videoRef, setOpenModal, setCurrentPortfolio }) {
  
  const realEstatePortfolio = [
    [
      {
        name: 'Irving Place',
        hero: 'https://i.imgur.com/L9Ie0J8.png',
        description: 'We were assigned to turn a blank living space into a fully furnished apartment using virtual staging',
        otherImages: ['https://i.imgur.com/UdBEVxQ.png','https://i.imgur.com/gx3bLHW.png',"https://i.imgur.com/gR4kzcH.png",'https://i.imgur.com/VJEWVOy.png', 'https://i.imgur.com/Q3Vf05i.png', 'https://i.imgur.com/hPTrHMx.png', 'https://i.imgur.com/xKFMs02.png']
      },
  
      {
        name: 'Eagle Crest',
        hero: 'https://i.imgur.com/b0Fon7S.jpg',
        description: 'Aerial photographs for a new plot on Eagle Crest resort in Redmond, Oregon.',
        otherImages: ['https://i.imgur.com/7jJ2xtg.jpg', 'https://i.imgur.com/evtccPv.jpg', 'https://i.imgur.com/Trujd9x.jpg','https://i.imgur.com/Kr08su6.jpg']
      },
  
      {
        name: 'Beal Na Blath',
        hero: 'https://i.imgur.com/3E2JK9C.jpg',
        description: 'Aerial and regular photography of a small cottage in rural Ireland.',
        otherImages: ['https://i.imgur.com/XHFQ1vu.jpg', 'https://i.imgur.com/Q7VYyio.jpg', 'https://i.imgur.com/4AGIadS.jpg','https://i.imgur.com/75QIRCp.jpg', 'https://i.imgur.com/MYy301H.jpg','https://i.imgur.com/vrpNsYf.jpg', 'https://i.imgur.com/LHHZmhE.jpg', 'https://i.imgur.com/KaJoPtO.jpg', 'https://i.imgur.com/ik0ZrgO.jpg', 'https://i.imgur.com/g3jeBV6.jpg','https://i.imgur.com/VMF8zzp.jpg','https://i.imgur.com/b7fSmO6.jpg']
      },

      {
        name: 'Jamaica, Queens',
        hero: 'https://i.imgur.com/SkL4586.jpg',
        description: 'Regular photography for a 2 family home in Jamaica, Queens.',
        otherImages: ['https://i.imgur.com/FaoRDSB.jpg', 'https://i.imgur.com/xR6Y4op.jpg', 'https://i.imgur.com/Ps6LwTB.jpg', 'https://i.imgur.com/LGjtL1T.jpg','https://i.imgur.com/xGcSTIp.jpg', 'https://i.imgur.com/8alv6PZ.jpg', 'https://i.imgur.com/AJ2kfTy.jpg', 'https://i.imgur.com/fndt30m.jpg', 'https://i.imgur.com/jQFTSYD.jpg', 'https://i.imgur.com/OTBAlDV.jpg', 'https://i.imgur.com/PzN7nQN.jpg', 'https://i.imgur.com/pJ9igvw.jpg', 'https://i.imgur.com/CrPgSQn.jpg']
      }
    ],
    {
      title: 'Real Estate Photography',
      serviceBreakdown: 'We have a range of diffent options for your photography needs. These include: Virtual Staging, Professional Photo Editing, Indoor & Outdoor Shots, Aerial & Ground Shots. Please see previous jobs completed below. Hover and click on an image to open the browse through the finished package.'
    }
  ]

  const mappingPortfolio = [
    [
      {
        name: 'Juniper Park',
        hero: 'https://i.imgur.com/6IIAWVp.png',
        description: '3-D model of Juniper Park in Queens, New York. This was a test map used to cross reference measurement features of WebODM.',
        otherImages: ['https://i.imgur.com/GZDn7ZG.jpg', 'https://i.imgur.com/vJkZvZn.jpg', 'https://i.imgur.com/gYDfwuI.png']
      },
      {
        name: 'Balleymoney Church & Graveyard',
        hero: 'https://i.imgur.com/yVzXdwa.png',
        description: 'Old abandoned church near Beal Na Blath, Co. Cork, Ireland. This was a test map shot at a lower altitiude for better detail and accuracy.',
        otherImages: ['https://i.imgur.com/KhLpL4k.jpg', 'https://i.imgur.com/T9TDmK9.jpg', 'https://i.imgur.com/Q538WKQ.jpg', 'https://i.imgur.com/bxxC1iA.png', 'https://i.imgur.com/fdAQ4uw.png']
      }
    ],
    {
      title: 'Drone Mapping Services',
      serviceBreakdown: '3-D Photogrammetry surveying using Post Processing Kinematics (PPK) technology. Up to 1/2inch accurate surveying available soon.'
    }
  ]
  
  return (
    <div className={styles.servicesWrapper} ref={realEstateRef}>
      <div className={styles.serviceContainer}>
        <div className={styles.image} id={styles.realestateImage} />
        <div className={styles.info} id={styles.realestateInfo}>
          <div className={styles.textContainer} id={styles.realestateServiceContainer}>
            <h1>REAL ESTATE <span>PHOTOGRAPHY</span></h1>
            <p>From aerial to ground photography, we have you covered.</p>
            <div
              className={styles.button} onClick={() => {
                setOpenModal(true)
                setCurrentPortfolio(realEstatePortfolio)
              }}
            >Learn More
            </div>
          </div>
        </div>
      </div>

      <div className={styles.serviceContainer} id={styles.mapServiceContainer} ref={mapRef}>
        <div className={styles.info} id={styles.mapInfo}>
          <div className={styles.textContainer} id={styles.mapTextContainer}>
            <h1 id={styles.mapHeading}>DRONE MAPPING SERVICES</h1>
            <p id={styles.mapParagraph}>3-D and 2-D Mapping for Construction, Agricultural or private.</p>
            <div className={styles.button} onClick={() => { 
              setOpenModal(true) 
              setCurrentPortfolio(mappingPortfolio)
              }}>Learn More</div>
          </div>
        </div>
        <div className={styles.image} id={styles.mapImage} />
      </div>

      <div className={styles.serviceContainer} id={styles.roofServiceContainer}>

        <div className={styles.serviceWrapper} ref={roofInspectionRef}>
          <div className={styles.image} id={styles.roofImage} />
          <div className={styles.info} id={styles.roofInfo}>
            <div className={styles.textContainer} id={styles.roofTextContainer}>
              <h1 id={styles.roofHeading}>ROOF INSPECTION & APPRAISALS</h1>
              <p id={styles.roofParagraph}>For clear and concise aerial imagery to assist your work, we have you covered.</p>
              <div className={styles.button} onClick={() => { setOpenModal(true) }}>Learn More</div>
            </div>
          </div>
        </div>
        <div className={styles.serviceWrapper} ref={constructionRef}>
          <div className={styles.info} id={styles.roofInfo}>
            <div className={styles.textContainer} id={styles.roofTextContainer}>
              <h1 id={styles.roofHeading}>CONSTRUCTION </h1>
              <p id={styles.roofParagraph}>Construction progress, surveying or planning</p>
              <div className={styles.button} onClick={() => { setOpenModal(true) }}>Learn More</div>
            </div>
          </div>
          <div className={styles.image} id={styles.roofImage} />
        </div>

      </div>

      <div className={styles.image} id={styles.videoImage} ref={videoRef} />
      <div className={styles.textContainer} id={styles.videoTextContainer}>
        <h1 id={styles.roofHeading}>VIDEOGRAPHY </h1>
        <p id={styles.roofParagraph}>Video footage up to 4K in resolution, raw or edited.</p>
        <div className={styles.button} onClick={() => { setOpenModal(true) }}>Learn More</div>
      </div>
    </div>

  )
}
