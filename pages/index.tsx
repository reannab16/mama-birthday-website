import Image from 'next/image'
import { Inter } from 'next/font/google'
import { IconBottle } from '@/components/icons';
import { FlowerOverlay } from '@/components/icons';
import { Wave } from '@/components/icons';
import { Shoes } from '@/components/icons';
import { Parallax, ParallaxLayer} from '@react-spring/parallax'
import { ParallaxComponents } from '@/components/parallaxicons';
import { useEffect, useState } from "react";
import { Loader } from '@/components/loader';
// import { LoadingScreen} from "@/components/LoadingScreen";

const inter = Inter({ subsets: ['latin'] })

function Boo() {
  let store: any = [];

  for (let i = 0; i < 10; i++) {
    store.push(<div>
      Reanna
    </div>)
  }
  return (
    store
  )
}

export default function Home() {

  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false)

function onLoadCallBack() {
  setTimeout(() => {
    setLoading(false);
    // console.log(loading);
  }, 3000);
  // console.log('yeyeboi')
}

function LoadingScreen({loading}:any) {
  if (loading) return (
      <Loader/>
  );

  else return (
      <div className="h-0 w-0"></div>
  )
}


  return (
    <div className='overflow-hidden h-[100vh] w-[100%] bg-[#fce6e7]'>
      <LoadingScreen loading={loading}/>
      <div className='overflow-hidden h-[100vh] w-[100%] min-[450px]:hidden' onLoad={onLoadCallBack}>
        <ParallaxComponents/>
      </div>
      <div className='overflow-hidden h-[100vh] w-[100%] max-[450px]:hidden flex flex-col justify-center items-center bg-gray-950 '>
            <div className='title-items flex justify-center items-center'>
                <IconBottle className='-mr-9 mb-12'/>
                <div className='flex flex-col items-center justify-center -ml-8 mt-10'>
                <div className='text-[var(--goldish)] font-[fifty] text-8xl'>
                    fifty
                </div>
                <div className='text-white font-[Georgia-Pro] italic -mt-2 tracking-wider mr-1 text-lg'>
                    is the ultimate 'F' word
                </div>
                </div>
            </div>
        <div className='text-center w-[80%] font-[Georgia-Pro] flex items-center justify-center max-w-md text-[#fce6e7]'>This website is only accessible on mobile phone because Reanna has exams and ran out of time to build it! Please try open it on a smaller device or reduce your browser width</div>
      </div>
    </div>
  )
}


