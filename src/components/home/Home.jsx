import React from 'react'
import Hero from './Hero'
import Popup from './Popup'
import WhyBest from './WhyBest'
import CampusTour from './CampusTour'
import StudentLife from './StudentLife'
import Faculty from './Faculty'
import Contact from '../contact/Contact'

function Home() {
  return (
    <>
    <Hero />
    <Popup/>
   <WhyBest />
   <CampusTour />
   <Faculty />
   <StudentLife />
   <Contact />
    </>
  )
}

export default Home
