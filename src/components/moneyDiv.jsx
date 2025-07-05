import { styled } from 'styled-components';

const MoneyDiv = styled.div`
    position: absolute;
    top: 2%;
    left: 2%;
    width: 220px;
    height: 80px;
    background: linear-gradient(145deg, #ffd700, #ffb300);
    border: 4px solid #ff8c00;
    border-radius: 25px;
    z-index: 20;
    display: flex;
    align-items: center;
    padding: 8px 15px;
    box-shadow: 
        0 6px 12px rgba(0, 0, 0, 0.4),
        inset 0 3px 6px rgba(255, 255, 255, 0.3);
    
    /* Cartoon highlight */
    &::before {
        content: '';
        position: absolute;
        top: 6px;
        left: 12px;
        right: 12px;
        height: 35%;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 18px;
        opacity: 0.8;
    }
    
    @media (max-width: 799px) {
        width: 180px;
        height: 65px;
        top: 1.5%;
        left: 1.5%;
        padding: 6px 12px;
    }
`

const MoneyLogo = styled.div`
    width: 50px;
    height: 50px;
    background: linear-gradient(145deg, #32cd32, #228b22);
    border: 3px solid #228b22;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
    box-shadow: 
        0 4px 8px rgba(0, 0, 0, 0.3),
        inset 0 2px 4px rgba(255, 255, 255, 0.3);
    position: relative;
    z-index: 1;
    
    /* Coin highlight */
    &::before {
        content: '';
        position: absolute;
        top: 3px;
        left: 6px;
        right: 6px;
        height: 40%;
        background: rgba(255, 255, 255, 0.25);
        border-radius: 50%;
        opacity: 0.8;
    }
    
    span {
        color: white;
        font-family: 'Overpass', sans-serif;
        font-size: 24px;
        font-weight: bold;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        z-index: 1;
    }
    
    @media (max-width: 799px) {
        width: 40px;
        height: 40px;
        margin-right: 10px;
        
        span {
            font-size: 20px;
        }
    }
`

const MoneyAmount = styled.div`
    color: #8b4513;
    font-family: 'Overpass', sans-serif;
    font-size: 28px;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5);
    z-index: 1;
    flex: 1;
    text-align: center;
    
    @media (max-width: 799px) {
        font-size: 22px;
    }
`

const MoneyDisplay = ({ money }) => {
    return (
        <MoneyDiv>
            <MoneyLogo>
                <span>$</span>
            </MoneyLogo>
            <MoneyAmount>{money.toLocaleString()}</MoneyAmount>
        </MoneyDiv>
    );
};

export default MoneyDisplay;