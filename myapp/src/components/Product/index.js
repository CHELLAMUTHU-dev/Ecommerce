import { useState,useEffect, useCallback,} from "react";
import Cookie                from "js-cookie";
import Loader                from "react-loader-spinner";
import axios                 from "axios";
import ProductCard from "../ProductCard";
import Navbar                from "../Navbar";
import { FaSearch } from "react-icons/fa";
import { MdSort } from "react-icons/md";
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import {ProductContainer,LoaderContainer,ProductList,ProductHeading,FilterContainer,ClearButton,SearchContainer,FilterGroup,ErrorMessage,FilterHeading,Error,FilterItems,NoProductsContainer, OptionElement, SelectElement} from './styledComponents';
import ThemeAndCartContext from "../../context/ThemeAndCartContext"

const apiStatusConstants = {
    initial   : 'INITIAL',
    success   : 'SUCCESS',
    failure   : 'FAILURE',
    inProgress: 'IN_PROGRESS',
}

const priceList = [
    {  
    id: 0,
    displayText: 'All',
    value: 0-10000000,
    },
    {
    id:1,
    displayText: '0-50',
    value: 0-50,
    },
    {
    id:2,
    displayText: '100-500',
    value: 100-500,
    },
    {
    id:3,
    displayText: '500-1000',
    value: 500-1000,
    },
    {
    id:4,
    displayText: '1000-2000',
    value: 1000-2000,
    },
    {
    id:5,
    displayText: '2000-5000',
    value: 2000-5000,
    },
    {
    id:6,
    displayText: '5000-10000',
    value: 5000-10000,
    },
    {
    id:7,
    displayText: '10000-20000',
    value: 10000-20000,
    },
    {
    id:8,
    displayText: '20000',
    value: 20000,
    },

]

const categoryList = [
    {id: 0,
    displayText: 'All', 
    value: 'false',
    },
    {
        id: 1,
        displayText: 'Electronics',
        value: 'electronics',
    },
    {
        id: 2,
        displayText: 'Clothes',
        value: 'clothes',
    },
    {
        id: 3,
        displayText: 'Appliances',
        value: 'appliances',
    },
    {
        id: 4,
        displayText: 'Grocery',
        value: 'grocery',
    }
    ,
    {
        id: 5,
        displayText: 'Toys',
        value: 'toys',
    },
]

const orderByList = [
    {
        id: 1,
        displayText: 'Price',
        value: 'price',
    },
    {
        id: 2,
        displayText: 'Rating',
        value: 'rating',
    },
    
]

const orderList = [
    {
        id: 1,
        displayText: 'Low to High',
        value: 'asc',
    },
    {
        id: 2,
        displayText: 'High to Low',
        value: 'desc',
    },
]


