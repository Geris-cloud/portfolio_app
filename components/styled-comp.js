import styled, { css } from 'styled-components'

export const Span = styled.span`
  ${props => props.one &&
    css`
    background-color: ${props => props.langFlag ? 'transparent' : 'rgba(255, 255, 255, 0.8)'};
    color: ${props => props.langFlag ? '#fff' : '#000'}
  `};
  ${props => props.two &&
    css`
    background-color: ${props => props.langFlag ? 'rgba(255, 255, 255, 0.8)' : 'transparent'};
    color: ${props => props.langFlag ? '#000' : '#fff'}
  `};
`;

export const State = styled.div`
  opacity: ${props => props.visible ? '1' : '0'};
  transition: opacity linear 1s;
`;

export const Main = styled.div`
animation: show 1s linear; 

@keyframes show {
  0% { opacity: 0}
  50% {opacity: 0.5}
  100% { opacity: 1}
}
`;