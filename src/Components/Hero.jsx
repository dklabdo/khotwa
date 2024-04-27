import React from "react";
import HeroInfo from "./HeroInfo";
import img from "../assets/main.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Hero() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="w-full px-2 flex  flex-col justify-center">
      <div className="w-full  flex flex-col md:flex-row   md:h-[500px]   justify-evenly items-center">
        <div
          data-aos-duration="1000"
          data-aos="fade-right"
          className="flex w-full mt-12  md:w-[60%]  justify-center  flex-col px-2  md:px-20 "
        >
          <h1 className="text-txt">
            It's time for your ideas <br /> to meet actions
          </h1>
          <p>
            "Our team of skilled developers is dedicated to creating innovative
            and user-friendly solutions for all your digital needs. With a
            passion for technology and a commitment to excellence, we strive to
            deliver top-notch results that exceed expectations."
          </p>
          <a href="https://www.instagram.com/klinker_sc?igsh=dXNjdmZtN25sdXNi" className="flex gap-3 PrimaryButton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 50 50"
            >
              <path fill="white" stroke="white" d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
            </svg>
            Instagram page{" "}
          </a>
        </div>
        <div
          data-aos-duration="1000"
          data-aos="fade-left"
          className="w-full my-8 lg:p-20 md:w-[40%] h-[500px] md:h-full rounded-3xl "
        >
          <img src={img} alt="..." />
        </div>
      </div>
      <HeroInfo />
    </div>
  );
}

export default Hero;
