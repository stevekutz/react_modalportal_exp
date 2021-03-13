import styled from 'styled-components';

const MainContainerDiv = styled.div`
    border: 3px solid blue;
    width: 90%
    margin: 10 auto;
    background: darkslategrey;
    max-height: calc(100% - 150px);

    display: flex;
    flex-direction: column;

`

const MainModalContainerDiv = styled.div`
    border: 1px solid deeppink;

    background: orange;
    margin: 10px auto;
    max-width: 30%;
    max-height: calc(100% - 100px);
    
    display: flex;

    // justifyContent: center;





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
    MainModalContainerDiv,
    ModalButton,

};