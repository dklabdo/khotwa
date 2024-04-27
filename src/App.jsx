import { useState } from 'react'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import SectionOne from './Components/SectionOne'
import SectionTwo from './Components/SectionTwo'
import SectionThree from './Components/SectionThree'
import ContactUs from './Components/ContactUs'

function App() {

  return (
   <div>
      <NavBar/>
      <Hero/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <ContactUs/>
   </div>
  )
}

export default App
