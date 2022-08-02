import React from 'react'
import './portofolio.css'
import IMG1 from '../../assets/form-login.png'
import IMG2 from '../../assets/news-web.png'

const data = [
  {
    id: 1,
    image: IMG2,
    title: 'Game News Web',
    github: 'https://github.com',
  },

  {
    id: 2,
    image: IMG1,
    title: 'Tugas Membuat form login',
    github: 'https://github.com',
  },
]

const portofolio = () => {
  return (
    <section id='portofolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portofolio__container'>
       {
        data.map(({id, image, title, github}) => {
          return (
            <article key={id} className='portofolio__item'>
            <div className='portofolio__item-image'>
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className='portofolio__item-cta'>
              <a href={github} className='btn' target='_blank'>GitHub</a>
            </div>
            </article>
          )
        })
       }
      </div>
    </section>
  )
}
export default portofolio