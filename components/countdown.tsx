import React from "react";

export function CountdownPage({submitted}:any) {
  if (submitted) return (
      <div className='absolute top-0 bottom-0 overflow-hidden h-[100vh] w-[100vw] bg-[#fce6e7] z-[100]'>
        thanks for submitting, here is a countdown!
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
    return (
      <div className="h-0 w-0"></div>
    )
  }