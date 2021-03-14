import React, {useState, useEffect, useRef} from 'react';
import {
    MainContainerDiv,
    ContainerDiv,
    MainModalContainerDiv,
    ModalButton,
    ModalContentContainer,
    ModalTextContent,

} from '..//styled/modal_styles';


// the useRef Hook is a function that returns a mutable ref object whose
// .cuurent property is initiuailized to the passed argument 


const CustomModal = (props) => {
    const [clickedOutside, setClickedOutside] = useState(false);
    const clickRefModal = useRef();

    const clickedOutside_handler = (e) => {
        console.log('clicked  OUTSIDE')
        
        if (!clickRefModal.current.contains(e.target) && !props.showhideButtonClicked) {
            setClickedOutside(true)
            // props.toggleModal();
            props.setModalOpen(false);
        }
    };

    const clickedInside_handler = () => {
        setClickedOutside(false);
    }

    useEffect(() => {
            document.addEventListener('mouseup', clickedOutside_handler);

            // cleanup
            return () => document.removeEventListener('mouseup', clickedOutside_handler);
    
    });


    return (
        
    

        <MainContainerDiv>

                {props.modalOpen && 
                    <MainModalContainerDiv
                        ref = {clickRefModal} 
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