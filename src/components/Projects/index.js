import React from 'react'
import projectIcon from '../../images/project-scheme.png'
import {
  ProjectsHeader,
  Title,
  ProjIcon,
  ProjContainer,
  CardWrapper,
  CardImg,
  CardBody,
  CardBodyOuter,
  CardBodyInner,
  CardTitle,
  CardDescription,
  TextOfDescription,
  CardButton,
  Button
} from './style'
import projectsData from '../../data/projects';


export function Projects() {
  return (
    <div>
      <ProjectsHeader>
        <Title>Projetos Desenvolvidos</Title>

        <ProjIcon src={projectIcon} width={62} height={62} alt="Project icons created by Flat Icons - Flaticon" />

      </ProjectsHeader>
      {projectsData.map(({ name, description, image, link }) => (
        <ProjContainer id="projects">
          <CardWrapper>
            <CardImg>
              <img className="rounded" src={image} width="220px" alt="Imagem projeto app de receitas" />
            </CardImg>

            <CardBody>
              <CardBodyOuter>
                <CardBodyInner>
                  <CardTitle>
                    <h3>{name}</h3>
                  </CardTitle>
                  <CardDescription>
                    <TextOfDescription>
                      {description}
                    </TextOfDescription>
                  </CardDescription>
                  <CardButton>
                    <Button type="button" target="_blank" href={link}>
                      Ver Projeto
                    </Button>
                  </CardButton>
                </CardBodyInner>
              </CardBodyOuter>
            </CardBody>
          </CardWrapper>
        </ProjContainer>
      ))}
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  )
}

export default Projects;
