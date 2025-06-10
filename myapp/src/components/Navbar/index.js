import Cookies from "js-cookie";
import ThemeAndCartContext from "../../context/ThemeAndCartContext";
import { FaAmazon ,FaHome ,FaShoppingCart,FaShoppingBag,FaMoon  } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { useNavigate } from "react-router-dom";



import {NavbarContainer,NavbarLogoContainer,NavbarLogo,NavbarText,Theme,NavItemList,NavLink,NavItem,Nav,NavBarBigScreen,NavbarMobile,LogoutButton} from './styledComponents'

const Navbar = () => {
    const navigate = useNavigate()
    return(
    <ThemeAndCartContext.Consumer>
        {value => {
            const {isDarkTheme,setTheme} = value
            const bgColor = isDarkTheme ? 'rgb(15, 14, 14)' : 'rgb(249, 248, 248)'
            const logoColor = isDarkTheme ? ' #ffffff' : 'rgb(38, 34, 34)'
            const textColor = isDarkTheme ? ' #ffffff' : ' #000000'
            const hoverColor = isDarkTheme ?  'rgb(211, 51, 51)' : 'rgb(8, 175, 235)'
            const themeLogo = isDarkTheme ? <MdOutlineLightMode color="white" size={23}/> : <FaMoon size={18}/>
            const onClickToggle = () => {
                setTheme()
            }
            // Function to handle logout
            const onClickLogout = () => {
                Cookies.remove('jwt_token')
                navigate('/login')
            }
            
            return(
                <NavbarContainer color={bgColor}>
                    <NavbarLogoContainer>
                        <NavbarLogo color={logoColor} type='button' onClick={() => navigate('/')}>
                            <FaAmazon/>
                        </NavbarLogo>
                        <NavbarText color={logoColor}>Amazon</NavbarText>
                    </NavbarLogoContainer>
                    <NavItemList>
                        <NavBarBigScreen>
                            <NavLink to='/'>
                                <NavItem>
                                    <Nav color={textColor} hover={hoverColor}>HOME</Nav>
                                </NavItem>
                            </NavLink>
                            <NavLink to='/product'>
                                <NavItem>
                                    <Nav color={textColor} hover={hoverColor}>PRODUCTS</Nav>
                                </NavItem>
                            </NavLink>
                            <NavLink to='/cart'>
                                <NavItem>
                                    <Nav color={textColor} hover={hoverColor}>CART</Nav>
                                </NavItem>
                            </NavLink>
                            <NavItem>
                                <LogoutButton onClick={onClickLogout} type='button'  >
                                        <Nav  style={{fontSize:'18px'}}>LOGOUT</Nav>
                                </LogoutButton>
                            </NavItem>
                        </NavBarBigScreen>
                        <NavbarMobile>
                            <NavLink to='/'>
                                <NavItem>
                                    <FaHome size={23} color={textColor}  />
                                </NavItem>
                            </NavLink>
                            <NavLink to='/product'>
                                <NavItem>
                                    <FaShoppingBag size={23} color={textColor} />
                                </NavItem>
                            </NavLink>
                            <NavLink to='/cart' >
                                <NavItem>
                                    <FaShoppingCart size={23} color={textColor} />
                                </NavItem>
                            </NavLink>
                            <NavItem>
                                <LogoutButton onClick={onClickLogout} type='button' >
                                            <MdLogout size={23} color={textColor}/>
                                </LogoutButton>
                            </NavItem>
                        </NavbarMobile>
                    </NavItemList>
                    <Theme type='button' onClick={onClickToggle}>
                        {themeLogo}
                    </Theme>
                </NavbarContainer>
            )
        }}
    </ThemeAndCartContext.Consumer>
)}

export default Navbar