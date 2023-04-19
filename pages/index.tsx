import Image from 'next/image'
import { Inter } from 'next/font/google'
import { IconBottle } from '@/components/icons';
import { FlowerOverlay } from '@/components/icons';
import { Wave } from '@/components/icons';
import { Shoes } from '@/components/icons';

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
  return (
    <div className=' w-100vw overflow-hidden'>



      <div className='bg-black h-[100vh] w-[100vw] flex items-center justify-center overflow-hidden'>
      <div className='absolute overflow-hidden w-[100vw] h-[100vh]'>
      <FlowerOverlay className='absolute  -top-5 -right-[40vw] h-[65vh]'/>
      <FlowerOverlay className='absolute   -bottom-[30vh] -left-[50vw] h-[65vh]'/>
      </div>
        <IconBottle className='-mr-8 mb-11'/>
        <div className='flex flex-col items-center justify-center -ml-8 mt-10'>
          <div className='text-[var(--goldish)] font-[fifty] text-8xl'>
            fifty
          </div>
          <div className='text-white font-[Georgia-Pro] italic -mt-2 tracking-wider mr-1'>
            is the ultimate F word
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
  )
}
