import React, { useContext } from 'react'
import styled from 'styled-components';
import provider from '../../context/context';
import Nav from './Nav';

const ConatinerHamburgue = styled.div`

  height: 2rem;
  margin-right: 2rem;  
  z-index: 20;
  display: none;
  @media (max-width: 550px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div{
    width: 2rem;
    
    height: 0.25rem;
    background-color: ${(({ open } : {open:boolean}) => open ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 1)')};
    transform-origin: 1px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    :nth-child(1) {
      transform: ${({open} : {open:boolean}) => open ?  'rotate(45deg)' : 'rotate(0)'};
    }
    :nth-child(2) {
      transform: ${({open}: {open:boolean}) => open ?  'translateX(100%)' : 'translateX(0)'};
      opacity: ${({open} : {open:boolean}) => open ?  0 : 1};
    }
    :nth-child(3) {
      transform: ${({open}) => open ?  'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Hamburgue:React.FC = () => {

   const { open, setOpen } = useContext(provider);

  return (
    <>
      <ConatinerHamburgue open={ open } onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </ConatinerHamburgue>
      <Nav open={ open } />
    </>
  ) 
}

export default Hamburgue;
