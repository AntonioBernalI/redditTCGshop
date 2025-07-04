import {styled} from 'styled-components'

const Nav = styled.div`
    margin-top: 1%;
    width: 95%;
    height: 12%;
    background: #ff5801;
    border-radius: 25px;
    border: 3px solid #ff4500;
    box-shadow: 
        0 4px 8px rgba(0, 0, 0, 0.3),
        inset 0 2px 4px rgba(255, 255, 255, 0.3),
        inset 0 -2px 4px rgba(0, 0, 0, 0.2);
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 1%;
    
    /* Add a subtle animation */
    animation: gentle-pulse 3s ease-in-out infinite alternate;
    
    /* Cartoon-style highlight */
    &::before {
        content: '';
        position: absolute;
        top: 10%;
        left: 10%;
        right: 10%;
        height: 30%;
        background: rgba(255, 255, 255, 0.15);
        border-radius: 20px;
        opacity: 0.7;
    }
    
    @keyframes gentle-pulse {
        0% {
            box-shadow: 
                0 4px 8px rgba(0, 0, 0, 0.3),
                inset 0 2px 4px rgba(255, 255, 255, 0.3),
                inset 0 -2px 4px rgba(0, 0, 0, 0.2);
        }
        100% {
            box-shadow: 
                0 6px 12px rgba(0, 0, 0, 0.4),
                inset 0 3px 6px rgba(255, 255, 255, 0.4),
                inset 0 -3px 6px rgba(0, 0, 0, 0.3);
        }
    }
`

const NavItem = styled.div`
    background: linear-gradient(145deg, #ff6b1a, #ff4500);
    border: 2px solid #ff3300;
    border-radius: 20px;
    padding: 8px 16px;
    color: white;
    font-weight: bold;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
    flex: 1;
    max-width: 25%;
    text-align: center;
    cursor: pointer;
    position: relative;
    box-shadow: 
        0 3px 6px rgba(0, 0, 0, 0.3),
        inset 0 1px 2px rgba(255, 255, 255, 0.4);
    transition: all 0.2s ease;
    
    /* Cartoon highlight */
    &::before {
        content: '';
        position: absolute;
        top: 2px;
        left: 4px;
        right: 4px;
        height: 40%;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 15px;
        opacity: 0.8;
    }
    
    &:hover {
        transform: translateY(-2px);
        box-shadow: 
            0 5px 10px rgba(0, 0, 0, 0.4),
            inset 0 2px 4px rgba(255, 255, 255, 0.5);
        background: linear-gradient(145deg, #ff7b2a, #ff5500);
    }
    
    &:active {
        transform: translateY(0px);
        box-shadow: 
            0 2px 4px rgba(0, 0, 0, 0.3),
            inset 0 1px 2px rgba(255, 255, 255, 0.3);
    }
    
    @media (max-width: 799px) {
        font-size: 12px;
        padding: 6px 4px;
        letter-spacing: 0.5px;
        max-width: 24%;
    }
`

const NavBar = ({}) => {
    return (
        <>
            <Nav>
                <NavItem>Featured</NavItem>
                <NavItem>Cards</NavItem>
                <NavItem>Packs</NavItem>
            </Nav>
        </>
    )
}
export default NavBar