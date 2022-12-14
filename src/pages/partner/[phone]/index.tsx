import { GetServerSidePropsContext, GetServerSidePropsResult, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Bookmark, Copy, Star } from "react-feather";
import Cards from "../components/Cards";
import axios from 'axios'

interface PartnersProps  {email: string, referrals: number, phone: string, business: string} 

export default function OnboardingPage  (
    props: InferGetServerSidePropsType<typeof getServerSideProps>)
    : JSX.Element {
    const [showPopUp, setShowPopUp] = useState<boolean>(false)
    const [data, setData]  = useState<PartnersProps>(props)
    const router = useRouter()
    const link = `${process.env.NEXT_PUBLIC_REF_LINK}/${router.query?.phone}`

    function copyText (): void {
        setShowPopUp(true)
        navigator.clipboard.writeText(link)
        setTimeout(() =>{
          setShowPopUp(false)  
        }, 2000)
    }

    useEffect(() => {
            const interval  = setInterval( () => {
                const dev = process.env.NODE_ENV !== 'production'
                const link = `${dev ? '' : process.env.NEXT_PUBLIC_SITE}/api/partners?phone=${router.query?.phone as string}`
                fetch(link)
                .then(res => res.json())
                .then((_data) => setData(_data.data as PartnersProps))
            }, 30000)
        return () => clearInterval(interval)
    }, [])

    return (
        <>
          <section className="my-5">
                <div className="w-3/4 md:w-full">
                    <h1 className="text-ellipsis text-lg font-light text-imagyne-primary">{`Welcome back , ${props.business}`}</h1>
                    <span className="text-xs text-gray-500">You always have been a fantastic cook</span>
                </div>
          </section>
          <section >
         <div>
         <div className="flex flex-row items-center space-x-1 -px-1">
         <Cards classname="w-1/2 md:w-1/3">
                <div className="flex flex-col  text-lg font-medium text-imagyne-accent">
                   <p className="font-medium text-center">Total Referrals</p>
                    <p className="font-bold text-center">{data.referrals}</p>
                </div>
            </Cards>
            <Cards classname="w-1/2 md:w-1/3">
                <div className="flex flex-col  text-lg font-medium text-imagyne-accent">
                    <p className=" text-center">Rewards Earned</p>
                    <p className="font-bold text-center ">NGN {data.referrals * Number(process.env.NEXT_PUBLIC_REWARDS) }</p>
                </div>
            </Cards>
         </div>
         <div className="mt-2">
         <Cards classname="w-full">
                <div className="flex flex-col  text-lg font-medium text-imagyne-accent">
                    <p className=" text-center">Your referral link</p>
                    <pre className="text-xs mt-2 overflow-x-scroll ">{link}</pre>
                </div>
            </Cards>
         </div>
         </div>
      <div className="relative">
      {showPopUp &&  <span className="absolute top-0 right-3 rounded-md shadow-lg bg-white z-50 px-3 py-2 text-sm text-imagyne-secondary">Copied link</span> }
         <button onClick={() => copyText()} className=" mt-2 flex flex-row items-center w-full bg-imagyne-primary text-white text-lg justify-center  py-2 px-2 outline-none shadow-sm">
              <span className="mr-1">
                Copy link
              </span>
              <Copy size={20} color="white" />
         </button>
      </div>
          </section>
          <section className="mt-10">
                <div className="flex flex-row items-center justify-center">
                    <h1 className="text-lg font-medium text-imagyne-secondary">{`Partner's guidelines`}</h1>
                    <Bookmark  className="text-imagyne-primary" size={20} />
                </div>
                <div>
                    <div className="flex flex-row space-x-1 items-center my-2">
                        <Star  className="text-yellow-500" size={16}/>
                        <p className="text-imagyne-secondary text-sm">Copy Your personalized referral link</p>
                    </div>
                    <div className="flex flex-row space-x-1 items-center my-2">
                        <Star  className="text-yellow-500" size={16}/>
                        <p className="text-imagyne-secondary text-sm">Share it on your social media handles</p>
                    </div>
                    <div className="flex flex-row space-x-1 items-center my-2">
                        <Star  className="text-yellow-500" size={16}/>
                        <p className="text-imagyne-secondary text-sm">Customers will fill in a survey</p>
                    </div>
                    <div className="flex flex-row space-x-1 items-center my-2">
                        <Star  className="text-yellow-500" size={16}/>
                        <p className="text-imagyne-secondary text-sm">Get paid for each customer that completed the survey</p>
                    </div>
                </div>
            </section>

            <section>
            <div className="flex flex-col mt-4">
            <p className="text-black font-light underline text-xs">Imagyne Partners program Terms and Condition</p>
        </div>
            </section>
        </>
    )

}


export async function getServerSideProps(
    context: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<PartnersProps>> {
    const dev = process.env.NODE_ENV !== 'production';
     const link = `${dev? 'http:localhost:3000' : process.env.NEXT_PUBLIC_SITE}/api/partners?phone=${context.params?.phone as string}`
    let response: any
    try {
        const req = await  fetch(link)
        response  = (await req.json()).data as unknown as PartnersProps  | null
        return {props: response }
    } catch (error) {
        console.log(error);
    }

    return {props: response }
  }