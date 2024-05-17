import styled from 'styled-components';

export const Title = styled.h1`
  color: ${props => props.darkmode === 'true' ? '#FFF' : '#000'};
  text-shadow: ${props => props.textShadow === 'true' ? '1px 1px 2px rgba(73, 73, 73, 0.73)' : ''};
  margin: ${props => props.margin ? props.margin : '0px'};
  font-weight: bold;
  padding: 5px;
  @media (min-width: 480px) {
    font-size: 1.25rem;
  }
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;
// HAUT DROITE BAS GAUCHE 

export const SubTitle = styled.h2`
text-shadow: ${props => props.textShadow === 'true' ? '1px 1px 2px rgba(73, 73, 73, 0.73)' : ''};
color: ${props => props.darkmode === 'true' ? 'rgba(255, 255, 255)' : 'rgb(0, 0, 0)'};
margin: ${props => props.margin ? props.margin : '20px'};
  font-weight: lighter;
  padding: 5px;
  @media (min-width: 480px) {
    font-size: 1.25rem;
  }
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.67rem;
  }
`;

export const PresentationTitle = styled.h3`
  text-shadow: ${props => props.textShadow === 'true' ? '1px 1px 2px rgba(73, 73, 73, 0.73)' : ''};
  color: ${props => props.darkmode === 'true' ? 'rgba(255, 255, 255)' : 'rgb(0, 0, 0)'};
  margin: ${props => props.margin ? props.margin : '20px'};
  font-weight: lighter;
  padding: ${props => props.padding ? props.padding : '5px'};
  @media (min-width: 480px) {
    font-size: 1rem;
  }
  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const Text = styled.p`
  color: ${props => props.darkmode === 'true' ? 'rgba(255, 255, 255)' : 'rgb(0, 0, 0)'};
  margin: ${props => props.margin ? props.margin : '0px 0px 40px 20px'};
  font-weight: lighter;
  padding: 5px;
  @media (min-width: 480px) {
    font-size: 0,8rem;
  }
  @media (min-width: 768px) {
    font-size: 1rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }
`;
