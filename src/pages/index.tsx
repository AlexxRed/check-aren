import { useEffect } from 'react'
import type { GetStaticPropsContext, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Russo_One } from 'next/font/google'

import About from '@/components/screens/home/About/About'
import Offer from '@/components/screens/home/Offer/Offer'
import Recently from '@/components/screens/home/Recently/Recently'
import HelpForm from '@/components/screens/home/HelpForm/HelpForm'
import Relevant from '@/components/screens/home/Relevant/Relevant'
import Hero from '@/components/screens/home/Hero/Hero'
import Faq from '@/components/screens/home/Faq/Faq'
import Reviews from '@/components/screens/home/Reviews/Reviews'

const inter = Inter({ subsets: ['latin'] })

const russo = Russo_One({
  subsets: ['latin'],
  weight: '400',
})

const Home: NextPage = () => {
  return (
    <div className='next-page'>
      <Head>
        <title>1A RENKAAT</title>
      </Head>
      <Hero />
      <Offer />
      <About />
      <Recently />
      <Reviews />
      <HelpForm />
      <Relevant />
      <Faq />
    </div>
  )
}

export default Home
