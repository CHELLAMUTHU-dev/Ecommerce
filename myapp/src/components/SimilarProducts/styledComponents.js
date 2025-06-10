import styled from 'styled-components';


export const SimilarProductsList = styled.li`
    margin-right: 35px;
    list-style-type: none;
    margin-bottom: 25px;
    @media (max-width: 768px) {
        margin-right: 15px;
    }
`

export const SimilarImage = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 10px;
`
export const SimilarTitle = styled.h1`
    font-size: 18px;
    color: ${props => props.color};
    font-family: 'Roboto';
    font-weight: 700;
`

export const SimilarPrice = styled.p`
    font-family: 'Roboto';
    font-size: 16px;
    color: ${props => props.color};
`
export const SimilarBrand = styled.p`
    font-family: 'Roboto';
    font-size: 15px;
    text-transform: uppercase;
    color: ${props => props.color};
`
export const SimilarRating = styled.p`
    font-family: 'Roboto';
    font-size: 15px;
    color: white;
    margin: 0px 5px 0px 0px;
`
export const SimilarAvailability = styled.p`
    font-family: 'Roboto';
    font-size: 15px;
    color: ${props => props.color};
`   
export const SimilarProductsRatingContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    background-color:rgb(30, 107, 249);
    padding: 4px 8px ;
    border-radius: 5px;
`
export const SimilarProductsRatingAndAvailable = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    justify-content: space-between;
`