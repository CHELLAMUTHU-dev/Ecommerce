import {SimilarProductsList,SimilarImage,SimilarTitle,SimilarPrice,SimilarRating,SimilarAvailability,
SimilarProductsRatingContainer,SimilarBrand,SimilarProductsRatingAndAvailable} from './styledComponents'
import ThemeAndCartContext from '../../context/ThemeAndCartContext'
import { FaStar } from "react-icons/fa";


const SimilarProducts = (props) => {
    const {product} = props
    const {imageUrl,title,price,brand,rating,availability} = product

    return (
        <ThemeAndCartContext.Consumer>
            { value => {
                const {isDarkTheme} = value
                const textColor = isDarkTheme ? ' #f9f9f9' : ' #1e293b'
                return <SimilarProductsList isDarkTheme={isDarkTheme}>
                    <SimilarImage src={imageUrl} alt={title} />
                    <SimilarTitle color={textColor}>{title}</SimilarTitle>
                    <SimilarPrice color={textColor}>Rupees {price}/-</SimilarPrice>
                    <SimilarBrand color={textColor}><span style={{textTransform:'none'}}>Brand: </span> {brand}</SimilarBrand>
                    <SimilarProductsRatingAndAvailable>
                    <SimilarAvailability color={textColor}>{availability}</SimilarAvailability>
                    <SimilarProductsRatingContainer>
                        <SimilarRating>{rating}</SimilarRating>
                        <FaStar style={{fontSize:'15px', color: isDarkTheme ? '#fbbf24' : '#f59e0b'}} />
                    </SimilarProductsRatingContainer>
                    </SimilarProductsRatingAndAvailable>
                </SimilarProductsList>
            }}
        </ThemeAndCartContext.Consumer>
    )

}

export default SimilarProducts