import styled from 'styled-components';
import themes from './themes.js';

const Conteiner = styled.div `
    display: flex;
    @media (max-width: 850px) {
        flex-direction: column;
    }
`;

const Header = styled.div `
    color: #fff;
    background-color: ${themes.darkBlack};
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
        font-family: Passion One;
        font-style: normal;
        font-weight: bold;
        letter-spacing: 0.05em;
    }

    p {
        font-family: Oswald;
        font-style: normal;
        font-weight: bold;
    }



    @media (min-width: 851px) {
        width: 65vw;
        height: 100vh; 
        padding: 0 0 0 10vw;
        
        h1 {
            font-size: 106px;
            line-height: 117px;
        }

        p {
            font-size: 43px;
            line-height: 64px;
            width: 442px;
        }
    }

    @media (max-width: 850px) {
        width: 100vw;
        height: 30vh; 
        justify-content: center;
        align-items: center;

        h1 {
            font-size: 76px;
            line-height: 84px;
        }

        p {
            font-size: 23px;
            width: 237px;
            line-height: 34px;
            text-align: center;
        }
    }
`;

const Content = styled.div `

    @media (max-width: 850px) {
        margin-top: 40px;
        width: 100vw;   
    }

    @media (min-width: 851px) {
        width: 35vw;   
    }

    display: flex;  
    align-items: center;
    justify-content: center;  
    flex-direction: column;  

    form {
        display: flex;
        flex-direction: column;
    }

    p {
        font-family: Lato;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        height: 24px;
        text-decoration-line: underline;
        color: #FFFFFF;
    }

    p:hover {
        cursor: pointer;
    }
`;

const Input = styled.input`
    @media (max-width: 850px) {
        width: 75vw;   
    }

    @media (min-width: 851px) {
        width: 27vw;   
    }

    height: 8vh;
    background: #FFFFFF;
    border-radius: 6px;
    margin-bottom: 13px;
    border: none;
    font-size: 27px;
    padding: 0 0 0 10px;

    ::placeholder {
        font-family: Oswald;
        font-style: normal;
        font-weight: 500;
        font-size: 27px;
        color: #9F9F9F;
    }
`;

const Button = styled.button`

    @media (max-width: 850px) {
        width: 75vw;   
    }

    @media (min-width: 851px) {
        width: 27vw;   
    }

    height: 8vh;
    background: #1877F2;
    border-radius: 6px;
    border: none;
    font-weight: bold;
    font-size: 25px;
    line-height: 40px;
    color: #fff;
    margin-bottom: 13px;
    
    :hover {
        cursor: pointer;
    }
`;

export {
    Conteiner,
    Header,
    Content,
    Input,
    Button,
}
