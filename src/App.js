import React, {useState} from 'react';

import {
    MainContainerDiv,
    ContainerDiv,
    TextP,
    CustomButton,

} from './styled/app_styled';

import CustomModal from './comp/Modal';
import fillerText from './assets/text';


function App() {

    const [modalOpen, setModalOpen] = useState(false);
    const [modalButtonText, setModalButtonText] = useState('Show');

    const toggleModal = () => {
        setModalOpen(!modalOpen)
    
        {modalOpen ? setModalButtonText('Show') : setModalButtonText('Hide')}
    }

  return (
    <MainContainerDiv>

    <div style = {{position: 'fixed', zIndex: 9, top: 208, left: 100, background: 'white', margin: '0px auto'}}> INSIDE  </div>
        {modalOpen ? <CustomModal 
                        modalOpen = {modalOpen} 
                        toggleModal = {toggleModal}   
                     /> : null}
        <ContainerDiv>
            <CustomButton onClick = {toggleModal}> {modalButtonText} </CustomButton>
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