import React from "react";

export default function CountdownPage() {
    return (
      <div className='overflow-hidden h-[100vh] w-[100%] bg-[#fce6e7]'>
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
  }