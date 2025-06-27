import styled from 'styled-components';


export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 20px;
  margin-top: 10vh;
  min-height: 90vh;
  background-color: ${props => props.color || '#f5f5f5'};
`;

export const ProductHeading = styled.h1`
  font-size: 1.9em;
  background: -webkit-linear-gradient(rgb(232, 14, 185),rgb(28, 199, 251));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;  margin: 5px 0 10px;
  width: 100%;
  ` ;

export const LoaderContainer = styled.div`
  margin-top: 30vh;
  min-height: 100vh;
  align-self: center;
`;

export const ProductList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  min-width: 100%;
  flex-wrap: wrap;
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 20px 20px;
  @media (max-width: 968px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const ClearButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  border-radius: 5px;
  margin-right: 20px;
  background-color:rgb(244, 239, 239);

  input[type='search'] {
    padding: 8px 5px 8px 15px;
    border-radius: 4px;
    background-color: transparent;
    outline: none;
    border: none;
    margin-right: 10px;
  }

  .search {
    cursor: pointer;
    margin-right: 10px;
    outline: none;
  }
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 20px;
  margin-left: 20px;
  color : ${props => props.color};
  @media (max-width:968px){
    margin: 10px 0px;
  }
  p {
    margin: 0;
    font-weight: bold;
  }

  select {
    padding: 8px;
    border-radius: 4px;
    background-color: transparent;
    outline: none;
    border: none;
    margin-top: 5px;
    color: ${props => props.color };
  }
  .filter {
    font-weight: bold;
  }
`;

export const FilterItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  color : ${props => props.color};
  
  @media (max-width:968px){
    margin: 10px 0px;
    flex-direction: column;
  }
`;


export const NoProductsContainer = styled.div`
  display: flex;  
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  margin-top: 20vh;
  
  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

export const FilterHeading = styled.h2`
    font-size: 1.5rem;
    color: ${props => props.color };
    margin: 10px 0;  `


    export const Error = styled.h1`
    color: ${props => props.color};
    margin-top: 30vh;
    font-size: 1.2rem;  
    text-align: center;
    `;
export const ErrorMessage = styled.p`
    color: ${props => props.color};
    text-align: center;
    font-size: 1rem;
    margin-top: 10px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
`;

export const SelectElement = styled.select`
  color: ${props => props.color};
  `
  export const OptionElement = styled.option`
  color: ${props => props.color};
  background: ${props => props.background};
`
