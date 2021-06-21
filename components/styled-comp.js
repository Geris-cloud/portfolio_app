import styled, { css } from 'styled-components';

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

export const Div = styled.div`
animation: rotate 15s linear infinite;
animation-play-state: ${props => props.active ? 'running' : 'paused'};

@keyframes rotate {
  0% {
    transform: rotate(0deg)
  }

  100% {
    transform: rotate(360deg);
  }
}
`;

export const Descr = styled.p`
background-color: ${props => props.tech ? 'rgba(50, 50, 50, 0.6)' : 'rgba(255, 255, 255, 0.6)'};
color: ${props => props.tech ? '#fff' : '#000'};
transition: 0.4s linear;
`;

export const Point = styled.div`
display: ${props => props.tech ? 'none' : 'block'}
`;

export const Name = styled.p`
display: ${props => props.tech ? 'none' : 'block'}
`;

export const Bgc = styled.div`
 background-size: ${props => props.tech ? 'contain' : '0px'};
`;