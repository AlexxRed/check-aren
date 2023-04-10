import { useEffect } from 'react';
import type { GetStaticPropsContext, NextPage } from 'next'
import Head from 'next/head'
import Catalog from '@/components/screens/catalog/Catalog/Catalog'


const Discs: NextPage = () => {
    return (
        <div className="next-page">
            <Head>
            <title>Catalog</title>
            </Head>
        <Catalog/>
        </div>
    )
}
    
export default Discs;