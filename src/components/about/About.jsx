import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {BiBullseye} from 'react-icons/bi'
import {FaGamepad} from 'react-icons/fa'
import {GiGraduateCap} from 'react-icons/gi'
function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
          <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className = 'about__card'>
              <BiBullseye className='about__icon'/>
              <h5>Biography</h5>
              <small>I'm 22 years old <br /> I am a very curious</small>
              <small>&nbsp;person always seeking new experiences  </small>


            </article>

            <article className = 'about__card'>
              <FaGamepad className='about__icon'/>
              <h5>Hobbies</h5>
              <small>CTFs<br></br></small>
              <small> Chess<br></br></small>
              <small> Gaming</small>
            </article>

            <article className = 'about__card'>
              <GiGraduateCap className='about__icon'/>
              <h5>Education</h5>
              <small>Software Engineer Student @TEKup <br></br></small>
              <small> PCAP Certified <br></br></small>
              <small> THM Jr.Pentester Certified</small>
            </article>


          </div>
          <br></br>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>

          
        </div>


         </div>
    </section>
  )
}

export default About