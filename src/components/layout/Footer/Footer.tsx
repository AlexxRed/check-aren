import Link from 'next/link'
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
            <Link href="#help">
                <button>Help with selection</button>
            </Link>
            </div>
          </div>
          <div className={style.relations}>
            <div className={style.navigation}>
              <h3>Navigation</h3>
              <nav className={style.nav}>
                <ul className={style.list}>
                  <li className={style.item}>
                    <Link href="#about-us">
                      About us
                    </Link>
                  </li>
                  <li className={style.item}>
                    <Link href="#reviews">
                      Reviews
                    </Link>
                  </li>
                  <li className={style.item}>
                    <Link href="/catalog">
                      Tires
                    </Link>
                  </li>
                  <li className={style.item}>
                    <Link href="/services">
                      Our services
                    </Link>
                  </li>
                  <li className={style.item}>
                    <Link href="/catalog">
                      Discs
                    </Link>
                  </li>
                  <li className={style.item}>
                    <Link href="#faq">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className={style.contact}>
              <h3>Contact</h3>
              <nav className={style.nav}>
                <ul className={style.list}>
                  <li className={style.item}>
                    <Link href="tel:5048966913">
                      (504) 896-6913
                    </Link>
                  </li>
                  <li className={style.item}>
                    <Link href="https://www.facebook.com/">
                      Facebook
                    </Link>
                  </li>
                  <li className={style.item}>
                    <Link href="tel:8305566651">
                      (830) 556-6651
                    </Link>                    
                  </li>
                  <li className={style.item}>
                    <Link href="https://www.tiktok.com/">
                      Tik Tok
                    </Link>
                  </li>
                  <li className={style.item}>
                    <Link href="https://www.instagram.com/">
                      Instagram
                    </Link>
                  </li>
                  <li className={style.item}>
                    <Link href="https://web.telegram.org/k/">
                      Telegram
                    </Link>
                  </li>
                  <li className={style.item}>
                    <Link href="mailto:1arenkaat@gmail.com">
                      1arenkaat@gmail.com
                    </Link>
                  </li>
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
          <div>Developed by Alex</div>
        </div>
      </div>
    </footer>
  )
}
