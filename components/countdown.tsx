import React from "react";

export function CountdownPage({submitted}:any) {
    console.log(submitted);
  if (submitted) {
    return (
        <div className='absolute top-0 bottom-0 overflow-hidden h-[100vh] w-[100vw] z-[100]'>
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
    else return (
      <div className="h-0 w-0"></div>
    )
  }