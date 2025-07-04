import { styled } from 'styled-components'
import { useState } from 'react'
import { useEffect } from 'react'
import DevvitMessenger from '../utils/DevvitMessenger'
import spezCard from '../assets/spez.png'
import ghostsnooCard from '../assets/ghostsnoo.png'
import bloodyprizeCard from '../assets/bloodyprize.png'
import everythingCard from '../assets/everything.png'
import sobreCard from '../assets/sobre.png'

const ToastNotification = styled.div`
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(145deg, #32cd32, #228b22);
    border: 3px solid #228b22;
    border-radius: 15px;
    padding: 15px 25px;
    color: white;
    font-family: 'Overpass', sans-serif;
    font-size: 16px;
    font-weight: bold;
    box-shadow: 
        0 6px 12px rgba(0, 0, 0, 0.4),
        inset 0 2px 4px rgba(255, 255, 255, 0.3);
    z-index: 10000;
    transform: translateX(${props => props.$show ? '0' : '100%'});
    opacity: ${props => props.$show ? '1' : '0'};
    transition: all 0.3s ease;
    max-width: 300px;
    
    /* Toast highlight */
    position: relative;
    &::before {
        content: '';
        position: absolute;
        top: 3px;
        left: 6px;
        right: 6px;
        height: 40%;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 10px;
        opacity: 0.8;
    }
    
    @media (max-width: 799px) {
        top: 15px;
        right: 15px;
        font-size: 14px;
        padding: 12px 20px;
        max-width: 250px;
    }
`

const ContentContainer = styled.div`
    width: 98%;
    height: 60%;
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
    overflow-y: auto;
    
    /* Custom scrollbar styling */
    &::-webkit-scrollbar {
        width: 12px;
    }
    
    &::-webkit-scrollbar-track {
        background: rgba(18, 103, 154, 0.3);
        border-radius: 10px;
        border: 2px solid rgba(18, 103, 154, 0.5);
    }
    
    &::-webkit-scrollbar-thumb {
        background: linear-gradient(145deg, #ff5801, #ff4500);
        border-radius: 10px;
        border: 2px solid #ff4500;
        box-shadow: 
            0 2px 4px rgba(0, 0, 0, 0.3),
            inset 0 1px 2px rgba(255, 255, 255, 0.3);
    }
    
    &::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(145deg, #ff6b2b, #ff5801);
        box-shadow: 
            0 3px 6px rgba(0, 0, 0, 0.4),
            inset 0 2px 4px rgba(255, 255, 255, 0.4);
    }
    
    &::-webkit-scrollbar-thumb:active {
        background: linear-gradient(145deg, #ff4500, #e63900);
    }
    
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
        align-items: center;
        justify-content: center;
        
        /* Mobile scrollbar styling */
        &::-webkit-scrollbar {
            width: 8px;
        }
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

const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    backdrop-filter: blur(5px);
`

const ModalContent = styled.div`
    background: linear-gradient(145deg, rgba(18, 103, 154, 0.95), rgba(18, 103, 154, 1));
    border: 4px solid rgba(18, 103, 154, 1);
    border-radius: 25px;
    padding: 30px;
    max-width: 500px;
    width: 90%;
    max-height: 70vh;
    overflow-y: auto;
    position: relative;
    box-shadow: 
        0 10px 20px rgba(0, 0, 0, 0.5),
        inset 0 4px 8px rgba(255, 255, 255, 0.2);
    
    /* Custom scrollbar styling */
    &::-webkit-scrollbar {
        width: 12px;
    }
    
    &::-webkit-scrollbar-track {
        background: rgba(18, 103, 154, 0.3);
        border-radius: 10px;
        border: 2px solid rgba(18, 103, 154, 0.5);
    }
    
    &::-webkit-scrollbar-thumb {
        background: linear-gradient(145deg, #ff5801, #ff4500);
        border-radius: 10px;
        border: 2px solid #ff4500;
        box-shadow: 
            0 2px 4px rgba(0, 0, 0, 0.3),
            inset 0 1px 2px rgba(255, 255, 255, 0.3);
    }
    
    &::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(145deg, #ff6b2b, #ff5801);
        box-shadow: 
            0 3px 6px rgba(0, 0, 0, 0.4),
            inset 0 2px 4px rgba(255, 255, 255, 0.4);
    }
    
    &::-webkit-scrollbar-thumb:active {
        background: linear-gradient(145deg, #ff4500, #e63900);
    }
    
    /* Modal highlight */
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
    
    @media (max-width: 799px) {
        padding: 20px;
        max-width: 350px;
        max-height: 60vh;
        
        /* Mobile scrollbar styling */
        &::-webkit-scrollbar {
            width: 8px;
        }
    }
`

