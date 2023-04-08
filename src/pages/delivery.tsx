import { useEffect } from 'react';
import type { GetStaticPropsContext, NextPage } from 'next'
import Head from 'next/head'
import Navigation from '@/components/screens/delivery/Navigation/Navigation';
import DeliveryAndReturn from '@/components/screens/delivery/Delivery/DeliveryAndReturn';


const Delivery: NextPage = () => {
    return (
        <div className="next-page">
            <Head>
            <title>Delivery and return</title>
            </Head>
        <DeliveryAndReturn/>
        </div>
    )
}
    
export default Delivery;