import styled, { css } from 'styled-components'

export const Span = styled.span`
  ${props => props.one &&
    css`
    background-color: ${props => props.lang ? 'transparent' : 'rgba(255, 255, 255, 0.8)'};
    color: ${props => props.lang ? '#fff' : '#000'}
  `};
  ${props => props.two &&
    css`
    background-color: ${props => props.lang ? 'rgba(255, 255, 255, 0.8)' : 'transparent'};
    color: ${props => props.lang ? '#000' : '#fff'}
  `};
`;

export const State = styled.div`
  opacity: ${props => props.visible ? 1 : 0};
  transition: opacity ease-in .5s;
`;

export const Main = styled.div`
  opacity: ${props => props.visible ? 1 : 0};
  transition: opacity ease-in 1s .5s;
`;

