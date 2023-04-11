import React from 'react'

import style from './OurServices.module.scss'

function OurServices() {
  return (
    <section className={style.services}>
      <header className={style.header}>
        <h2>Our services</h2>
        <button>Book an appointment</button>
      </header>
      <div className={style.content}>
        <div className={`${style.image1} ${style.relative}`}>
          <div className={style.title}>Working with tires</div>
        </div>
        <div className={`${style.image2} ${style.relative}`}>
          <div className={style.title}>Transmission</div>
        </div>
        <div className={`${style.image3} ${style.relative}`}>
          <div className={style.title}>Chassis</div>
        </div>
        <div className={`${style.image4} ${style.relative}`}>
          <div className={`${style.title} ${style.big_text}`}>
            General vehicle inspection
          </div>
        </div>
        <div className={`${style.image5} ${style.relative}`}>
          <div className={style.title}>Brake system</div>
        </div>
        <div className={`${style.image6} ${style.relative}`}>
          <div className={style.title}>Fuel system</div>
        </div>
        <div className={`${style.image7} ${style.relative}`}>
          <div className={style.title}>Cooling system and power steering</div>
        </div>
        <div className={`${style.image8} ${style.relative}`}>
          <div className={style.title}>Engine</div>
        </div>
        <div className={`${style.image9} ${style.relative}`}>
          <div className={`${style.title} ${style.big_text}`}>
            Electronic equipment
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurServices
