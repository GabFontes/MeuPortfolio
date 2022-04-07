import React from 'react'
import gitHubLogo from '../../images/GitHub_Logo.png';
import linkedingLogo from '../../images/icons8-linkedin-96.png';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { NavBar, WrapperHeader } from './style';

export function NavigationBar() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  return (
    <WrapperHeader>
      <NavBar>
        <AnchorLink className="block lg:inline-block hover:text-green-600 text-lg" href="#about">Sobre Mim</AnchorLink>
        <AnchorLink className="block lg:inline-block hover:text-green-600 text-lg" href="#knowledges">Conhecimentos</AnchorLink>
        <AnchorLink className="block lg:inline-block hover:text-green-600 text-lg" href="#projects">Projetos</AnchorLink>
        <a href='https://github.com/GabFontes' target="_blank" rel="noreferrer"  >
          <img
            className="bg-white rounded-lg"
            src={gitHubLogo}
            height={100}
            width={100}
            alt="Git Hub logo"
          />
        </a>
        <a href='https://www.linkedin.com/in/gabfontes/' target="_blank" rel="noreferrer">
          <img
            src={linkedingLogo}
            height={75}
            width={75}
            alt="linkedin Logo"
          />
        </a>
      </Icons>
    </NavBar>


  )
}

export default NavigationBar;
