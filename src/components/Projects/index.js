import React from 'react'
import { Proj, Title, Img, Cards, CardImg, Card, ImgContainer, CardText, OpenProj, Name, Description } from './style'
import projectIcon from '../../images/icons/project-scheme.png'
import projectsData from '../../data/projects'

export function Projects() {
  return (
    <Proj>
      <Title id="projects">Projetos Desenvolvidos</Title>
      <Img src={projectIcon} width={62} height={62} alt="Project icons created by Flat Icons - Flaticon" />
      <Cards>
        {
          projectsData.map(({ name, link, img, description }) => (
            <Card>
              <ImgContainer>
                <CardImg src={img} />
              </ImgContainer>
              <CardText>
                <Name>{name}</Name>
                <Description>{description}</Description>
                <OpenProj href={link} target="_blank">{name}</OpenProj>
              </CardText>
            </Card>
          ))
        }
      </Cards>
    </Proj>
  )
}

export default Projects;
