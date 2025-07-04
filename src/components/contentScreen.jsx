import { styled } from 'styled-components'

const ContentContainer = styled.div`
    width: 98%;
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
        top: 8%;
        left: 8%;
        right: 8%;
        height: 12%;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 8px;
        opacity: 0.4;
    }
    
    @media (max-width: 799px) {
        height: 73%;
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

const WelcomeContent = styled.div`
    color: white;
    font-family: 'Overpass', sans-serif;
    text-align: center;
    z-index: 1;
    padding: 20px;
    max-width: 90%;
    
    h1 {
        font-size: 36px;
        font-weight: bold;
        margin: 0 0 20px 0;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        
        @media (max-width: 799px) {
            font-size: 24px;
            margin: 0 0 15px 0;
        }
    }
    
    p {
        font-size: 18px;
        margin: 0 0 25px 0;
        line-height: 1.4;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        
        @media (max-width: 799px) {
            font-size: 14px;
            margin: 0 0 20px 0;
            line-height: 1.3;
        }
    }
    
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        text-align: left;
        display: inline-block;
        
        li {
            font-size: 16px;
            margin: 12px 0;
            padding-left: 20px;
            position: relative;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
            
            &::before {
                content: '•';
                position: absolute;
                left: 0;
                color: #ff5801;
                font-weight: bold;
                font-size: 20px;
            }
            
            @media (max-width: 799px) {
                font-size: 12px;
                margin: 8px 0;
                padding-left: 15px;
                
                &::before {
                    font-size: 16px;
                }
            }
        }
    }
`
const ContentScreen = ({ activeItem }) => {
    if (!activeItem) {
        return (
            <ContentContainer>
                <WelcomeContent>
                    <h1>Welcome to the Reddit TCG Shop!</h1>
                    <p>Here, you can purchase individual cards or booster packs for your game.</p>
                    <ul>
                        <li>Click Featured to browse special highlights.</li>
                        <li>Click Cards to shop all available cards.</li>
                        <li>Click Packs to buy RedditTCG booster packs.</li>
                    </ul>
                </WelcomeContent>
            </ContentContainer>
        );
    }
    
    return (
        <ContentContainer>
            <ContentText>{activeItem}</ContentText>
        </ContentContainer>
    );
}

export default ContentScreen