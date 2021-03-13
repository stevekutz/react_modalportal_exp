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
    border: 1px solid white;
    margin: 5 auto;
    padding: 10px;


`
const TextP = styled.p`
    textAlign: center;

`

const CustomButton = styled.button`
    border: 1px solid dodgerblue;
    background: snow;
    
    width: 60px;
    display: flex;
    justify-content: center;
    // text-align: center;
    border-radius: 10px;
    outline-style: none;

`


export {
    MainContainerDiv,
    ContainerDiv,
    TextP,
    CustomButton,

}