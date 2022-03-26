import React from 'react';
import technology from '../../images/technology.png';
import data from '../../data/technologies';
import { Title, Knowledge, Card, TechnologiesCard, ImgCard, HeaderCard, CardName, CardDescription } from './style';

export function Knowledges() {
  return (
    <Knowledge>
      <Title id="knowledges">Conhecimentos e Tecnologias</Title>
      <img className="self-center pt-8 pb-20" src={technology} width={60} height={60} alt="Mysql ícones criados por Freepik - Flaticon" />

      <TechnologiesCard>
        {
          data.map(({ name, description, image, knowmore }) => (
            <Card>
              <HeaderCard>
                <ImgCard src={image} alt="Icon" validation={name} />
              </HeaderCard>
              <CardName target="_blank" href={knowmore}>{name}</CardName>
              <div className="description">
                <CardDescription>
                  {description}
                </CardDescription>
              </div>
            </Card>
          ))
        }
      </TechnologiesCard>
    </Knowledge >
  )
}

export default Knowledges;
