import {styled} from 'styled-components'
import name from '../assets/redditTCGshop.png'
const Header = styled.div`
    width: 100%;
    height: 17%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 0 5%;
    
    img {
        height: 100%;
        object-fit: contain;
        max-width: 100%;
        
        @media (min-width: 800px) {
            width: 75%;
        }
        
        @media (max-width: 799px) {
            width: 85%;
        }
    }
`
function HeaderImage() {
    return(
        <>
            <div style={{
                width: '100%',
                height: '2%',
            }}></div>
            <Header>
                <img src={name} alt="" />
            </Header>
        </>
    )
}
export default HeaderImage