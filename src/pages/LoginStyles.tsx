import styled from 'styled-components';

export const ConatinerContact = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 10rem;
  margin-top: 3rem;
 
`;

export const ContainerTitleDesc = styled.section`
  max-width: 1100px;
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  h1{
    margin-bottom: 1.5rem;
  }
`;

export const ContainerForm = styled.section`
  max-width: 900px;
  width: 100%;
  display: flex;
  padding: 1rem;
  align-items: center;
`;

export const ContainerInput = styled.div`
  display: flex;
  width: 100%;
  gap: 5px;
  @media (max-width: 500px) {
    flex-wrap: wrap;
    gap: 0.7rem;
  }
`;

export const Button = styled.input`
  width: 8rem;
  height: 3rem;
  font-size: 17px;
  /* border-radius: 1rem; */
  border: 1px solid #000;
  color: #000;
  font-weight: bold;
  background-color: rgb(239,239,239);
  :hover{
    transition: 800ms;
    background: none;
    color: rgb(239,239,239);
    background-color: #000;
    font-weight: bold;
  }
`;

export const SectionLogin = styled.section `

display:flex;
height:35rem;
width: 30rem;
justify-content: center;
flex-direction: column;
align-items: center;
button{
  margin-top:3rem;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    height: 3rem;
    width: 6rem;
    background-color: rgb(51, 122, 183);
    border:none;
    color: rgb(216, 238, 234);
  :hover{
    transition: 800ms;
    opacity: 0.5;
    cursor:pointer;
   
  }
}
p{
  text-align:center;

}
@media (max-width: 500px) {
   width: 20rem
   
  }

img{
  margin-top: 3rem;
  height: 17rem;
  width: 15rem;
}
`