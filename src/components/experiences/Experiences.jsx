import React from 'react'
import './experiences.css'
import {BsCheckCircleFill} from 'react-icons/bs'
const experience = () => {
  return (
    <section id='experiences'>
      <h5>What Skills I Have</h5>
      <h2>Technical Skills</h2>
      <div className="container experience__container">
        <div className="experience__1">
          <div className="experience__content">
            <article className="experience__details">
              <BsCheckCircleFill className='experience__details-icon'/>
              <div>
              <h4>HTML</h4>
              <small className="text-light">Intemediate</small>
              </div>
              </article>  

              <article className="experience__details">
              <BsCheckCircleFill className='experience__details-icon'/>
              <div>
               <h4>Javascript</h4>
               <small className="text-light">Intermediate</small>
              </div>
              </article>  

              <article className="experience__details">
              <BsCheckCircleFill className='experience__details-icon'/>
              <div>
              <h4>Python</h4>
              <small className="text-light">Intermediate</small>
              </div>
              </article>  

              <article className="experience__details">
              <BsCheckCircleFill className='experience__details-icon'/>
              <div>
              <h4>SQL</h4>
              <small className="text-light">Good</small>
              </div>

              </article>  

              <article className="experience__details">
              <BsCheckCircleFill className='experience__details-icon'/>
              <div>
              <h4>React</h4>
              <small className="text-light">Good</small>
              </div>

              </article>  
          </div>
        </div>
                 {/* END OF FIRST PART*/}
        <div className="experience__2">
        <div className="experience__content">
            <article className="experience__details">
              <BsCheckCircleFill className='experience__details-icon'/>
              <div>
              <h4>C</h4>
              <small className="text-light">Intermediate</small>
              </div>
              </article>  

              <article className="experience__details">
              <BsCheckCircleFill className='experience__details-icon'/>
              <div>
               <h4>Adobe Illustrator</h4>
               <small className="text-light">Good</small>
              </div>
              </article>  

          </div>
        </div>
          

        </div>
    </section>
  )
}

export default experience