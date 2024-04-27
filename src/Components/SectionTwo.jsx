import React from 'react'
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import { Brush, Code, LineChart, Rocket } from 'lucide-react'
function SectionTwo() {
  useEffect(()=>{Aos.init()},[])

  return (
    <section data-aos="zoom-in" data-aos-duration="1000" id='s2' className='flex flex-col lg:flex-row gap-2 items-center my-10 md:my-52'>
        <div className='lg:w-1/2 px-6 md:px-20'>
            <h2>How we work ??</h2>
            <p className='my-12'>At our core, we are a team of dedicated developers and designers passionate about harnessing the power of technology to solve complex problems and deliver exceptional digital experiences. Our process is built on four key steps: analyze, develop, design, and launch.</p>
            <a href='#contact' className=' PrimaryButton' >Work with us</a>
        </div>
        <div className='lg:w-1/2 flex-col md:flex-row scale-75 flex md:gap-14'>
            <div className='flex flex-col  gap-10'>
            <Card selected icon={1} title="1.Analyze" content="We deeply understand your goals and target audience" />
            <Card  icon={2} title="2.Design" content=" Our skilled team brings your vision to life with cutting-edge technology." />
            </div>
            <div className='flex flex-col gap-10 mt-20'>
            <Card  icon={3} title="3.Dev" content="We create visually stunning and user-friendly interfaces." />
            <Card  icon={4} title="4.Launch" content=" With thorough testing, we ensure a smooth deployment." />
        
            </div>
        </div>
    </section>
  )
}

function Card({icon,title,content,selected}){
    return(
        <div className='w-full md:w-72 pl-6 bg-white rounded-lg shadow-xl p-6 shadow-gray-400/50'>
            <div className={`p-8 w-fit my-6 rounded-2xl ${selected ? "bg-main" : "bg-main/30"}`} >
            {icon == 1 && <LineChart size={35} color={selected ? 'white' : '#A53DFF'} />}
            {icon == 2 && <Brush size={35} color={selected ? 'white' : '#A53DFF'} />}
            {icon == 3 && <Code size={35} color={selected ? 'white' : '#A53DFF'} />}
            {icon == 4 && <Rocket size={35} color={selected ? 'white' : '#A53DFF'} />}
            </div>
            <h3 className='my-4'>{title} </h3>
            <p>{content} </p>
        </div>
    )
}

export default SectionTwo