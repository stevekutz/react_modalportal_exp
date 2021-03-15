import styled from 'styled-components';

const MainContainerDiv = styled.div`
    // border: 3px solid blue;
    width: 100%
    margin: 10px auto;
    background: darkslategrey;
    
    // height: 100vh;  // applying shift button in App from top to bottom

    display: flex;
    flex-direction: column;

`
const ContainerDiv = styled.div`
    height: 100vh;


`


const MainModalContainerDiv = styled.div`
    border: 5px solid deeppink;

    background: orange;
    margin: 0px auto;
    // max-width: 600px;
    // min-width: 50px;
    width: 600px;
    // max-width: calc(100% - 300px);
    // max-height: calc(100% - 100px);
    
    height: 200px;


    //  with position NOT specified, Show /Hide moves top/buttom around modal     
    position: absolute;    // keeps App button in same location
    // position: relative;   // hides Hide button
    // position: fixed;       // keeps App button in same location
    top: 150px;
    

    // CENTER the MODAL
    left: calc((100% - 600px)/2);  // L-R center the modal
    top: calc(50% - 100px);
    // // overflow: auto;

    // justifyContent: center;

    z-index: 10;

`

const ModalContentContainer = styled.div`
    border: 2px solid purple;
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
    width: 80px;
    margin: 0 auto;
    outline-style: none;
    margin: 1px auto;
    border-radius: 10px;

`


export {
    MainContainerDiv,
    ContainerDiv,
    MainModalContainerDiv,
    ModalButton,
    ModalContentContainer,
    ModalTextContent,
};