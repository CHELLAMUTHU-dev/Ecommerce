import {useState,useEffect,useCallback} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Cookie from 'js-cookie';
import { FaStar } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Navbar from '../Navbar';
import SimilarProducts from '../SimilarProducts'
import ThemeAndCartContext from '../../context/ThemeAndCartContext';
import {SpecificProductContainer,SpecificLoader,SpecificContainer,SpecificDetails,SpecificImage,SpecificContainerElement,SpecificHeading,SpecificPrice,Error
    ,SpecificRatingElement,SpecificRating,SpecificViews,Views,Description,Brand,Available,BreakLine,AddToCartContainer,AddCartController,AddCartControllerButton,CartCount,AddToCartButton,SimilarProductsContainer
} from './styledComponents'

const apiStatusConstants = {
    initial: 'INITIAL',
    inProgress: 'IN_PROGRESS',
    success: 'SUCCESS',
    failure: 'FAILURE',
}

const SpecificProduct = () => {

        const {id} = useParams();

        const [apiStatus, setApiStatus] = useState({
            status: apiStatusConstants.initial,
            product: {},
            similarProducts: [],
        });

        const [cartCount , setCartCount] = useState(1)

        const convertToCamelCase = (obj) => ({
            id: obj._id,
            imageUrl: obj.image_url,
            title: obj.title,
            price: obj.price,
            description: obj.description,
            brand: obj.brand,
            rating: obj.rating,
            availability: obj.availability,
            style: obj.style,
            totalReviews: obj.total_reviews,
        })

        const fetchProductDetails = useCallback(async () => {
            setApiStatus(prevState => ({
                ...prevState,
                status: apiStatusConstants.inProgress,
            }));

            try {
                const token = Cookie.get('jwt_token');
                const response = await axios.get(`http://localhost:3001/amazon/product_details/${id}`,{
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const {product_details} = response.data;

                setApiStatus({
                    status: apiStatusConstants.success,
                    product: convertToCamelCase(product_details),
                    similarProducts: product_details.similar_products.map(convertToCamelCase) || [],
                });
            } catch (error) {
                setApiStatus({
                    status: apiStatusConstants.failure,
                    product: {},
                    similarProducts: [],
                });
            }
        },[id]);
        
        useEffect(() => {
            fetchProductDetails();
        }, [fetchProductDetails]);

        return (
            <ThemeAndCartContext.Consumer>
                { value => {
                    const {isDarkTheme, addCartList } = value;
                    const {imageUrl, title, price, description, brand, rating, availability, totalReviews } = apiStatus.product;
                    const textColor = isDarkTheme ? ' #ffffff' : ' #000000'
                    const bgColor = isDarkTheme ? ' #000000' : ' #ffffff'
                    const lineColor = isDarkTheme ? 'rgba(39, 38, 38, 0.75)' : 'rgb(231, 223, 223)'
                    const color = isDarkTheme ? 'rgb(197, 203, 200)' : 'rgb(124, 125, 128)'
                    const {similarProducts} = apiStatus
                    const addToCart = () => {
                        const {product} = apiStatus
                        addCartList({...product,cartCount })
                    }
                    return(
                        <>  
                            <Navbar />
                            <SpecificProductContainer color={bgColor}>
                                {apiStatus.status === apiStatusConstants.inProgress && (
                                    <SpecificLoader>
                                        <Loader type="ThreeDots" color="blue" radius = "1" height={80} width={80} visible={true}/>
                                    </SpecificLoader>
                                )}
                                {apiStatus.status === apiStatusConstants.success && (
                                    <>
                                        <SpecificContainer>
                                            <SpecificImage src={imageUrl} alt={title} />
                                            <SpecificDetails>
                                                <SpecificHeading style={{color:textColor}}>{title}</SpecificHeading>
                                                <SpecificPrice style={{color:textColor}}>Rupees {price}/-</SpecificPrice>
                                                <SpecificContainerElement>
                                                    <SpecificRatingElement>
                                                        <SpecificRating style={{margin:"0px 3px" , fontFamily:'Roboto'}} >{rating}</SpecificRating>
                                                        <FaStar  style={{fontSize:'15px' , color:'rgb(249, 224, 64)'}}  />
                                                    </SpecificRatingElement>
                                                    <SpecificViews>
                                                        <MdOutlineRateReview color={isDarkTheme ? 'rgb(197, 203, 200)': 'rgb(124, 125, 128)'} size={'23px'}/>
                                                        <Views color={color}>{totalReviews} <span>views</span></Views>
                                                    </SpecificViews>
                                                </SpecificContainerElement>
                                                <Description color={color}>{description}</Description>
                                                <Available color={color}><span style={{fontWeight:'700',fontSize:'18px', color: isDarkTheme? ' #ffffff': "rgb(62, 60, 60)"}}>Available: </span> {availability}</Available>
                                                <Brand color={color}><span style={{fontWeight:'700',fontSize:'18px', color: isDarkTheme? ' #ffffff': "rgb(57, 53, 53)"}}>Brand: </span>{brand}</Brand>
                                                <AddToCartContainer>
                                                    <AddCartController>
                                                        <AddCartControllerButton style={{margin: '0px 15px 0px 0px', color : 'white' , background:'red'}}  type='button' onClick={()=> setCartCount(prevState => prevState - 1)}>-</AddCartControllerButton>
                                                        <CartCount color={textColor}>{cartCount}</CartCount>
                                                        <AddCartControllerButton style={{ color : 'white' , background:'green'}} type='button' onClick={()=> setCartCount(prevState => prevState + 1)}>+</AddCartControllerButton>
                                                    </AddCartController>
                                                    <AddToCartButton type='button' onClick={addToCart}>Add To Cart</AddToCartButton>
                                                </AddToCartContainer>
                                            </SpecificDetails>
                                        </SpecificContainer>
                                        <BreakLine color={lineColor}/>
                                        <SpecificHeading style={{fontSize: '45px' , color:textColor}} >Similar Products</SpecificHeading>
                                        <SimilarProductsContainer>
                                            {similarProducts.map(eachItem => <SimilarProducts key={eachItem.id} product={eachItem} />)}
                                        </SimilarProductsContainer>
                                    </>
                                )}
                                {apiStatus.status === apiStatusConstants.failure && (
                                    <div className="error-message">
                                        <Error color={color}>Failed to fetch product details. Please try again later.</Error>
                                    </div>
                                )}
                            </SpecificProductContainer>
                        </>
                    )
                }}
            </ThemeAndCartContext.Consumer>
        );
}

export default SpecificProduct;