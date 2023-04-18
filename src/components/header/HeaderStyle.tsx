import styled from "styled-components";

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  
  height: 5rem;
  a: {
   
     
   
  }
  background-color: rgb(51, 122, 183);
  box-shadow: 1px  black;
  
`;

//  export const ConteinerLinks = styled.div`
//    border:1px solid black;
//    width: 20rem;
//  `
export const ImgLogo = styled.img`
  height: 3rem;
  margin-left: 2rem;
`;

export const ImgLogo2 = styled.img`
  height: 3rem;
margin-left: -29rem;
@media (max-width: 1313px) {
  display:none;
}
`;

export const MainLogo = styled.img`
  width:  45rem;
  margin-bottom: 15rem;

  height: 25rem;

  @media (max-width: 570px) {
  height: 20rem;
  width: 24rem;
 
 

}

@media (max-width: 360px) {
  height: 20rem;
  width: 17rem;
 
 

}
`;


