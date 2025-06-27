import styled from 'styled-components';

export const CartContainer = styled.div`
    background-color: ${props => (props.color)};
    padding: 15px;
    min-height: 100vh;
    position:relative;
    @media(min-width:768px){
        margin-top:10vh;
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
    @media(max-width:768px){
        margin: 10px 10px;
        padding:15px 2px;
    }
`
export const CartImg = styled.img`
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 8px;
    margin-right: 20px;
    margin-left: 20px;
    @media(max-width:768px){
        width:90px;
        height: 90px;
    }
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
    @media(max-width:768px){
        font-size:0.9rem;
        max-width:20px;
    }
`
export const CartDetailsBrand = styled.p`
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    color: #666666;
    margin: 10px 0 0 0;
    align-self: flex-start;
    @media(max-width:768px){
        font-size:0.8rem;
        msx-width:10px;
    }
`
export const CartPrice = styled.p`
    font-size: 1.2rem;
    font-family: 'Roboto';
    color:rgb(22, 99, 243);
    margin-left: auto;
    margin-right: 20px;
    @media(max-width:768px){
        font-size: 1.3rem;
        margin-left:10px;
    }
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
    @media(max-width:768px){
        font-size:0.9rem;
    }

`
export const Count = styled.p`
    font-size: 1.2rem;
    font-family: 'Roboto', sans-serif;
    color: ${props => (props.color)};
    margin: 0 0 0 10px;
    display: flex;
    align-items: center;
    @media(max-width:768px){
        font-size:1rem;
    }
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
    @media(max-width:768px){
        margin-left: 10px;
    }
`
export const CartDetailsContainer = styled.div`
    display: flex;
    position: absolute;
    align-self: flex-end;
    top: 0;
    width: 20%;
    right:-10;
    background-color: #f9f9f9;
    bottom: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    padding: 5px;
    border-radius: 8px;
    box-shadow: 1px 0px 8px rgb(86, 82, 82);
    @media(max-width:768px){
        flex-direction: row;
        width:50%;
        justify-content: space-around;
        bottom: -10;
    }
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

export const CrossRemoveButton = styled(Button)`
    background-color: transparent;
    margin-left: 50px;
    @media(max-width:768px){
        margin-left: 20px;
        }
`
