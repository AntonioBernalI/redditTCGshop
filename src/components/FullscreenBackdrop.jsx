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
    margin: 0 0 25px 0;
    line-height: 1.5;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    z-index: 1;
    position: relative;
`

const FullscreenButton = styled.button`
    background: linear-gradient(145deg, #ff5801, #ff4500);
    border: 3px solid #ff4500;
    border-radius: 20px;
    padding: 15px 30px;
    color: white;
    font-family: 'Overpass', sans-serif;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    cursor: pointer;
    box-shadow: 
        0 4px 8px rgba(0, 0, 0, 0.3),
        inset 0 2px 4px rgba(255, 255, 255, 0.3);
    transition: all 0.3s ease;
    margin: 10px;
    position: relative;
    z-index: 1;
    
    /* Button highlight */
    &::before {
        content: '';
        position: absolute;
        top: 3px;
        left: 6px;
        right: 6px;
        height: 40%;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 15px;
        opacity: 0.8;
    }
    
    &:hover {
        transform: translateY(-3px);
        background: linear-gradient(145deg, #ff6b2b, #ff5801);
        box-shadow: 
            0 6px 12px rgba(0, 0, 0, 0.4),
            inset 0 3px 6px rgba(255, 255, 255, 0.4);
    }
    
    &:active {
        transform: translateY(-1px);
        box-shadow: 
            0 3px 6px rgba(0, 0, 0, 0.3),
            inset 0 2px 4px rgba(255, 255, 255, 0.2);
    }
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

    const handleFullscreen = () => {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
        }
    };

    const handleDismiss = () => {
        setShowBackdrop(false);
    };

    return (
        <BackdropContainer $show={showBackdrop}>
            <MessageContainer>
                <MessageTitle>Screen Too Small</MessageTitle>
                <MessageText>
                    For the best Reddit TCG Shop experience, please open this page in fullscreen mode or use a larger screen.
                </MessageText>
                <FullscreenButton onClick={handleFullscreen}>
                    Open Fullscreen
                </FullscreenButton>
                <FullscreenButton onClick={handleDismiss}>
                    Continue Anyway
                </FullscreenButton>
            </MessageContainer>
        </BackdropContainer>
    );
};

export default FullscreenBackdrop;