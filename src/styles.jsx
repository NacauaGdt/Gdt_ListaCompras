import styled from "styled-components";

export const Container = styled.div`
  background: #a38802;
  padding: 20px;
  border-radius: 10px;

  h1{
    color: #fff;
  }

  input{
    height: 35px;
    border-radius: 5px;
    border: none;
    margin-top: 30px;
    outline: none;
    padding-left: 10px;
  }

`;

export const AddButton = styled.button`
  background: #fd9423;
  color: #000;
  height: 35px;
  padding: 5px 10px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  margin-left: 10px;

  &:hover{
    opacity: 0.8;
  }
`;

export const Product = styled.div `
display: flex;
justify-content: space-between;
height: 40px;
align-items: center;
background: #fff;
border-radius: 5px;
margin-top: 15px;
padding: 0 10px;

p{
  text-transform: capitalize;
  font-weight: bold;
}
`

export const TrashButton = styled.button `
background-color: transparent;
border: none;
cursor: pointer;
font-size: 20px
`


