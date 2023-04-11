import { useEffect } from 'react'
import type { GetStaticPropsContext, NextPage } from 'next'
import Head from 'next/head'
import Why from '@/components/screens/services/Why/Why'
import Hero from '@/components/screens/services/Hero/Hero'
import SignForm from '@/components/screens/services/SignForm/HelpForm'
import Faq from '@/components/screens/home/Faq/Faq'
import Reviews from '@/components/screens/home/Reviews/Reviews'
import OurServices from '@/components/screens/services/OurServices/OurServices'

const Services: NextPage = () => {
  return (
    <div className='next-page'>
      <Head>
        <title>Services</title>
      </Head>
      <Hero />
      <Why />
      <SignForm />
      <Reviews />
      <Faq />
    </div>
  )
}

export default Services