const CloseButton = styled.button`
    position: absolute;
    top: 15px;
    right: 15px;
    background: linear-gradient(145deg, #ff5801, #ff4500);
    border: 2px solid #ff4500;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    color: white;
    font-family: 'Overpass', sans-serif;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 
        0 3px 6px rgba(0, 0, 0, 0.3),
        inset 0 1px 2px rgba(255, 255, 255, 0.3);
    transition: all 0.2s ease;
    z-index: 2;
    
    &:hover {
        transform: scale(1.1);
        background: linear-gradient(145deg, #ff6b2b, #ff5801);
    }
    
    &:active {
        transform: scale(0.95);
    }
    
    @media (max-width: 799px) {
        width: 35px;
        height: 35px;
        font-size: 16px;
        top: 10px;
        right: 10px;
    }
`

const ModalCardImage = styled.div`
    width: 200px;
    height: 280px;
    background: linear-gradient(145deg, rgba(255, 88, 1, 0.9), rgba(255, 69, 0, 1));
    border: 4px solid rgba(255, 69, 0, 1);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px auto;
    position: relative;
    box-shadow: 
        0 6px 12px rgba(0, 0, 0, 0.4),
        inset 0 3px 6px rgba(255, 255, 255, 0.2);
    
    /* Card highlight */
    &::before {
        content: '';
        position: absolute;
        top: 8px;
        left: 12px;
        right: 12px;
        height: 30%;
        background: rgba(255, 255, 255, 0.15);
        border-radius: 15px;
        opacity: 0.8;
    }
    
    span {
        color: white;
        font-family: 'Overpass', sans-serif;
        font-size: 24px;
        font-weight: bold;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        z-index: 1;
    }
    
    @media (max-width: 799px) {
        width: 160px;
        height: 220px;
        margin-bottom: 15px;
        
        span {
            font-size: 18px;
        }
    }
`

const ModalCardDetails = styled.div`
    color: white;
    font-family: 'Overpass', sans-serif;
    text-align: center;
    z-index: 1;
    
    h2 {
        font-size: 28px;
        font-weight: bold;
        margin: 0 0 15px 0;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        text-transform: uppercase;
        letter-spacing: 2px;
        color: #ffd700;
        
        @media (max-width: 799px) {
            font-size: 22px;
            margin: 0 0 12px 0;
            letter-spacing: 1px;
        }
    }
    
    .price {
        font-size: 24px;
        font-weight: bold;
        color: #32cd32;
        margin: 10px 0;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        
        @media (max-width: 799px) {
            font-size: 20px;
        }
    }
    
    .description {
        font-size: 16px;
        line-height: 1.5;
        margin: 15px 0 20px 0;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        opacity: 0.9;
        
        @media (max-width: 799px) {
            font-size: 14px;
            margin: 12px 0 15px 0;
        }
    }
    
    .stats {
        background: rgba(0, 0, 0, 0.2);
        border-radius: 15px;
        padding: 15px;
        margin: 15px 0;
        
        h3 {
            font-size: 18px;
            margin: 0 0 10px 0;
            color: #ffd700;
            text-transform: uppercase;
            letter-spacing: 1px;
            
            @media (max-width: 799px) {
                font-size: 16px;
            }
        }
        
        .stat-row {
            display: flex;
            justify-content: space-between;
            margin: 8px 0;
            font-size: 14px;
            
            @media (max-width: 799px) {
                font-size: 12px;
            }
            
            .stat-label {
                font-weight: bold;
            }
            
            .stat-value {
                color: #ff5801;
                font-weight: bold;
            }
        }
    }
`

