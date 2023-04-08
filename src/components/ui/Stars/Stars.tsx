import React, { useEffect, useRef } from 'react'

import style from './Stars.module.scss'

interface IStarsProps {
  rating: number
}

export default function Stars({ rating }: IStarsProps) {
  const activRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (activRef.current) {
      console.log((activRef.current.style.width = `${rating / 0.05}%`))
    }
  })

  return (
    <div className={style.rating}>
      <div className={style.container}>
        <div ref={activRef} className={style.active}></div>
        <div className={style.items}>
          <input type='radio' className={style.item} value='1' name='rating' />
          <input type='radio' className={style.item} value='2' name='rating' />
          <input type='radio' className={style.item} value='3' name='rating' />
          <input type='radio' className={style.item} value='4' name='rating' />
          <input type='radio' className={style.item} value='5' name='rating' />
        </div>
      </div>
    </div>
  )
}
