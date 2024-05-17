import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  border: ${ (props) => {
      if(props.actionBtn){
        return "1px solid rgba(255, 255, 255)"
      }
      return '0px';
    }
  };
  background-color: ${ (props) => {
    if(props.actionBtn){
      return props.darkmode === 'true' ? "transparent" : '#FFFFFF'
    }
    return "transparent"
    }
  };
  color: ${ (props) => {
      if(props.actionBtn){
        return props.darkmode === 'true' ? "rgba(255, 255, 255)" : '#F48C06'
      }
      return props.darkmode === 'true' ? "#F48C06" : 'rgba(255, 255, 255)'
    }
  };
  
  font-weight: bold;
  margin: 10px;
  padding: 10px;
  text-decoration: none;

  border-radius: 15px;

`;

export const StyledBtnLink = styled(Link)`
  color: ${props => props.darkmode === 'true' ? '#F48C06' : 'rgba(255, 255, 255)'};
  font-weight: 700;
  background-color: ${ (props) => {
      return props.backgroundColor ? props.backgroundColor : '#F48C06'
    }
  };
  border: 0px;
  box-shadow: 0px 1px 4px 0px rgba(73, 73, 73, 0.73);
  
  display: inline-block;
  border-radius: 15px;
  margin-bottom: 20px;
  text-align: center;
  text-decoration: none;
  font-size: 1.25rem;
  padding: 20px 20px 20px 40px;
  text-shadow: ${props => props.textShadow === 'true' ? '1px 1px 2px rgba(73, 73, 73, 0.73)' : ''};
`;