import {styled} from 'styled-components'
const Nav = styled.div`
    margin-top: 1%;
    width: 100%;
    background: #ff5801;
    border-radius: 25px;
    border: 3px solid #ff4500;
    box-shadow: 
        0 4px 8px rgba(0, 0, 0, 0.3),
        inset 0 2px 4px rgba(255, 255, 255, 0.3),
        inset 0 -2px 4px rgba(0, 0, 0, 0.2);
    position: relative;
    overflow: hidden;
    
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
    
    /* Desktop height */
    @media (min-width: 800px) {
        height: 12%;
    }
    
    /* Mobile height - smaller for better proportions */
    @media (max-width: 799px) {
        height: 8%;
    }
`
const NavBar = ({}) => {
    return (
        <>
            <Nav/>
        </>
    )
}
export default NavBar