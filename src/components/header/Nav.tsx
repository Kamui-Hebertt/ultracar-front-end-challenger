import styled from "styled-components"
import { Link } from "react-router-dom";

// import {  ConteinerLinks} from "./HeaderStyle";
export const ContainerNav = styled.nav`
  align-items: center;
  
   font-family: "Poppins";
  max-width: 40rem;
  width: 20rem;

/* justify-content: space-between; */

  display: flex;
  a {
   text-align: center;
 

    color:rgb(49, 45, 45);
    text-decoration: none;
    &:hover{
      opacity:0.5;
    }
  }


  @media (max-width: 550px){


    max-width: 100%;    
    flex-flow: column nowrap;
    background-color: rgb(23, 34 ,46);
    position: fixed;
    overflow: hidden;
    transform: ${({ open }: {open:boolean}) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    z-index: 1;
    margin-right: 0;
    height: 100%;
    width: 300px;
    padding: 3.5rem;
    transition: transform 0.3s ease-in-out;
    a {
      color:rgb(250,250,250);
      text-decoration: none;    
      &:hover{
        opacity:0.5;
      }

      
    }

    
  }
`;

export const DivCenter = styled.div `
margin-left: -14rem;
display:flex;
font-weight: 900;

justify-content: center;

@media (max-width: 900px){
  display:none;
}

`


const Nav = ({ open } : {open:boolean}) => {
  return (
    <ContainerNav open={ open }>
  
       
        <Link  to='/login'>
           <DivCenter>
            Login
          </DivCenter>  
        </Link>

        <Link  to='/client'>
      
          Cadastrar cliente
         
        </Link>

        <Link  to='/product'>
          Cadastrar Produto
        </Link>


        <Link 
          to='/collaborator'>
        Cadastrar colaborador
        </Link> 
       
   

    </ContainerNav>
  )
}

export default Nav