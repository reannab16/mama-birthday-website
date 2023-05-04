import React from "react";
import { useEffect, useState } from "react";

export default function countdown() {

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes]= useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() =>{
        const target = new Date("05/20/2023 19:30:00").getTime()

        const interval = setInterval(() =>{
            const now = new Date().getTime()
            const difference = target - now

            const d = Math.floor(difference/ (1000 * 60 * 60 * 24));
            setDays(d);

            const h = Math.floor(
                (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            setHours(h)

            const m = Math.floor(
                (difference % (1000 * 60 * 60)) / (1000 * 60)
            )
            setMinutes(m)

            const s = Math.floor((difference % (1000 * 60)) / (1000))
            setSeconds(s)
        }, 1000);

        return() => clearInterval(interval);
    }, []);


    return (
        <div className='overflow-hidden h-[100vh] w-[100%] bg-black text-lg flex flex-col items-center justify-center text-[#fce6e7] text-center'>
          <div className='mb-5'>

            <div className='see-you'>see you soon!</div>
          </div>
          <div className='flex justify-center items-center text-white text-xl'>
            <div className="counter-container justify-center">
                <span className="counter justify-center">{days}</span>
                <span className="text-xs">days</span>
            </div>
            <div className="counter-container justify-center">
                <span className="counter justify-center">{hours}</span>
                <span className="text-xs">hours</span>
            </div>
            <div className="justify-center">
                <span className="counter justify-center">{minutes}</span>
                <span className="text-xs">mins</span>
            </div>
            <div className="counter-container justify-center">
                <span className="counter justify-center">{seconds}</span>
                <span className="text-xs">secs</span>
            </div>
  
          </div>
        </div>
      )
}