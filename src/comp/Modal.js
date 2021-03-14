import React, {useState, useEffect, useRef} from 'react';
import {
    MainContainerDiv,
    ContainerDiv,
    MainModalContainerDiv,
    ModalButton,
    ModalContentContainer,
    ModalTextContent,

} from '..//styled/modal_styles';

const CustomModal = (props) => {
    const [clickedOutside, setClickedOutside] = useState(false);
    const clickRef = useRef();

    const clickedOutside_handler = (e) => {
        if (!clickRef.current.contains(e.target)) {
            setClickedOutside(true)
            props.toggleModal();

        }
    };

    const clickedInside_handler = () => {
        setClickedOutside(false);
    }

    useEffect(() => {
            document.addEventListener('mousedown', clickedOutside_handler);

            // cleanup
            return () => document.removeEventListener('mousedown', clickedOutside_handler);
    
    });


    return (
        
    

        <MainContainerDiv>

                {props.modalOpen && 
                    <MainModalContainerDiv
                        ref = {clickRef} 
                        onClick = {clickedInside_handler}                    
                    >
                        <ModalContentContainer>
                            <ModalTextContent> SOMETHING </ModalTextContent>
                            <ModalTextContent> SOMETHING </ModalTextContent>
                            <ModalTextContent> SOMETHING </ModalTextContent>
                            <ModalButton 
                                onClick = {props.toggleModal}> CLOSE that modal</ModalButton>
                        </ModalContentContainer>

                    
                    
                    </MainModalContainerDiv>
                
                }


            
        
        
        </MainContainerDiv>
        
    )



}

export default CustomModal;