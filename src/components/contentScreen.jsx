import { styled } from 'styled-components'

const ContentContainer = styled.div`
    width: 98%;
    height: 55%;
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
const FeaturedContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    z-index: 1;
    
    h2 {
        color: white;
        font-family: 'Overpass', sans-serif;
        font-size: 32px;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 2px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        margin: 0 0 30px 0;
        
        @media (max-width: 799px) {
            font-size: 24px;
            margin: 0 0 20px 0;
        }
    }
`

const CardSlotsContainer = styled.div`
    display: flex;
    gap: 30px;
    width: 100%;
    max-width: 800px;
    justify-content: center;
    
    @media (max-width: 799px) {
        flex-direction: column;
        gap: 20px;
        align-items: center;
    }
`

const CardSlot = styled.div`
    background: linear-gradient(145deg, #ff5801, #ff4500);
    border: 4px solid #ff4500;
    border-radius: 20px;
    padding: 20px;
    width: 280px;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    box-shadow: 
        0 6px 12px rgba(0, 0, 0, 0.4),
        inset 0 3px 6px rgba(255, 255, 255, 0.3),
        inset 0 -3px 6px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    cursor: pointer;
    
    /* Cartoon highlight */
    &::before {
        content: '';
        position: absolute;
        top: 8px;
        left: 12px;
        right: 12px;
        height: 25%;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 15px;
        opacity: 0.8;
    }
    
    &:hover {
        transform: translateY(-5px) scale(1.02);
        box-shadow: 
            0 8px 16px rgba(0, 0, 0, 0.5),
            inset 0 4px 8px rgba(255, 255, 255, 0.4),
            inset 0 -4px 8px rgba(0, 0, 0, 0.3);
    }
    
    @media (max-width: 799px) {
        width: 240px;
        height: 300px;
        padding: 15px;
    }
`

const CardImage = styled.div`
    width: 180px;
    height: 220px;
    background: linear-gradient(145deg, rgba(18, 103, 154, 0.9), rgba(18, 103, 154, 1));
    border: 3px solid rgba(18, 103, 154, 1);
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    position: relative;
    box-shadow: 
        0 4px 8px rgba(0, 0, 0, 0.3),
        inset 0 2px 4px rgba(255, 255, 255, 0.2);
    
    /* Card highlight */
    &::before {
        content: '';
        position: absolute;
        top: 5px;
        left: 8px;
        right: 8px;
        height: 30%;
        background: rgba(255, 255, 255, 0.15);
        border-radius: 10px;
        opacity: 0.8;
    }
    
    span {
        color: white;
        font-family: 'Overpass', sans-serif;
        font-size: 16px;
        font-weight: bold;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        z-index: 1;
    }
    
    @media (max-width: 799px) {
        width: 150px;
        height: 180px;
        margin-bottom: 12px;
        
        span {
            font-size: 14px;
        }
    }
`

const CardDescription = styled.div`
    color: white;
    font-family: 'Overpass', sans-serif;
    text-align: center;
    z-index: 1;
    
    h3 {
        font-size: 18px;
        font-weight: bold;
        margin: 0 0 8px 0;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        text-transform: uppercase;
        letter-spacing: 1px;
        
        @media (max-width: 799px) {
            font-size: 16px;
            margin: 0 0 6px 0;
        }
    }
    
    p {
        font-size: 14px;
        margin: 0;
        line-height: 1.3;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        opacity: 0.9;
        
        @media (max-width: 799px) {
            font-size: 12px;
        }
    }
`

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
    
    if (activeItem === 'Featured') {
        return (
            <ContentContainer>
                <FeaturedContent>
                    <h2>Featured Cards</h2>
                    <CardSlotsContainer>
                        <CardSlot>
                            <CardImage>
                                <span>Card Image</span>
                            </CardImage>
                            <CardDescription>
                                <h3>Snoo Champion</h3>
                                <p>A legendary card featuring Reddit's beloved mascot with incredible power!</p>
                            </CardDescription>
                        </CardSlot>
                        <CardSlot>
                            <CardImage>
                                <span>Card Image</span>
                            </CardImage>
                            <CardDescription>
                                <h3>Upvote Storm</h3>
                                <p>Unleash a powerful spell that boosts all your cards on the field!</p>
                            </CardDescription>
                        </CardSlot>
                    </CardSlotsContainer>
                </FeaturedContent>
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