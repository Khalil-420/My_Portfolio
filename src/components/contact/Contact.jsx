import React from 'react'
import './contact.css'
import CONTACT from '../../assets/man_cafe.jpg'
import {MdMarkEmailUnread} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {FaDiscord} from 'react-icons/fa'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdMarkEmailUnread className='contact__option-icon'/> 
            <h4>Email</h4>
            <a href="mailto:khalyylgam@gmail.com" target='_blank'>Send Mail</a>
          </article>
          <article className="contact__option">
            <BsMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Khalil Gammar</h5>
            <a href="https://m.me/khalilgam" target='_blank'>Send me a message</a>
          </article>
          <article className="contact__option">
            <FaDiscord className='contact__option-icon'/>
            <h4>Discord</h4>
            <h5>xhalyl#7722</h5>
          </article>

        </div>
        <img src={CONTACT} alt=""/>


      </div>
      </section>
  )
}

export default Contact