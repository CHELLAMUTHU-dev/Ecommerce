import styled from 'styled-components'

export const SpecificProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    margin-top: 12vh;
    padding: 25px;
    background-color: ${props => props.color};
    @media (min-width: 768px){
        padding :55px 65px 45px 50px;
    }
`
export const SpecificLoader = styled.div`
    margin-top: 30vh;
    min-height: 100vh;
    align-self: center;
    `
export const SpecificContainer = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 768px){
        flex-direction: row;
    }
`
export const SpecificDetails = styled.div`
    display: flex;
    flex-direction: column;
`
export const SpecificImage = styled.img`
    height: 500px;
    width: 450px;
    margin-left:0'
    border-radius: 15px;
    margin-right: 30px;
`
export const SpecificRating = styled.p`
    font-family: 'Roboto';
    font-size: 25px;
`
export const SpecificViews = styled.div`
    display: flex;
    flex-direction: row;
    padding: 4px 8px ;
    align-items: center;
    margin-left: 40px;
`
export const Views = styled.p`
    font-family: 'Roboto';
    font-size: 18px;
    color: ${props => props.color};
    margin: 0px 0px 0px 5px;
`
export const Available = styled.p`
    font-family: 'Roboto';
    font-size: 15px;
    color: ${props => props.color};
    margin: 0 0px 10px 0px;
`
export const Brand = styled.p`
    font-family: 'Roboto';
    font-size: 15px;
    color: ${props => props.color};
    margin: 0;
`
export const Description = styled.p`
    font-family: 'Sans-serif';
    font-size: 23px;
    color: ${props => props.color};
    margin: 0px 0px 20px 0px;

`

export const BreakLine = styled.hr`
    border: 1px solid ${props => props.color};
    width: 100%;
    margin-top: 30px;
    margin-bottom: 30px;
`
export const AddToCartContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const AddCartController = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
`
export const AddCartControllerButton = styled.button`
    padding: 1px 15px;
    border-radius: 8px;
    border: none;
    outline: none;
    margin: 0px 15px ;
    font-size: 20px;
    font-family: 'Roboto';
    cursor: pointer;
    background-color: transparent;
    &:hover{
        background-color: rgba(0, 0, 0, 0.1);
    }
`
export const CartCount = styled.p`
    font-family: 'Roboto';
    font-size: 20px;
    color: ${props => props.color};
`
export const AddToCartButton = styled.button`
    padding: 5px 10px ;
    border: none;
    font-family: 'Roboto';
    border-radius: 8px;
    color: white;
    margin: 0 0 0 30px;
    background: linear-gradient(to right, #2abfff, #0071FF);
    position: relative;
    z-index: 0;
    cursor: pointer;
    &::after{
        content:'';
        background: linear-gradient(to right, #ffee00, #ffb300);
        width: 0;
        height: 100%;
        position: absolute;
        border-radius: 8px;
        left: 0;
        top: 0;
        z-index: -1;
        transition: 150ms ease-in-out;
    }
    &:hover::after{
        width: 100%;
    }
`

export const SpecificHeading = styled.h1`
    font-family: 'Roboto';
    font-size: 30px;
    color: ${props => props.color};
    margin: 0;
    margin-bottom: 20px;
`
export const SpecificPrice = styled.p`
    font-family: 'Roboto';
    font-size: 20px;
    color: ${props => props.color};
    margin: 0;
    margin-bottom: 20px;
`
export const SpecificContainerElement = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    
`

export const SpecificRatingElement = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: rgb(56, 124, 251);
    color: white;
    padding: 5px 8px;
    border-radius: 8px;
`

export const SimilarProductsContainer = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
    margin: 0;
`

  export const Error = styled.h1`
    color: ${props => props.color};
    margin-top: 30vh;
    font-size: 1.2rem;  
    text-align: center;
    `;