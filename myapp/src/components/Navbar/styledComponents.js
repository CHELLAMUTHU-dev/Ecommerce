import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavbarContainer = styled.div`
    background-color: ${props => props.color};
    max-height: 10vh;
    width: 100%;
    display: flex;
    align-items: center;
    top: 0;
    padding-top: 5px;
    left: 0;
    position: fixed;
    z-index: 1000;
    border-bottom: 1px solid ${props => props.background === 'rgb(15, 14, 14)' ? 'rgb(148, 147, 147)' : 'rgb(196, 193, 193)'};
    @media (max-width: 768px) {
        padding-left: 10px;
        padding-right: 20px;
    }
    @media (min-width: 768px) {
        padding-left: 20px;
        padding-right: 20px;
    }

    @media (min-width: 1024px) {
        padding-left: 10px;
        padding-right: 30px;
    }
`

export const NavbarLogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 25px;
`
export const NavbarLogo = styled.button`
    color: ${props => props.color};
    font-size: 38px;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    @media(max-width:768px){
        font-size: 24px;
        }
    `
    
    export const NavbarText = styled.p`
    color: ${props => props.color};
    margin-left: 5px;
    font-size: 25px;
    font-weight: 700;
    font-family: 'Times New Roman';
    @media(max-width:768px){
        font-size:22px;
    }
`
export const NavItemList = styled.ul`
    display: flex;
    flex-direction: row;
    list-style-type: none;
    margin-left: 50px;
        @media (max-width:767px) and (min-width:576px){
            margin-left: 150px;
        }
        @media (max-width: 900px) and (min-width: 768px) {
            margin-left: 230px;
        }
        @media (max-width: 999px) and (min-width: 901px)   {
            margin-left: 350px;
        }
        @media (max-width: 1260px) and (min-width: 1000px){
            margin-left: 500px;
        }
        @media (min-width:1261px){
            margin-left: 930px;
        }
`
export const NavLink = styled(Link)`
    text-decoration: none;
`

export const NavItem = styled.li`
    margin: 1px 8px 1px 10px;
`
export const Nav = styled.p`
    font-family: 'Roboto';
    font-size: 13px;
    font-weight: 700;
    color: ${props => props.color};
    &:hover{
    color: ${props => props.hover};
    text-decoration: underline;
    }
`

export const NavBarBigScreen = styled.div`
    display: none;
    @media (min-width:768px){
        display:flex;
        align-items: center;
    }
`

export const NavbarMobile = styled.div`
    display: flex;
    @media (min-width: 768px){
        display: none;    
    }
`

export const Theme = styled.button`
    border: none;
    outline: none;
    cursor: pointer;
    background: transparent;
    margin-left: 2px;
    @media (max-width:768px){
        margin-right: 35px;
    }
`

export const LogoutButton = styled.button`
    background-color: transparent;
    background: -webkit-linear-gradient(rgb(255, 28, 244),rgb(237, 32, 1),rgb(22, 255, 1));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    margin-right: 5px;
    @media (max-width: 768px) {
        margin-left: 10px;
    }
    &:hover{
        background: -webkit-linear-gradient(rgb(90, 207, 240),rgb(243, 19, 168));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`
