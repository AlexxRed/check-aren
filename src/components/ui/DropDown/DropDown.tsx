import React, { useRef, useState } from 'react'

import { IoIosArrowUp } from "@react-icons/all-files/io/IoIosArrowUp";


import style from './DropDown.module.scss'

interface Props {
  question: string
  answer: string
}

export default function DropDown(props: Props) {
  const [open, setOpen] = useState(false)

  function drop() {
    setOpen((prevState) => !prevState)
  }

  return (
    <div>
      <div className={style.title} onClick={drop}>
        <h3>{props.question}</h3>
        <IoIosArrowUp
          size={25}
          className={`${style.arrow} ${open ? style.rotate : ''}`}
        ></IoIosArrowUp>
      </div>
      <div className={`${style.text} ${open ? style.open : ''}`}>
        <div>{props.answer}</div>
      </div>
    </div>
  )
}
