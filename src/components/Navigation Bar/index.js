import React from 'react'
import gitHubLogo from '../../images/GitHub_Logo.png';
import linkedingLogo from '../../images/icons8-linkedin-96.png';
import { NavBar, WrapperHeader, Text } from './style';

export function NavigationBar() {
  return (
    <WrapperHeader>
      <NavBar>
        <Text>Sobre Mim</Text>
        <Text>Conhecimentos</Text>
        <Text>Projetos</Text>
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
      </NavBar>
    </WrapperHeader>
  )
}

export default NavigationBar;
