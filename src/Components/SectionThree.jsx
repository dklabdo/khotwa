import React from 'react'
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import p4 from '../assets/p4.png'
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from 'react';
function SectionThree() {
  useEffect(()=>{Aos.init()},[])

  return (
    <section data-aos="zoom-in" data-aos-duration="1000" id='s3' className='w-full  md:gap-20 '>
        <h2 className='my-1 md:my-20 text-center text-main'>Portfolio</h2>
        <div className=' flex flex-col md:flex-row scale-75 gap-10 mx-auto'>
            <div className='bg-white rounded-2xl shadow-lg shadow-black/20 p-10 flex flex-col gap-2'>
                <img className='w-72 md:w-52' src={p3} alt="" />
                <h4 className='text-center' >Nebtha app</h4>
            </div>
            <div className='bg-white rounded-2xl shadow-lg shadow-black/20 p-10 flex flex-col gap-2'>
                <img className='w-72 md:w-52' src={p4} alt="" />
                <h4 className='text-center'>Pulse care</h4>
            </div>
            <div className='bg-white rounded-2xl shadow-lg shadow-black/20 p-10 flex flex-col gap-2'>
                <img className='w-72 md:w-52' src={p1} alt="" />
                <h4 className='text-center'>Kidnest</h4>
            </div>
            <div className='bg-white rounded-2xl shadow-lg shadow-black/20 p-10 flex flex-col gap-2'>
                <img className='w-72 md:w-52' src={p2} alt="" />
                <h4 className='text-center'>inTram</h4>
            </div>

        </div>


    </section>
  )
}

export default SectionThree