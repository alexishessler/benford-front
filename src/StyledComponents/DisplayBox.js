import styled from 'styled-components';

const DisplayBox = ({ className, children }) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
};
  
export const StyledDisplayBox = styled(DisplayBox)`
    background-color: ${props => props.darkmode === 'true' ? 'rgba(73, 73, 73, 0.73)' : 'rgba(255, 255, 255)'};
    min-height: ${props => props.minHeight ? props.minHeight : '40px'};
    padding: ${props => props.padding ? props.padding : '0px'};
    margin: ${props => props.margin ? props.margin : '0px'};
    width: ${props => props.width ? props.width : '100%'};
    box-shadow: 0px 2px 3px 0px rgba(73, 73, 73, 0.73);
    border-radius: 12px;
`;