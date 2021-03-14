import styled from 'styled-components';

const MainContainerDiv = styled.div`
    // border: 3px solid blue;
    width: 90%
    margin: 10px auto;
    background: darkslategrey;
    
    // height: 100vh;  // applying shift button in App from top to bottom

    display: flex;
    flex-direction: column;

`
const ContainerDiv = styled.div`
    height: 100vh;


`
const TextP = styled.p`
    textAlign: center;

`

const MainModalContainerDiv = styled.div`
    border: 1px solid deeppink;

    background: orange;
    margin: 0px auto;
    width: 400px;
    max-width: calc(100% - 400px);
    // max-height: calc(100% - 100px);
    height: 200px;


    //  with position NOT specified, Show /Hide moves top/buttom around modal     
    position: absolute;    // keeps App button in same location
    // position: relative;   // hides Hide button
    top: 150px;
    
    left: 100px;
    left: 25%;
    // left: calc((50% - 400px)/2)
    // // overflow: auto;

    // justifyContent: center;

    z-index: 10;

`

const ModalContentContainer = styled.div`
    border: 1px solid purple;
    display: flex;
    flex-direction: column;
    justify-content: center;

`

const ModalTextContent = styled.p`
    border: 1px solid white;
    text-align: center;
    padding: 10px;
    margin: 5px;


`

const ModalButton = styled.button`
    border: 1px solid green;
    background: lightgrey;
    color: seagreen;
    width: 50px;
    margin: 0 auto;
    outline-style: none;

`


export {
    MainContainerDiv,
    ContainerDiv,
    MainModalContainerDiv,
    ModalButton,
    ModalContentContainer,
    ModalTextContent,
};