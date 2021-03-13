import React, {useState} from 'react';
import {
    MainContainerDiv,
    MainModalContainerDiv,
    ModalButton,

} from '..//styled/modal_styles';

const CustomModal = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalButtonText, setModalButtonText] = useState('Show');


    const toggleModal = () => {
        setModalOpen(!modalOpen)
    
        {modalOpen ? setModalButtonText('Show') : setModalButtonText('Hide')}
    }


    return (
        
    

        <MainContainerDiv>
            <ModalButton onClick = {toggleModal}> {modalButtonText} </ModalButton>
            {modalOpen && 
                <MainModalContainerDiv>
                    SOMETHING
                
                
                </MainModalContainerDiv>
              
            }
            
        
        
        </MainContainerDiv>
        
    )



}

export default CustomModal;