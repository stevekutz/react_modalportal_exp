import React, {useState} from 'react';
import {
    MainContainerDiv,
    ContainerDiv,
    MainModalContainerDiv,
    ModalButton,
    ModalContentContainer,
    ModalTextContent,

} from '..//styled/modal_styles';

const CustomModal = (props) => {
    // const [modalOpen, setModalOpen] = useState(false);
    // const [modalButtonText, setModalButtonText] = useState('Show');


    // const toggleModal = () => {
    //     setModalOpen(!modalOpen)
    
    //     {modalOpen ? setModalButtonText('Show') : setModalButtonText('Hide')}
    // }


    return (
        
    

        <MainContainerDiv>

                {props.modalOpen && 
                    <MainModalContainerDiv>
                        <ModalContentContainer>
                            <ModalTextContent> SOMETHING </ModalTextContent>
                            <ModalTextContent> SOMETHING </ModalTextContent>
                            <ModalTextContent> SOMETHING </ModalTextContent>
                            <ModalButton onClick = {props.toggleModal}> CLOSE that modal</ModalButton>
                        </ModalContentContainer>

                    
                    
                    </MainModalContainerDiv>
                
                }


            
        
        
        </MainContainerDiv>
        
    )



}

export default CustomModal;