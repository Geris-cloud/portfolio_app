import styled, { css } from 'styled-components'

export const Span = styled.span`
  ${props => props.one &&
    css`
    background-color: ${props => props.lng ? 'transparent' : 'rgba(255, 255, 255, 0.8)'};
    color: ${props => props.lng ? '#fff' : '#000'}
  `};
  ${props => props.two &&
    css`
    background-color: ${props => props.lng ? 'rgba(255, 255, 255, 0.8)' : 'transparent'};
    color: ${props => props.lng ? '#000' : '#fff'}
  `};
`;

export const State = styled.div`
  opacity: ${props => props.visible ? '1' : '0'};
  transition: opacity linear 1s;
`;

export const Main = styled.div`
  opacity: ${props => props.visible ? '1' : '0'};
  transition: opacity linear 1s 1s;
`;