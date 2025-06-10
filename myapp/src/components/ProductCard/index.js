import React from 'react';
import { FaStar } from "react-icons/fa";
import ThemeAndCartContext from '../../context/ThemeAndCartContext';
import {ProductLink,ProductCardContainer,ProductImage,ProductDetails,ProductTitle,ProductPrice,ProductBrand,ProductRatingContainer,ProductRating,ProductRatingStar,ProductPriceAndRatingContainer} 
from './styledComponents';

const ProductCard = ({ product }) => {
    const { isDarkTheme} = React.useContext(ThemeAndCartContext);
    const hoverColor = isDarkTheme ? 'rgb(200, 226, 243)' : 'rgb(182, 186, 181)';
    const activeColor = isDarkTheme ? ' #ffffff' : ' #000000';

    return (
        <ProductLink to={`/product/${product.id}`}>
            <ProductCardContainer color={hoverColor}>
                    <ProductImage src={product.imageUrl} alt={product.title} />
                    <ProductDetails>
                        <ProductTitle color={activeColor}>{product.title}</ProductTitle>
                        <ProductBrand color={activeColor}>by {product.brand}</ProductBrand>
                        <ProductPriceAndRatingContainer>
                            <ProductPrice color={activeColor}>&#8377; {product.price}/-</ProductPrice>
                                <ProductRatingContainer>
                                    <ProductRating > {product.rating}</ProductRating>
                                    <ProductRatingStar><FaStar/></ProductRatingStar>
                                </ProductRatingContainer>
                            </ProductPriceAndRatingContainer>   
                    </ProductDetails>
            </ProductCardContainer>
        </ProductLink>
    );

}
    
export default ProductCard;