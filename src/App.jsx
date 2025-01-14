import React from 'react'
import Header from './component/header/Header'
import Main from './component/main/Main'
import About from './component/about/About'
import Service from './component/services/Service'
import Contact from './component/contact/Contact'
import Footer from './component/footer/Footer'
import Team from './component/team/Team'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Main />
      <About />
      <Service />
      <Team />
      <Contact />
    </>
  )
}

export default App