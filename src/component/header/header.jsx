import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/fotoku-removebg.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='scroll__down'>
      <a href="#contact">Scroll Down</a>
      </div>

      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>M. Rizky ferdiansyah</h1>
        <h5 className="text-light">SOFTWARE ENGINER</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>
      </div>
    </header>
  )
}

export default Header