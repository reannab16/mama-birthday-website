import React from 'react'
import { useState } from 'react';




const Switch = ({isToggled}:any, {onToggle}:any) => {
    
    return (
        <label className='switch relative inline-block w-[60px] h-[34px]'>
            <input type="checkbox" className='opacity-0 w-0 h-0' checked={isToggled} onChange={onToggle} name="coming"/>
            <span className='slider absolute top-0 bottom-0 left-0 right-0 cursor-pointer z-0 bg-[#fce6e7] before:absolute before:h-[26px] before:w-[26px] before:left-[4px] before:bottom-[4px] before:bg-white rounded-full before:rounded-full before:z-20'/>
        </label>
    );
}



export default Switch
