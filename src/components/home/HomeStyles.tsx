import styled from "styled-components";

export const ContainerMain = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;

  height: 50rem;
  justify-content: center;
  border: 1px solid black;
  background-color: rgb(239, 243, 243);
  p{
    margin-top:3rem;
  }
`;

export const SignUpBtn = styled.button`
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 2px;
    color: #fff;
    background-color: #337ab7;
    height:2rem;
    width:10rem;
    margin-top: 2rem;
     
    &:hover{
      opacity:0.5;
      cursor:pointer;
    } 
    box-shadow: 1px black;
  

`;


export const SignInBtn = styled.button`
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 2px;
    color: #fff;
    background-color: #033158;
    height:2rem;
    width:10rem;
   
    
    &:hover{
      opacity:0.5;
      cursor:pointer;
    } 
    box-shadow: 1px black;
  

`;






export const TextPhrase = styled.p `
    text-align:center;
    font-size: 22px;
    font-style: italic;
    margin-bottom: 40px;
    color: #a4a4a4;
`

export const DivSet = styled.div `

   display:flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin-top: -16rem;
`
 
