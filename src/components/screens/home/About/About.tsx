import React from 'react'

import style from './About.module.scss'

import data from '../../../../data/about.json'

export default function About() {
  return (
    <section className={style.about} id='about-us'>
      <header className={style.header}>
        <h2 className={style.title}>{data.section.title}</h2>
        <button className={style.button}>Skip</button>
      </header>
      <>
        {data.list.map((item) => {
          return (
            <div key={item.id} className={style.item}>
              <div className={style.year}>{item.year}</div>
              <div className={style.image}>
                <div className={style.img}></div>
                <div className={style.img__year}>{item.year}</div>
              </div>
              <div className={style.info}>
                <h3 className={style.caption}>{item.title}</h3>
                <p className={style.text}>{item.description}</p>
              </div>
            </div>
          )
        })}
      </>
    </section>
  )
}
