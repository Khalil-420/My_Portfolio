import React from 'react'
import './portfolio.css'
import writeups from '../../assets/writeups.png'
import projects from '../../assets/projects.webp'
  const data = [
    {
      id: 1,
      image: writeups,
      title: 'Writeups',
      link : 'https://medium.com/@khalyylgam'
    },
    {
      id: 2,
      image: projects,
      title: 'Projects',
      link : 'https://github.com/Khalil-420?tab=repositories'
    }
  ]
const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="portfolio__container">
       {
        data.map(({id,image,title,link}) => {
          return (
            <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
              <a href={link} className="btn btn-primary" target='_blank'>Here</a>
              </div>
          </article>
          )
        })
       }
      </div>
    </section>
  )
}

export default portfolio