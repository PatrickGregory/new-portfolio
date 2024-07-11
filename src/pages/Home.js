import React from 'react'
import Header from '../components/layout'
import Intro from '../components/Home/intro'
import Portfolio from './Portfolio'
import Experience from './experience'
import Contact from './contact'

export default function Home() {
  return (
    <div>
      <Header />
      <Intro />
      <Portfolio />
      <Experience />
      <Contact/>
    </div>
  )
}
