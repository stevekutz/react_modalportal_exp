import React, {useState} from 'react';
import {
    MainContainerDiv,
    ContainerDiv,
    MainModalContainerDiv,
    ModalButton,

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
                        SOMETHING
                    
                    
                    </MainModalContainerDiv>
                
                }


            
        
        
        </MainContainerDiv>
        
    )



}

export default CustomModal;