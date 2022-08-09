import React from 'react'
import CV from '../../assets/CV-rizky.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href='https://github.com/Kenshin-12' className='btn btn-primary'>My Github</a>
    </div>
  )
}

export default CTA