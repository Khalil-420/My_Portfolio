import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h2>Hello ✌️ and Welcome</h2>
        <h3>I'm </h3>
        <h1>Mohamed Khalil Gammar</h1>
        <h4 className="text-light">&lt;xhalyl&gt;</h4>
        <CTA />
        <HeaderSocials />




        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header