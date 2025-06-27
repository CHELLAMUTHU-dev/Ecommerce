import Navbar from '../Navbar';
import ThemeAndCartContext from '../../context/ThemeAndCartContext';
import { useNavigate } from 'react-router-dom';
import {HomeContainer,DetailContainer,DetailContainerHeading,DetailContainerPara,SwitchButton,Image} from './styledComponents'

const Home = () => {
    const navigate = useNavigate()

    return (
        <ThemeAndCartContext.Consumer>
            {value => {
                const {isDarkTheme} = value
                const themeColor = isDarkTheme ? 'rgb(19, 17, 17)' : ' #f9f9f9';
                const fontColor = isDarkTheme ? 'white' : 'black';
                const boxShadowColor = isDarkTheme ? ' #ffffff' : 'rgb(26, 205, 224)';
                const boxShadow = `0px 0px 20px 5px ${boxShadowColor}`;
                document.body.style.backgroundColor = themeColor;
                document.body.style.color = fontColor;
                return(
                    <>
                        <Navbar/>
                        <HomeContainer color={themeColor}> 
                            <DetailContainer>
                                <DetailContainerHeading>
                                    Products That Get You Noticed
                                </DetailContainerHeading>
                                <DetailContainerPara >
                                    Amazon is an e-commerce platform that sells a wide range of products including consumer electronics, beauty products, gourmet food, groceries, and health and personal care items. Your fashion makes you be seen and heard the way you are. So, celebrate the season's new and exciting fashion in your own way.
                                </DetailContainerPara>
                                <SwitchButton onClick={() => navigate('/product')}>
                                    Shop Now    
                                </SwitchButton>
                
                            </DetailContainer>
                                <Image src="https://i.pinimg.com/736x/8a/51/4f/8a514ff602d073554d102bf82f841c51.jpg" alt="amazon logo" color={boxShadow} />                        </HomeContainer>
                    </>
                )
            }}
        </ThemeAndCartContext.Consumer>
    )
}
export default Home;