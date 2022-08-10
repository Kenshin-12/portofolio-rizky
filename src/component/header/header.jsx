import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/fotoku-removebg.png'
import HeaderSocials from './HeaderSocials'

const Header = ({ datas }) => { 
  const { apa, setApa } = datas
  const { job, setJob } = datas
  const { salam, setSalam } = datas

function halo(){
  setSalam ("Hello I'm");
}

function orang(){
  setApa ("M. Rizky ferdiansyah");
}

function kerja(){
  setJob ("SOFTWARE ENGINER");
}
  return (
    <header>
      <div className="container header__container">
        <div className='title'>
        <h5>{salam}</h5>
        <h1>{apa}</h1>
        <h4>{job}</h4>
        </div>
        <button className='btn btn-primary' onClick={() => {orang(); kerja(); halo();}}><i><b>CLICK</b></i></button>
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