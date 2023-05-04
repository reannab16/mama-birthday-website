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

function onLoadCallBack() {
  setTimeout(() => {
    setLoading(false);
    console.log(loading);
  }, 2000);
  console.log('yeyeboi')
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
      <div className='overflow-hidden h-[100vh] w-[100%] min-[400px]:hidden' onLoad={onLoadCallBack}>
        <ParallaxComponents/>
      </div>
      <div className='overflow-hidden h-[100vh] w-[100%] max-[400px]:hidden flex flex-col justify-center items-center bg-gray-950 '>
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
        <div className='text-center w-[80%] font-[Georgia-Pro] flex items-center justify-center max-w-md text-[#fce6e7]'>This website is only accessible on mobile phone because Reanna has exams and ran out of time to build it! Please try open it on a smaller device</div>
      </div>
    </div>
  )
}




{/* 
      <div className='wrapper w-100vw h-100vh'>

        <div className='bg-black h-[100vh] w-[100vw] flex items-center justify-center overflow-hidden -z-10 header'>
          <div className='absolute overflow-hidden w-[100vw] h-[100vh]'>
          <FlowerOverlay className='absolute -top-5 -right-[40vw] h-[65vh] header-flowers' id='flower1'/>
          <FlowerOverlay className='absolute -bottom-[30vh] -left-[50vw] h-[65vh] header-flowers' id="flower2"/>
          </div>
          <div className='title-items flex justify-center items-center' id='title-items'>
            <IconBottle className='-mr-9 mb-12'/>
            <div className='flex flex-col items-center justify-center -ml-8 mt-10'>
              <div className='text-[var(--goldish)] font-[fifty] text-8xl'>
                fifty
              </div>
              <div className='text-white font-[Georgia-Pro] italic -mt-2 tracking-wider mr-1'>
                is the ultimate 'F' word
              </div>
            </div>
          </div>
            <Shoes className='absolute z-20 h-[20vh] bottom-[4.5vh] right-[2vw]'/>
            <Wave className='absolute z-10 bottom-0 left-0 right-0 w-[100vw]'/>
        </div>

        <div className='bg-[#fce6e7] h-[80vh] w-[100vw] flex-col flex items-center justify-center'>
          <div className='h-[100%] w-[60%] flex-col flex items-center justify-between font-[Georgia-Pro] text-center pb-[10vh]'>
          <div>Please join me in celebrating this milestone so I can step into my fifties with my favourite people.</div>
          <div>Dress code: from casual to dazzle, sandals to stilettos, diamonds or even a tiara. There's only one rule- rock any outfit you choose.</div>

          </div>
        </div>
      </div>



    </div>
  )
} */}

// let headerFlower1: any = document.getElementById('flower1');
// let titleItems: any = document.getElementById('title-items');

// window.addEventListener('scroll', function(){
//   var value = window.scrollY;
//   headerFlower1.style.top= value * 0.5 + 'px';
//   titleItems.style.top= value * 0.25 + 'px'

// })


