import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { FlowerOverlay, IconBottle, Shoes, Wave } from '@/components/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Switch from './toggle'
import { useState } from 'react';

export function ParallaxComponents() {

  const [isToggled, setIsToggled] = useState(false);

  return (
    <Parallax pages={2} style={{ top: '0', left: '0' }}>
        <ParallaxLayer offset={0} speed={0.85}>
            <div className=' w-[100vw] h-[96vh] bg-black flex items-center justify-center overflow-hidden'></div>
        </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.05}>
        <div className='absolute top-0 left-0 h-[100vh] w-[100vw] flex justify-center items-center -z-10'>
            <div className='title-items flex justify-center items-center -z-10'>
                <IconBottle className='-mr-9 mb-12 -z-10'/>
                <div className='flex flex-col items-center justify-center -ml-8 mt-10'>
                <div className='text-[var(--goldish)] font-[fifty] text-8xl'>
                    fifty
                </div>
                <div className='text-white font-[Georgia-Pro] italic -mt-2 tracking-wider mr-1'>
                    is the ultimate 'F' word
                </div>
                </div>
            </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.65}>
        <div className='absolute overflow-hidden w-[100vw] h-[100vh]'>
          <FlowerOverlay className='absolute -top-5 -right-[40vw] h-[65vh] z-5'/>
          <FlowerOverlay className='absolute -bottom-[30vh] -left-[50vw] h-[65vh] z-5'/>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.85}>
        <Shoes className='absolute z-20 h-[20vh] bottom-[4.5vh] right-[2vw]'/>
        <Wave className='absolute z-10 bottom-0 left-0 right-0 w-[100vw]'/>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.85}>
        <div className='bg-[#fce6e7] h-[85vh] w-[100vw] flex-col flex items-center justify-center absolute top-[100vh] z-0'>
            <div className='h-[100%] w-[65%] flex-col flex items-center justify-around font-[Georgia-Pro] text-center pb-[10vh] italic text-base'>
                <div>Please join me in celebrating this milestone so I can step into my fifties with my favourite people.</div>
                <div>
                    <div><FontAwesomeIcon icon={faCalendar} /> Sat May 20th 7pm</div>
                    <div><FontAwesomeIcon icon={faLocationDot} /> Café Kiku</div>
                </div>
                <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.029556680842!2d79.85860357508916!3d6.887063118831529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b735c3dc199%3A0x22ad3074b31606bc!2sKIKU%20Colombo!5e0!3m2!1sen!2suk!4v1681948900301!5m2!1sen!2suk"
                 width="222" 
                 height="170" 
                 style={{ border: "0"}} 
                //  allowfullscreen="" 
                //  loading="lazy" 
                //  referrerpolicy="no-referrer-when-downgrade"
                 >
                 </iframe>
                </div>
                <div>Dress code: from casual to dazzle, sandals to stilettos, diamonds or even a tiara. There's only one rule- rock any outfit you choose.</div>
            </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.65}>
        <div className='bg-[#fce6e7] h-[70vh] w-[100vw] flex-col flex items-center justify-center absolute top-[180vh] z-0'>
            <div className='h-[100%] w-[67%] flex-col flex items-center justify-between text-center pb-[10vh] pt-[10vh]'>
                <div className='rsvp text-3xl z-10'>RSVP</div>
                <FlowerOverlay className='absolute top-[2vh] h-[35vh] rotate-12 pr-6'/>
                <form className='h-[75%] w-[95%] bg-white rounded-3xl z-10 flex items-center justify-around flex-col font-[Georgia-Pro]' action="https://formsubmit.co/reannab16@gmail.com" method="POST">
                    <div>
                        <div className='w-[100%] pt-[10%]'>Name</div>
                        <input type="text" name="name" id="" className='bg-[#fce6e7] rounded-lg text-xs h-6 text-center w-[95%] text-gray-400' placeholder='enter your name here' required />
                    </div>
                    {/* <input type="hidden" name="_next" value=""></input> */}
                    {/* <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html"></input> */}
                    <div>
                      <div>Coming?</div>
                      <Switch isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)}/>
                    </div>
                    <button type='submit' className='bg-[#fce6e7] h-[34px] w-[60px] rounded-lg mb-[10%]'>Send</button>

                </form>
            </div>
        </div>
      </ParallaxLayer>

    </Parallax>
  )
}