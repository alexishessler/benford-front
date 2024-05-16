import { GoGraph } from "react-icons/go";
import { CiLinkedin } from "react-icons/ci";
import { FaExternalLinkAlt } from "react-icons/fa";

import styled from 'styled-components';

export const StyledGoGraph = styled(GoGraph)`
    color: ${props => props.darkmode === 'true' ? 'rgba(255, 255, 255)' : 'rgb(0, 0, 0)'};
`;

export const StyledLinkedin = styled(CiLinkedin)`
    color: ${props => props.darkmode === 'true' ? 'rgba(255, 255, 255)' : 'rgb(0, 0, 0)'};
`;

export const StyledLinkExternal = styled(FaExternalLinkAlt)`
    color: ${props => props.darkmode === 'true' ? 'rgba(255, 255, 255)' : 'rgb(0, 0, 0)'};
`;