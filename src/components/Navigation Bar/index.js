import React from 'react'
import gitHubLogo from '../../images/icons/GitHub_Logo.png';
import linkedingLogo from '../../images/icons/icons8-linkedin-96.png';
import { NavBar, Text, Anchors, Icons } from './style';

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
    <NavBar>
      <Anchors>
        <Text href="#about">Sobre Mim</Text>
        <Text href="#knowledges">Conhecimentos</Text>
        <Text href="#projects" style={{ behavior: 'smooth' }} > Projetos</Text>
      </Anchors>
      <Icons>
        <a className="m-4 mx-16" href='https://github.com/GabFontes' target="_blank" rel="noreferrer"  >
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
