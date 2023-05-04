import React from "react";

export default function countdown() {
    return (
        <div className='overflow-hidden h-[100vh] w-[100%] bg-black text-lg flex flex-col items-center justify-center text-[#fce6e7] text-center'>
          <div className='mb-5'>Thanks for submitting, here is a <span className="font-[fifty] text-7xl text-[--goldish]">countdown</span></div>
          <div className='flex justify-center items-center'>
              <div className="counter"></div>
              <div className="counter"></div>
              <div className="counter"></div>
              <div className="counter"></div>
              <div className="counter"></div>
              <div className="counter"></div>
  
          </div>
        </div>
      )
}