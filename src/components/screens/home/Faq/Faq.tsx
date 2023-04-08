import React from 'react'

import data from '../../../../data/faq.json'

import style from './Faq.module.scss'
import DropDown from '@/components/ui/DropDown/DropDown'

function Faq() {
  return (
    <section className={style.faq} id='faq'>
      <div className={style.content}>
        <h2 className={style.title}>Frequently asked questions</h2>
        <div className={style.text}>
          Here will be collected all the questions that you asked us and bark
          every day
        </div>
        <div className={style.button}>
          <button>Ask a Question</button>
        </div>
      </div>
      <div className={style.drops}>
        {data.questions.map((item) => (
          <DropDown
            key={item.id}
            question={item.question}
            answer={item.answer}
          ></DropDown>
        ))}
      </div>
    </section>
  )
}

export default Faq