const ModalBuyButton = styled.button`
    background: linear-gradient(145deg, #32cd32, #228b22);
    border: 3px solid #228b22;
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
    margin-top: 20px;
    width: 100%;
    
    /* Button highlight */
    position: relative;
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
        background: linear-gradient(145deg, #3cb371, #2e8b57);
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
    
    @media (max-width: 799px) {
        font-size: 16px;
        padding: 12px 24px;
        letter-spacing: 1px;
    }
`

const FeaturedContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    z-index: 1;
`

const InnerContainer = styled.div`
    width: 100%;
    height: 120%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media (max-width: 799px) {
        height: 150%;
    }
`

const CardSlotsContainer = styled.div`
    display: flex;
    gap: 30px;
    width: 100%;
    max-width: 500px;
    justify-content: center;
    align-items: center;
    
    @media (max-width: 799px) {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 25px;
        align-items: center;
        max-width: 400px;
        justify-content: space-around;
    }
`

const CardSlot = styled.div`
    background: linear-gradient(145deg, #ff5801, #ff4500);
    border: 4px solid #ff4500;
    border-radius: 20px;
    padding: 16px;
    width: 200px;
    height: 280px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
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
        width: 160px;
        height: 220px;
        padding: 12px;
        
        /* First two cards in first row */
        &:nth-child(1), &:nth-child(2) {
            flex-basis: calc(50% - 12.5px);
        }
        
        /* Third card in second row, centered */
        &:nth-child(3) {
            flex-basis: 160px;
            margin: 0 auto;
        }
    }