const Product = () => {
    const [apiStatus, setApiStatus] = useState({
        status : apiStatusConstants.initial,
        error  : null,
        product: []
    });
    const [category, setCategory] = useState('false')
    const [search, setSearch] = useState('')
    const [price, setPrice] = useState(priceList[0].value)
    const [orderBy, setOrderBy] = useState('price')
    const [order, setOrder] = useState('asc')

    const convertedFetchApi = (data) => ({
        id: data._id,
        title: data.title,
        price: data.price,
        brand: data.brand,
        imageUrl: data.image_url,   
        rating: data.rating,
        category: data.category,
    })

    const fetchApi = useCallback(async () => {
        const token = Cookie.get('jwt_token');
        setApiStatus({
            status : apiStatusConstants.inProgress,
            product: [],
            error  : null
        })
        await axios.get(`http://localhost:3001/amazon/products?orderBy=${orderBy}&order=${order}&category=${category}&search=${search}&price=${price}`,{
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        .then(response => {
                setApiStatus({
                    status : apiStatusConstants.success,
                    product: response.data.map(convertedFetchApi),
                    error  : null
                });
            })
        .catch(error => {
                setApiStatus({
                    status : apiStatusConstants.failure,
                    product: [],
                    error  : error.message
                });
            });
    }, [category, orderBy, order, price,search ]);

    const onChangeSearch = (event) => {
        setSearch(event.target.value);
    }

    const onChangeCategory = (e) => {
        setCategory(e.target.value)
    }
    const onChangePrice = (e) => {
        setPrice(e.target.value)
    }
    const onChangeOrderBy = (e) => {
        setOrderBy(e.target.value)
    }
    const onChangeOrder = (e) => {
        setOrder(e.target.value)
    }

    const clearFilter = () => {
        setCategory('false');
        setSearch('');
        setPrice(priceList[0].value);
        setOrderBy('price');
        setOrder('asc');
    }


    useEffect(() => {
        fetchApi();
    }
    , [fetchApi]);

        return (
        <ThemeAndCartContext.Consumer>
            {({isDarkTheme}) => {
                const bgColor = isDarkTheme ? ' #181818' : 'rgb(255, 255, 255)';
                const color = isDarkTheme ? ' #f9f9f9' : ' #181818'
                return (    
                    <>
                        <Navbar />
                        <ProductContainer color={bgColor}>
                            <ProductHeading>
                                PRODUCTS
                            </ProductHeading>
                            <FilterContainer>
                                    <SearchContainer>
                                        <input type='search' placeholder="Search" onChange={onChangeSearch} value={search}/>
                                        <FaSearch className="search" />
                                    </SearchContainer>
                                    <FilterItems>
                                    <FilterGroup color={color}>
                                        <p>Category</p>
                                        <SelectElement onChange={onChangeCategory} value={category} color={color} >
                                            {categoryList.map(eachItem => <OptionElement value={eachItem.value} color={color} background={bgColor} >{eachItem.displayText}</OptionElement>)}
                                        </SelectElement>
                                    </FilterGroup>
                                    <FilterGroup color={color}>
                                    <p>Filter by</p>
                                    <SelectElement value={orderBy} onChange={onChangeOrderBy} color={color}>
                                        {orderByList.map(eachItem => <OptionElement value={eachItem.value} color={color} background={bgColor}>{eachItem.displayText}</OptionElement>)}
                                    </SelectElement>
                                    </FilterGroup>
                                    <FilterGroup color={color}>
                                    <MdSort className="filter"/>
                                    <SelectElement value={order} onChange={onChangeOrder} color={color}>
                                        {orderList.map(eachItem => <OptionElement value={eachItem.value} color={color} background={bgColor}>{eachItem.displayText}</OptionElement>)}
                                    </SelectElement>
                                    </FilterGroup>
                                    <FilterGroup color={color}>
                                    <p>Price</p>
                                    <SelectElement value={price} onChange={onChangePrice} color={color}>
                                        {priceList.map(eachItem => <OptionElement value={eachItem.displayText} color={color} background={bgColor}>{eachItem.displayText}</OptionElement>)}
                                    </SelectElement>
                                    </FilterGroup>
                                    <ClearButton type="button" onClick={clearFilter}>Clear Filter</ClearButton>
                                    </FilterItems>
                                </FilterContainer>
                            {apiStatus.status === apiStatusConstants.inProgress &&
                                <LoaderContainer>
                                    <Loader
                                        height = "80" type = "ThreeDots" width = "80" color = "blue" radius = "1" visible = {true}
                                    />
                                </LoaderContainer>
                            }
                            {apiStatus.status === apiStatusConstants.success && (
                                <>
                                {apiStatus.product.length === 0 ? 
                                (<NoProductsContainer>
                                    <FilterHeading color={color}>No Products Found</FilterHeading>
                                    <button type="button" onClick={clearFilter}>Try New Filter</button>    
                                </NoProductsContainer>):
                                <ProductList>
                                    {apiStatus.product.map(eachItem => 
                                        <ProductCard key={eachItem.id} product={eachItem} />
                                    )}
                                </ProductList>}
                                </>
                            )}
                            {apiStatus.status === apiStatusConstants.failure && (
                                <>
                                <Error color={color}>Error: 404 {apiStatus.error}</Error>
                                <ErrorMessage color={color}>Reload the page __ or __ Try again later</ErrorMessage>
                                </>
                            )}
                        </ProductContainer>
                    </>
    )
            }}
        </ThemeAndCartContext.Consumer>
    )}

export default Product;