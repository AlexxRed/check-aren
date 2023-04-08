import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Fail from "@/components/ui/ErrorPage/Fail";


const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 5000);
  }, [router]);

  return (
    <div >
      <Head>
        <title>Error</title>
      </Head>
    <Fail/>
    </div>
  )
};

export default Error;