import { styled } from 'styled-components'

const ContentContainer = styled.div`
    width: 99%;
    height: 58%;
    margin-top: 2%;
    background: rgba(18, 103, 154, 0.9);
    border-radius: 15px;
    border: 3px solid rgba(18, 103, 154, 1);
    box-shadow: 
        0 4px 8px rgba(0, 0, 0, 0.3),
        inset 0 2px 4px rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    
    /* Subtle highlight */
    &::before {
        content: '';
        position: absolute;
        top: 5%;
        left: 5%;
        right: 5%;
        height: 20%;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        opacity: 0.8;
    }
    
    @media (max-width: 799px) {
        height: 65%;
    }
`

const ContentText = styled.h2`
    color: white;
    font-family: 'Overpass', sans-serif;
    font-size: 48px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    margin: 0;
    z-index: 1;
    
    @media (max-width: 799px) {
        font-size: 32px;
        letter-spacing: 1px;
    }
`

const ContentScreen = ({ activeItem }) => {
    if (!activeItem) return null;
    
    return (
        <ContentContainer>
            <ContentText>{activeItem}</ContentText>
        </ContentContainer>
    )
}

export default ContentScreen