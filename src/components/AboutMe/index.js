import React from 'react'
import { Paragraph, HelloWorld, About, Hello, Name, Studant } from './style';

export function AboutMe() {
  return (
    <About id="about">
      <HelloWorld>{`< Hello World! />`} &#127757;</HelloWorld>
      <Hello>
        Olá! Eu sou o
        <Name>
          Gabriel Fontes
          <span> &#129299;</span>
        </Name>
      </Hello>
      <Studant>
        Estudante de Desenvolvimento Web FullStack na <a href='https://www.betrybe.com/' target="_blank" className='text-green-600' rel="noreferrer">Trybe <span className='animate-pulse'>&#127891;&#128640;</span></a>
      </Studant>
      <Paragraph>
        Olá! Tenho 18 anos, sou um Desenvolvedor Front-end junior e atualmente curso Desenvolvimento Web na Trybe!
        Tenho o objetivo de me tornar um Desenvolvedor Web para ajudar as pessoas a solucionar problemas e adquirir boas experiências com isso.
      </Paragraph>
    </About>
  )
}

export default AboutMe;