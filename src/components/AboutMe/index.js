import React from 'react'
import { Paragraph, HelloWorld, About, Hello, Name } from './style';

export function AboutMe() {
  return (
    <About>
      <HelloWorld>{`< Hello World! />`} &#127757;</HelloWorld>
      <Hello>
        Olá! Eu sou o
        <Name>
          Gabriel Fontes
        <span> &#129299;</span>
        </Name>
      </Hello>
      <Hello>Estudante de desenvolvimento Web FullStack na Trybe</Hello>
      <Paragraph>
        Olá! Tenho 18 anos, sou formado no ensino médio e atualmente curso Desenvolvimento Web na Trybe!
        Tenho o objetivo de me tornar um Desenvolvedor Web para ajudar as pessoas a solucionar problemas e adquirir boas experiências com isso.
      </Paragraph>
    </About>
  )
}

export default AboutMe;