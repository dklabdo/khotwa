import React from 'react'
import { TeamInfo } from '../Data'

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MoveRight } from 'lucide-react';
import t1 from '../assets/t1.svg'
import t2 from '../assets/t2.png'
import t3 from '../assets/t3.png'
import t4 from '../assets/t4.png'
import t5 from '../assets/t5.png'
import t6 from '../assets/t6.png'
import t7 from '../assets/t7.png'
import t8 from '../assets/t8.png'
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from 'react';

function SectionOne() {
  useEffect(()=>{Aos.init()},[])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow : <CustonArrow/>,
    prevArrow : <></>

  };
  return (
   <section data-aos="zoom-in" data-aos-duration="1000" className='w-[80%] h-[700px] md:h-[480px] bg-white mx-auto my-24 rounded-3xl shadow-2xl shadow-black/20'>
      <Slider {...settings}>
      {TeamInfo.map((data,index) => {
        return(
          <TeamCard key={index} img={data.img} tech={data.tech} name={data.name} job={data.job} />
        )
      })}
      </Slider>

   </section>
  )
}

function CustonArrow({onClick}){
  return(
    <MoveRight size={40} className='absolute p-1 cursor-pointer     right-10 bottom-10' onClick={onClick} />
  )
}



function TeamCard({name,job,tech,img} ){
  function getTech(data){
      switch (data) {
        case 1:
          return t1
          break;
        case 2:
            return t2
            break;
        case 3:
            return t3
            break;
        case 4:
            return t4
            break;
        case 5:
            return t5
            break;
        case 6:
            return t6
            break;
        case 7:
            return t7
            break;
        case 8:
            return t8
            break;
            getTech
      
        default:
          break;
      }
  }
  return(
    <div id='s1' className='w-full p-6  h-[690px] md:h-[480px] '>
      <div className='w-full  flex flex-col md:flex-row   gap-2 items-center mb-8 h-[800px] md:h-[460px] '>
          <div className='w-full  md:w-[45%] md:px-20 md:py-42   flex -space-y-10 justify-center '>
              <div className='rounded-2xl   w-fit '>
              <a href="https://ibb.co/r3GB1Mh"><img className='w-60    rounded-3xl' src={img} alt="photo-2024-04-19-19-29-00" border="0"/></a>
              </div>
              
          </div>
          <div className='w-full md:w-[55%] pl-2 md:pl-12 pt-32 h-full ' >
          <h3>{name} </h3>
          <p>{job}</p>
          <div className='p-4 flex gap-4'>
              {tech.map((data,index) => {
                return(
                  <img key={index} className='w-12 xs:w-6' src={getTech(data)} alt='...' />
                )
              })}
          </div>
          </div>
      </div>

    </div>
  )
}

export default SectionOne