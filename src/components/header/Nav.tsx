import styled from "styled-components"
import { Link } from "react-router-dom";


export const ContainerNav = styled.nav`
  align-items: center;
  max-width: 60%;
  width: 100%;
  margin-right: 2rem;
  display: flex;
  justify-content: space-around;
  a {
    color:rgb(250,250,250);
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



const Nav = ({ open } : {open:boolean}) => {
  return (
    <ContainerNav open={ open }>
     

        <Link  to='/client'>
          Cadastrar cliente
        </Link>

        <Link  to='/product'>
          Cadastrar Produto
        </Link>


        <Link 
          to='/colaborator'>
        Cadastrar colaborador
        </Link>     
    </ContainerNav>
  )
}

export default Nav