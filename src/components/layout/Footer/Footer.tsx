import React from 'react'

import Logo from '../../ui/Logo/Logo'

import style from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.top}>
          <div className={style.question}>
            <Logo></Logo>
            <div className={style.text}>
              Leave a request so that we call you and answer all your questions.
            </div>
            <div className={style.button}>
              <button>Help with selection</button>
            </div>
          </div>
          <div className={style.relations}>
            <div className={style.navigation}>
              <h3>Navigation</h3>
              <nav className={style.nav}>
                <ul className={style.list}>
                  <li className={style.item}>About us</li>
                  <li className={style.item}>Reviews</li>
                  <li className={style.item}>Tires</li>
                  <li className={style.item}>Our services</li>
                  <li className={style.item}>Discs</li>
                  <li className={style.item}>FAQ</li>
                </ul>
              </nav>
            </div>
            <div className={style.contact}>
              <h3>Contact</h3>
              <nav className={style.nav}>
                <ul className={style.list}>
                  <li className={style.item}>(504) 896-6913</li>
                  <li className={style.item}>Facebook</li>
                  <li className={style.item}>(830) 556-6651</li>
                  <li className={style.item}>Tik Tok</li>
                  <li className={style.item}>Instagram</li>
                  <li className={style.item}>Telegram</li>
                  <li className={style.item}>1arenkaat@gmail.com</li>
                </ul>
              </nav>
            </div>
          </div>
          <div className={style.map}>
            <iframe
              width='100%'
              height='183'
              src='https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed'
            ></iframe>
          </div>
        </div>
        <div className={style.down}>
          <div>Privacy Policy</div>
          <div>Developed by AlphaDigital</div>
        </div>
      </div>
    </footer>
  )
}
