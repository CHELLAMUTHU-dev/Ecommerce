import styled from 'styled-components';

export const CartContainer = styled.div`
    background-color: ${props => (props.color)};
    margin-top: 12vh;
    padding: 15px;
    height: 88vh;
`
export const CartHeading = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    color: ${props => (props.color)};
`
export const EmptyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 12vh;
`
export const EmptyPara = styled.p`
    font-size: 1.5rem;
    font-family: 'Roboto', sans-serif;
    color: ${props => (props.color)};
`
export const EmptyImg = styled.img`
    width: 300px;
    height: 300px;
    object-fit: cover;
`

export const CartItemContainer = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
`
export const CartItem = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px 50px;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 1px 0px 8px  ${props => (props.color)};
`
export const CartImg = styled.img`
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 8px;
    margin-right: 20px;
    margin-left: 20px;
`
export const RemoveContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    margin-top: 20px;
`
export const CartDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`
export const CartDetailsTitle = styled.h1`
    font-size: 1.3rem;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    color: ${props => (props.color)};
    align-self: flex-start;
`
export const CartDetailsBrand = styled.p`
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    color: #666666;
    margin: 10px 0 0 0;
    align-self: flex-start;
`
export const CartPrice = styled.p`
    font-size: 1.2rem;
    font-family: 'Roboto';
    color:rgb(22, 99, 243);
    margin-left: auto;
    margin-right: 20px;
`
export const Button = styled.button`
    color: white;
    border: none;
    padding: 2px 15px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    margin-left: 10px;
    display: flex;
    align-items: center;
    color: ${props => (props.color || 'white')};

`
export const Count = styled.p`
    font-size: 1.2rem;
    font-family: 'Roboto', sans-serif;
    color: ${props => (props.color)};
    margin: 0 0 0 10px;
    display: flex;
    align-items: center;
`
export const RemoveButton = styled.button`
    border: none;
    cursor: pointer;
    color: white;
    background-color:hsl(215, 81.00%, 52.50%);
    font-size: 1rem;
    margin-left: 50px;
    display: flex;
    align-items: center;
    padding: 5px 10px;
    border-radius: 6px; 
    font-family: 'Roboto'
`
export const CartDetailsContainer = styled.div`
    display: flex;
    position: sticky;
    top: 0;
    width: 20%;
    right: 0;
    left: 1150px;
    background-color: #f9f9f9;
    bottom: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    padding: 5px;
    border-radius: 8px;
    box-shadow: 1px 0px 8px rgb(86, 82, 82);
`
export const CartDetailsTotal = styled.p`
    font-size: 1.2rem;
    font-family: 'Roboto', sans-serif;
    color: rgb(22, 99, 243);
    margin: 0;
`
export const CartDetailsCount = styled.p`
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    color: #666666;
    margin: 5px 0 0 0;
`