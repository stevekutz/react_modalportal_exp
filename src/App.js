import React, {useState, useEffect, useRef} from 'react';

import {
    MainContainerDiv,
    ContainerDiv,
    TextP,
    ExpPositionP,
    CustomButton,

} from './styled/app_styled';

import CustomModal from './comp/Modal';
import fillerText from './assets/text';


function App() {

    let modalButtonText = 'Show';

    const [modalOpen, setModalOpen] = useState(false);
    // const [modalButtonText, setModalButtonText] = useState('Show');
    const [showhideButtonClicked, setshowhideButtonClicked] = useState(false)
    const clickShowHideRef = useRef();

    const showHideClicked_handler = (e) => {
        if(clickShowHideRef.current.contains(e.target)) {
            setshowhideButtonClicked(true);
        } else {
            setshowhideButtonClicked(false);
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', showHideClicked_handler);

        // cleanup
        return () => document.removeEventListener('mousedown', showHideClicked_handler);
    
    })


    const toggleModal = () => {
        setModalOpen(!modalOpen)
    
        
    // Violates using Hook inside a conditional 
        //  {modalOpen ? setModalButtonText('Show') : setModalButtonText('Hide')}
    }


    modalOpen ? modalButtonText = 'Hide' : modalButtonText = 'Show';

    // if (modalOpen) {
    //     // setModalButtonText('Hide');
    //     modalButtonText = 'Hide'
    // } else {
    //     // setModalButtonText('Show');
    //     modalButtonText = 'Show'
    // }

    return (
        <MainContainerDiv>

        {/* 
            static(default: top, left, etc. & z-index have no effect)

        
        
        */}


        <div style = {{position: 'relative', zIndex: 9, top: 208, left: 100, background: 'white', margin: '0px auto'}}> INSIDE  </div>
            {modalOpen ? <CustomModal 
                            modalOpen = {modalOpen} 
                            setModalOpen = {setModalOpen}
                            toggleModal = {toggleModal}   
                            modalButtonText = {modalButtonText}
                            showhideButtonClicked = {showhideButtonClicked}
                        /> : null}
            <ContainerDiv>
                <CustomButton 
                    ref = {clickShowHideRef}
                    onClick = {toggleModal}> {modalButtonText} 
                </CustomButton>
            </ContainerDiv>
            
            <ContainerDiv>
                <ExpPositionP> Exp </ExpPositionP>
            </ContainerDiv>
            
            <TextP> {fillerText}</TextP>
        </MainContainerDiv>
    );
    }

export default App;

            // {modalOpen && 
            //     <CustomModal>
            //         SOMETHING
                
                
            //     </CustomModal>
                    
            // }