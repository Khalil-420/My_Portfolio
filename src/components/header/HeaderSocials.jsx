import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsMedium} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/mohamed-khalil-gammar-44754119a/" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/Khalil-420?tab=repositories" target='_blank'><BsGithub /></a>
        <a href="https://medium.com/@khalyylgam" target='_blank'><BsMedium /></a>
    </div>
  )
}

export default HeaderSocials