import styled from 'styled-components'


export const HomeContainer = styled.div`
    display:flex;
    flex-direction: column;
    padding: 20px;
    height: 100%;
    overflow-y: auto;
    margin-top: 25vh;
    background-color: ${props => props.color};
    @media (min-width: 768px){
        flex-direction: row;
        padding: 10px;
        margin-top: 12vh;
    }
    @media (min-width: 1024px){
        padding: 70px;
        margin-top: 5vh;
    }
    @media (min-width: 1440px){
        padding: 100px;
        margin-top: 0vh;
    }
`
export const DetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    order: 1;
    align-items: flex-start;
    margin-bottom: 20px;
    @media (min-width: 768px){
        order: 0;
        width: 40%;
        padding: 50px;
    }
    @media (min-width: 1024px){
        width: 50%;
        padding: 40px;
    }
    @media (min-width: 1440px){
        width: 50%;
        padding: 20px 50px 0px 5px;
    }

`
export const DetailContainerHeading = styled.h1`
    font-family: 'Sans Serif';
    margin-top: 50px;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 20px;  
    @media (min-width: 768px){
        font-size: 37px;
        font-weight: 700;
    }
`
export const DetailContainerPara = styled.p`
    font-family: 'Roboto';
    font-size: 15px;
    @media (min-width: 768px){
        font-size: 22px;
    }
`

export const SwitchButton = styled.button`
    font-family: 'Roboto';
    font-size: 15px;
    background-color:hsl(220, 96.70%, 52.20%);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    outline: none;
    padding: 5px 10px 5px 10px;
    @media (min-width: 768px){
        padding: 8px 15px 8px 15px;
    }
    @media (min-width: 1024px){
        padding: 10px 20px 10px 20px;
    }
    
    &:hover{
        box-shadow: 0px 0px 10px 2px rgb(7, 195, 252);
    }

`
export const Image = styled.img`
    height: 300px;
    margin-top: 20px;
    border-radius: 15px;
    box-shadow: ${props => props.color};
    @media (min-width: 768px){
        height: 400px;
        width: 400px;
        margin-top: 50px;

    }
    @media (min-width: 1024px){
        height: 400px;
        width: 500px;
    }
    @media (min-width: 1440px){
        height: 500px;
        width: 600px;
    }
    @media (max-width: 768px){
        margin-top: 30px;
    }
`