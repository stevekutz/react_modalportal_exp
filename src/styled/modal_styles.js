import styled from 'styled-components';

const MainContainerDiv = styled.div`
    // border: 3px solid blue;
    width: 90%
    margin: 10 auto;
    background: darkslategrey;
    
    height: 100vh;

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
    // max-width: 50%;
    // max-height: calc(100% - 100px);
    height: 200px;

    position: absolute;
    top: 150px;
    left: 100px;
    // overflow: auto;

    // justifyContent: center;

    z-index: 10;



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

};