`

const PriceTag = styled.div`
    position: absolute;
    top: -8px;
    right: -8px;
    background: linear-gradient(145deg, #ffd700, #ffb300);
    border: 3px solid #ff8c00;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 
        0 4px 8px rgba(0, 0, 0, 0.4),
        inset 0 2px 4px rgba(255, 255, 255, 0.3);
    z-index: 2;
    
    span {
        color: #8b4513;
        font-family: 'Overpass', sans-serif;
        font-size: 14px;
        font-weight: bold;
        text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
    }
    
    @media (max-width: 799px) {
        width: 50px;
        height: 50px;
        top: -6px;
        right: -6px;
        
        span {
            font-size: 11px;
        }
    }
`

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    justify-content: center;
`

const CardImage = styled.div`
    width: 160px;
    height: 200px;
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
        font-size: 18px;
        font-weight: bold;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        z-index: 1;
    }
    
    @media (max-width: 799px) {
        width: 130px;
        height: 160px;
        margin-bottom: 10px;
        
        span {
            font-size: 14px;
        }
    }
`

const ClickLabel = styled.div`
    color: white;
    font-family: 'Overpass', sans-serif;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    opacity: 0.8;
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    
    @media (max-width: 799px) {
        font-size: 10px;
        margin-bottom: 6px;
    }
`

const BuyButton = styled.button`
    background: linear-gradient(145deg, #32cd32, #228b22);
    border: 3px solid #228b22;
    border-radius: 15px;
    padding: 8px 16px;
    color: white;
    font-family: 'Overpass', sans-serif;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    box-shadow: 
        0 3px 6px rgba(0, 0, 0, 0.3),
        inset 0 1px 2px rgba(255, 255, 255, 0.3);
    transition: all 0.2s ease;
    margin-top: 8px;
    
    /* Button highlight */
    position: relative;
    &::before {
        content: '';
        position: absolute;
        top: 2px;
        left: 4px;
        right: 4px;
        height: 40%;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 10px;
        opacity: 0.8;
    }
    
    &:hover {
        transform: translateY(-2px);
        background: linear-gradient(145deg, #3cb371, #2e8b57);
        box-shadow: 
            0 5px 10px rgba(0, 0, 0, 0.4),
            inset 0 2px 4px rgba(255, 255, 255, 0.4);
    }
    
    &:active {
        transform: translateY(0px);
        box-shadow: 
            0 2px 4px rgba(0, 0, 0, 0.3),
            inset 0 1px 2px rgba(255, 255, 255, 0.2);
    }
    
    @media (max-width: 799px) {
        font-size: 11px;
        padding: 6px 12px;
        margin-top: 6px;
    }
`

const ContentScreen = ({ activeItem, money, updateMoney }) => {
    const [selectedCard, setSelectedCard] = useState(null);
    const [toast, setToast] = useState('');
    const [showToast, setShowToast] = useState(false);
    
    const cardData = {
        'ghostsnoo': {
            name: 'Ghost Snoo',
            image: ghostsnooCard,
            price: '300$k',
            description: 'A mysterious spectral version of Reddit\'s beloved mascot. This ghostly Snoo haunts the digital realm with ethereal powers, striking with supernatural precision despite its fragile form.',
            stats: {
                'Attack': '160',
                'HP': '1',
                'Rarity': '★ Rare'
            }
        },
        'spez': {
            name: 'Spez',
            image: spezCard,
            price: '300$k',
            description: 'The legendary CEO and co-founder of Reddit himself! Steve "Spez" Huffman brings balanced leadership to the battlefield with steady damage and reliable health stats.',
            stats: {
                'Damage': '70',
                'HP': '70',
                'Rarity': '★ Rare'
            }
        },
        'bloodyprize': {
            name: 'Bloody Prize',
            image: bloodyprizeCard,
            price: '400$k',
            description: 'A dark and mysterious reward earned through intense Reddit battles. This blood-stained trophy represents the ultimate sacrifice and victory in the most brutal of online conflicts.'
        },
        'everything': {
            name: 'Everything',
            image: everythingCard,
            price: '1000$k',
            description: 'The ultimate Reddit experience condensed into a single card. This represents the collective knowledge, memes, discussions, and chaos that encompasses everything Reddit has to offer.'
        },
        'pack': {
            name: 'Pack',
            image: sobreCard,
            price: '500$k',
            description: 'A premium booster pack containing 5 random cards from the Reddit TCG collection. Each pack guarantees at least one rare card and offers the chance to discover powerful legendary cards for your deck.'
        }
    };
    
    const handleCardClick = (cardId) => {
        setSelectedCard(cardId);
    };
    
    const handleCloseModal = () => {
        setSelectedCard(null);
    };
    
    const handlePurchase = (cardId) => {
        const cardName = cardData[cardId].name;
        const cardPrice = parseFloat(cardData[cardId].price.replace('$k', ''));
        
        // Generate cardSlug: lowercase name with spaces removed
        const cardSlug = cardName.toLowerCase().replace(/\s+/g, '');
        
        // Check if money is a number and sufficient for purchase
        if (typeof money === 'number' && money >= cardPrice) {
            // Update money locally by subtracting the purchase price
            updateMoney(money - cardPrice);
            
            DevvitMessenger.sendPurchase(cardSlug, cardPrice);
            setToast(`${cardName} purchased`);
            setShowToast(true);
            setSelectedCard(null);
            
            setTimeout(() => {
                setShowToast(false);
                setTimeout(() => setToast(''), 300);
            }, 3000);
        } else if (typeof money !== 'number') {
            setToast("Please wait, loading balance...");
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
                setTimeout(() => setToast(''), 300);
            }, 3000);
        } else {
            setToast("Insufficient funds");
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
                setTimeout(() => setToast(''), 300);
            }, 3000);
        }
    };

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
                    <InnerContainer>
                        <CardSlotsContainer>
                            <CardSlot onClick={() => handleCardClick('ghostsnoo')}>
                                <PriceTag>
                                    <span>300$k</span>
                                </PriceTag>
                                <CardContent>
                                    <CardImage>
                                        <img 
                                            src={ghostsnooCard} 
                                            alt="Ghost Snoo"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'contain',
                                                borderRadius: '12px'
                                            }}
                                        />
                                    </CardImage>
                                </CardContent>
                                <BuyButton>Buy Now</BuyButton>
                            </CardSlot>
                            <CardSlot onClick={() => handleCardClick('spez')}>
                                <PriceTag>
                                    <span>300$k</span>
                                </PriceTag>
                                <CardContent>
                                    <CardImage>
                                        <img 
                                            src={spezCard} 
                                            alt="Spez"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'contain',
                                                borderRadius: '12px'
                                            }}
                                        />
                                    </CardImage>
                                </CardContent>
                                <BuyButton>Buy Now</BuyButton>
                            </CardSlot>
                        </CardSlotsContainer>
                    </InnerContainer>
                </FeaturedContent>
                
                {selectedCard && (
                    <ModalBackdrop onClick={handleCloseModal}>
                        <ModalContent onClick={(e) => e.stopPropagation()}>
                            <CloseButton onClick={handleCloseModal}>×</CloseButton>
                            <ModalCardImage>
                                <img 
                                    src={cardData[selectedCard].image} 
                                    alt={cardData[selectedCard].name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        borderRadius: '16px'
                                    }}
                                />
                            </ModalCardImage>
                            <ModalCardDetails>
                                <h2>{cardData[selectedCard].name}</h2>
                                <div className="price">{cardData[selectedCard].price}</div>
                                <div className="description">{cardData[selectedCard].description}</div>
                                {cardData[selectedCard].stats && (
                                    <div className="stats">
                                        <h3>Card Stats</h3>
                                        {Object.entries(cardData[selectedCard].stats).map(([key, value]) => (
                                            <div key={key} className="stat-row">
                                                <span className="stat-label">{key}:</span>
                                                <span className="stat-value">{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <ModalBuyButton onClick={() => handlePurchase(selectedCard)}>Purchase Card</ModalBuyButton>
                            </ModalCardDetails>
                        </ModalContent>
                    </ModalBackdrop>
                )}
                
                {toast && (
                    <ToastNotification $show={showToast}>
                        {toast}
                    </ToastNotification>
                )}
            </ContentContainer>
        );
    }
    
    if (activeItem === 'Cards') {
        return (
            <ContentContainer>
                <FeaturedContent>
                    <InnerContainer>
                        <CardSlotsContainer style={{ 
                            maxWidth: '700px', 
                            gap: '20px',
                            ...(window.innerWidth <= 799 ? { 
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                maxWidth: '400px',
                                gap: '25px'
                            } : {})
                        }}>
                            <CardSlot onClick={() => handleCardClick('bloodyprize')}>
                                <PriceTag>
                                    <span>400$k</span>
                                </PriceTag>
                                <CardContent>
                                    <CardImage>
                                        <img 
                                            src={bloodyprizeCard} 
                                            alt="Bloody Prize"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'contain',
                                                borderRadius: '12px',
                                                transform: 'rotate(90deg)'
                                            }}
                                        />
                                    </CardImage>
                                </CardContent>
                                <BuyButton>Buy Now</BuyButton>
                            </CardSlot>
                            <CardSlot onClick={() => handleCardClick('everything')}>
                                <PriceTag>
                                    <span>1000$k</span>
                                </PriceTag>
                                <CardContent>
                                    <CardImage>
                                        <img 
                                            src={everythingCard} 
                                            alt="Everything"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'contain',
                                                borderRadius: '12px',
                                                transform: 'rotate(90deg)'
                                            }}
                                        />
                                    </CardImage>
                                </CardContent>
                                <BuyButton>Buy Now</BuyButton>
                            </CardSlot>
                        </CardSlotsContainer>
                    </InnerContainer>
                </FeaturedContent>
                
                {selectedCard && (
                    <ModalBackdrop onClick={handleCloseModal}>
                        <ModalContent onClick={(e) => e.stopPropagation()}>
                            <CloseButton onClick={handleCloseModal}>×</CloseButton>
                            <ModalCardImage>
                                {cardData[selectedCard].image ? (
                                    <img 
                                        src={cardData[selectedCard].image} 
                                        alt={cardData[selectedCard].name}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'contain',
                                            borderRadius: '16px',
                                            ...(selectedCard === 'bloodyprize' || selectedCard === 'everything' ? { transform: 'rotate(90deg)' } : {})
                                        }}
                                    />
                                ) : (
                                    <span>Card Image</span>
                                )}
                            </ModalCardImage>
                            <ModalCardDetails>
                                <h2>{cardData[selectedCard].name}</h2>
                                <div className="price">{cardData[selectedCard].price}</div>
                                <div className="description">{cardData[selectedCard].description}</div>
                                {cardData[selectedCard].stats && (
                                    <div className="stats">
                                        <h3>Card Stats</h3>
                                        {Object.entries(cardData[selectedCard].stats).map(([key, value]) => (
                                            <div key={key} className="stat-row">
                                                <span className="stat-label">{key}:</span>
                                                <span className="stat-value">{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <ModalBuyButton onClick={() => handlePurchase(selectedCard)}>Purchase Card</ModalBuyButton>
                            </ModalCardDetails>
                        </ModalContent>
                    </ModalBackdrop>
                )}
                
                {toast && (
                    <ToastNotification $show={showToast}>
                        {toast}
                    </ToastNotification>
                )}
            </ContentContainer>
        );
    }
    
    if (activeItem === 'Packs') {
        return (
            <ContentContainer>
                <FeaturedContent>
                    <InnerContainer>
                        <CardSlotsContainer style={{ 
                            maxWidth: '300px',
                            justifyContent: 'center'
                        }}>
                            <CardSlot onClick={() => handleCardClick('pack')}>
                                <PriceTag>
                                    <span>500$k</span>
                                </PriceTag>
                                <CardContent>
                                    <CardImage>
                                        <img 
                                            src={sobreCard} 
                                            alt="Pack"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'contain',
                                                borderRadius: '12px'
                                            }}
                                        />
                                    </CardImage>
                                </CardContent>
                                <BuyButton>Buy Now</BuyButton>
                            </CardSlot>
                        </CardSlotsContainer>
                    </InnerContainer>
                </FeaturedContent>
                
                {selectedCard && (
                    <ModalBackdrop onClick={handleCloseModal}>
                        <ModalContent onClick={(e) => e.stopPropagation()}>
                            <CloseButton onClick={handleCloseModal}>×</CloseButton>
                            <ModalCardImage>
                                {cardData[selectedCard].image ? (
                                    <img 
                                        src={cardData[selectedCard].image} 
                                        alt={cardData[selectedCard].name}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'contain',
                                            borderRadius: '16px',
                                            ...(selectedCard === 'bloodyprize' || selectedCard === 'everything' ? { transform: 'rotate(90deg)' } : {})
                                        }}
                                    />
                                ) : (
                                    <span>Card Image</span>
                                )}
                            </ModalCardImage>
                            <ModalCardDetails>
                                <h2>{cardData[selectedCard].name}</h2>
                                <div className="price">{cardData[selectedCard].price}</div>
                                <div className="description">{cardData[selectedCard].description}</div>
                                {cardData[selectedCard].stats && (
                                    <div className="stats">
                                        <h3>Card Stats</h3>
                                        {Object.entries(cardData[selectedCard].stats).map(([key, value]) => (
                                            <div key={key} className="stat-row">
                                                <span className="stat-label">{key}:</span>
                                                <span className="stat-value">{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <ModalBuyButton onClick={() => handlePurchase(selectedCard)}>Purchase Card</ModalBuyButton>
                            </ModalCardDetails>
                        </ModalContent>
                    </ModalBackdrop>
                )}
                
                {toast && (
                    <ToastNotification $show={showToast}>
                        {toast}
                    </ToastNotification>
                )}
            </ContentContainer>
        );
    }
    
    return (
        <ContentContainer>
            <ContentText>{activeItem}</ContentText>
            {toast && (
                <ToastNotification $show={showToast}>
                    {toast}
                </ToastNotification>
            )}
        </ContentContainer>
    );
}

export default ContentScreen