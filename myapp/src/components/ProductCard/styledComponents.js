import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`


export const ProductCardContainer = styled.li`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    width: 350px;
    flex-grow: 0;
    flex-shrink: 1;
    margin-right: 0px;
    border-radius: 6px;
        transform: translateY(10px);
    /* Animation will be triggered by adding a class */
    &.fade-in {
    }
    &:hover {
        box-shadow: 0px 0px 16px 1px ${props => props.color};
        transform: scale(1.01);
    }
    @media (min-width:900px) {
        margin-right: 15px;
        margin-bottom: 48px;
    }
    @media (max-width: 600px) {
        width: 100%;
        margin-right: 10px;
    }
    
`;



export const ProductImage = styled.img`
    width: 100%;
    max-height: 320px;
    border-radius: 6px;
`;

export const ProductDetails = styled.div`
    max-width: 150px;
    align-self: flex-start;
    margin-top: 18px;
    min-width: 100%;
    padding: 0 10px;
`;  

export const ProductTitle = styled.h1`
    font-size: 1.2em;
    margin-top: 0;
    color: ${props => props.color || '#000'};
`;
export const ProductBrand = styled.p`
font-size: 1em;
color: #666;
margin: 0 0 8px;
color: ${props => props.color || '#000'}; 
`;
export const ProductPrice = styled.p`
    font-size: 1.1em;
    color: #333;
    margin: 0 0 8px;
    color: ${props => props.color || '#000'};

`;

  export const ProductPriceAndRatingContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color:white ;

`  

export const ProductRatingContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color:rgb(49, 113, 242);
    padding: 6px 15px 6px 15px;
    border-radius: 4px;
    border: none;
    outline: none;
    margin-right: 20px;
    margin-bottom: 10px;
    
`
export const ProductRatingStar = styled.div`
    border: none;
    outline: none;
    margin-left: 5px;
    color:rgb(255, 243, 15);
`
export const ProductRating = styled.p`
    font-size: 1.1em;
    color: #666;
    color: white;
    margin: 0 ;
`;