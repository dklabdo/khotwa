import React from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
function ContactUs() {
    useEffect(()=>{Aos.init()},[])

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_3t7mj8i", "template_qj3d7ji", form.current, {
        publicKey: "Hz9iwIrSSlCn3enIF",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div id="contact" data-aos="zoom-in" data-aos-duration="1000" className="w-full md:my-52 mb-12">
      <h2 className="text-main text-center mb-12">Contact us</h2>
      <div className="flex scale-90 flex-col-reverse lg:flex-row  gap-[10%] p-4">
        
        <form
          ref={form}
          onSubmit={(e) => sendEmail(e)}
          className="lg:w-[80%] w-full mx-auto lg:mt-10"
        >
          <input
            className="bg-white py-8 w-full p-2 my-2 h-12 focus:outline-none text-black border-b-2 border-main"
            type="text"
            placeholder="name"
            name="user_name"
          />
          <input
            className="bg-white w-full py-7 p-2 my-2 h-12 focus:outline-none text-black border-b-2 border-main"
            type="text"
            placeholder="email"
            name="user_email"
          />
          <input
            className="bg-white w-full py-8 p-2 my-2 h-12 focus:outline-none text-black border-b-2 border-main"
            type="text"
            placeholder="subject"
            name="subject"
          />
          <textarea
            className="bg-white rounded-none w-full p-2 my-2 h-40 placeholder:absolute placeholder:top-2 focus:outline-none text-black border-b-2 border-main"
            type="text"
            placeholder="your message"
            name="message"
          />
          <button
            className="bg-main py-4 text-white font-semibold  my-4  text-base w-full"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
      
    </div>
  );
}

export default ContactUs;
