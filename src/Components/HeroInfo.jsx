import React from 'react'
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from 'react';

function HeroInfo() {
  useEffect(()=>{Aos.init()},[])

  return (
    <div data-aos="zoom-in" data-aos-duration="1000" className='w-full  md:mt-36 flex justify-center md:px-20 '>
        <div className='flex  xs:flex-col xs:divide-y-2 xs:divide-x-0 divide-x-2 xs:w-full w-fit '>
            <div className='infoCard'>
                <h2>2 Y</h2>
                <p>Experiance</p>
            </div>
            <div className='infoCard'>
                <h2>12 +</h2>
                <p>Project</p>
            </div>
            <div className='infoCard'>
                <h2>20 +</h2>
                <p>Happy client</p>
            </div>
            
            
            
        </div>

    </div>
  );
}

export default HeroInfo