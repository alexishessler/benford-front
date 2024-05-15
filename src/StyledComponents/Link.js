import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  color: ${props => props.darkmode === 'true' ? '#546de5' : 'rgba(255, 255, 255)'};
  font-weight: bold;
  margin: 10px;
  padding: 0px;
  text-decoration: none;
`;

export const StyledBtnLink = styled(Link)`
  color: ${props => props.darkmode === 'true' ? '#546de5' : 'rgba(255, 255, 255)'};
  font-weight: 700;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : '#546de5'};
  display: inline-block;
  border-radius: 15px;
  box-shadow: 0px 1px 4px 0px rgba(73, 73, 73, 0.73);
  margin-bottom: 20px;
  border: 0px;
  text-align: center;
  text-decoration: none;
  font-size: 1.25rem;
  padding: 20px 20px 20px 40px;
  text-shadow: ${props => props.textShadow === 'true' ? '1px 1px 2px rgba(73, 73, 73, 0.73)' : ''};
`;