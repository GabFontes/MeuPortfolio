import React from 'react'
import { Proj, Title, Img } from './style'
import projectIcon from '../../images/project-scheme.png'

export function Projects() {
  return (
    <Proj>
      <Title>Projetos Desenvolvidos</Title>
      <Img src={projectIcon} width={62} height={62} alt="Project icons created by Flat Icons - Flaticon"/>
    </Proj>
  )
}

export default Projects;
