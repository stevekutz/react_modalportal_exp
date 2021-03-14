import styled from 'styled-components';

const MainContainerDiv = styled.div`
    // border: 3px solid blue;
    width: 90%
    
    margin: 10px auto;
    background: darkslategrey;
    
    height: 100vh;
    // height: 50px;
    // height: 100%;
    // position: absolute;
    position: relative;
    top: 0px;

    display: flex;
    flex-direction: column;

    z-index: 0;
`
const ContainerDiv = styled.div`
    border: 1px solid white;
    margin: 5px auto;
    padding: 10px;
    position: relative;
    z-index: 5;

`
const TextP = styled.p`
    border: 1px solid orange;
    background: lightgrey;
    position: fixed;
    margin: 20px;
    padding: 30px;
    
    textAlign: center;
    z-index: 2;
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

// Interesting botton positio =>   show at top, hide at bottom
// import styled from 'styled-components';

// const MainContainerDiv = styled.div`
//     // border: 3px solid blue;
//     width: 90%
    
//     margin: 10px auto;
//     background: darkslategrey;
    
//     height: 100vh;
//     // height: 50px;
//     // height: 100%;
//     // position: absolute;
//     position: relative;
//     top: 0px;

//     display: flex;
//     flex-direction: column;

//     z-index: 0;
// `
// const ContainerDiv = styled.div`
//     border: 1px solid white;
//     margin: 5px auto;
//     padding: 10px;
//     position: relative;
//     z-index: 5;

// `
// const TextP = styled.p`
//     border: 1px solid orange;
//     background: lightgrey;
//     position: fixed;
//     margin: 20px;
//     padding: 30px;
    
//     textAlign: center;
//     z-index: 2;
// `

// const CustomButton = styled.button`
//     border: 1px solid dodgerblue;
//     background: snow;
    
//     width: 60px;
//     display: flex;
//     justify-content: center;
//     // text-align: center;
//     border-radius: 10px;
//     outline-style: none;

// `


// export {
//     MainContainerDiv,
//     ContainerDiv,
//     TextP,
//     CustomButton,

// }