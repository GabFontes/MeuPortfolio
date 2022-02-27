import React from 'react'
import { Title, Knowledge, Card, TechnologiesCard, ImgCard, HeaderCard, CardName, CardDescription } from './style'
import technology from '../../images/technology.png'
import data from '../../data/technologies'

export function Knowledges() {
  return (
    <Knowledge>
      <Title>Conhecimentos e Tecnologias</Title>
      <img className="self-center pb-20" src={technology} width={60} height={60} alt="Mysql ícones criados por Freepik - Flaticon" />

      <TechnologiesCard>
        {/* {
          data.map(({ name, description, image }) => (
            <Card>
              <HeaderCard>
                <ImgCard src={image} alt="Icon" validation={name} />
                <CardName>{name}</CardName>
              </HeaderCard>
                <CardDescription class="text-white text-base">
                  {description}
                </CardDescription>
            </Card>
          ))
        } */}
      </TechnologiesCard>
    </Knowledge >
  )
}

export default Knowledges;
