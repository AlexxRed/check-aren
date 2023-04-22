import React, { useState } from 'react'

import data from '@/data/about.json'

import style from './About.module.scss'
import { Russo_One } from 'next/font/google'

const russo = Russo_One({
    subsets: ['latin'],
    weight: '400'
})

export default function About() {
  const [visiable, setVisiable] = useState(true)

  const handleClick = () => {
    setVisiable(!visiable)
  }

  return (
    <section className={style.about} id='about-us'>
      {visiable &&
          <div className={style.visiable}>
          <header className={style.header}>
            <h2 className={style.title}>
              <span className={russo.className}>
                {data.section.title}
              </span>
            </h2>
            <button className={style.button} onClick={handleClick}>Skip</button>
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
          </div>
      }

    </section>
  )
}
