import { styled } from 'styled-components';
import { useState, useEffect } from 'react';

const BackdropContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.95);
    display: ${props => props.$show ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    z-index: 10000;
    backdrop-filter: blur(10px);
`

const MessageContainer = styled.div`
    background: linear-gradient(145deg, rgba(18, 103, 154, 0.95), rgba(18, 103, 154, 1));
    border: 4px solid #ff5801;
    border-radius: 25px;
    padding: 40px;
    max-width: 500px;
    width: 90%;
    text-align: center;
    position: relative;
    box-shadow: 
        0 10px 20px rgba(0, 0, 0, 0.5),
        inset 0 4px 8px rgba(255, 255, 255, 0.2);
    
    /* Cartoon highlight */
    &::before {
        content: '';
        position: absolute;
        top: 8px;
        left: 15px;
        right: 15px;
        height: 25%;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 15px;
        opacity: 0.8;
    }
`

const MessageTitle = styled.h1`
    color: #ff5801;
    font-family: 'Overpass', sans-serif;
    font-size: 32px;
    font-weight: bold;
    margin: 0 0 20px 0;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    text-transform: uppercase;
    letter-spacing: 2px;
    z-index: 1;
    position: relative;
`

const MessageText = styled.p`
    color: white;
    font-family: 'Overpass', sans-serif;
    font-size: 18px;
    margin: 0;
    line-height: 1.5;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    z-index: 1;
    position: relative;
`

const FullscreenBackdrop = () => {
    const [showBackdrop, setShowBackdrop] = useState(false);

    useEffect(() => {
        const checkScreenHeight = () => {
            setShowBackdrop(window.innerHeight < 700);
        };

        // Check on mount
        checkScreenHeight();

        // Check on resize
        window.addEventListener('resize', checkScreenHeight);

        return () => {
            window.removeEventListener('resize', checkScreenHeight);
        };
    }, []);

    return (
        <BackdropContainer $show={showBackdrop}>
            <MessageContainer>
                <MessageTitle>Please Open Fullscreen Mode</MessageTitle>
                <MessageText>
                    For the best Reddit TCG Shop experience, please open this page in fullscreen mode or use a larger screen.
                </MessageText>
            </MessageContainer>
        </BackdropContainer>
    );
};

export default FullscreenBackdrop;