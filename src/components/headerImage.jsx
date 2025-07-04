import {styled} from 'styled-components'
import name from '../assets/redditTCGshop.png'
const Header = styled.div`
    width: 100%;
    height: 17%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    
    img {
        height: 100%;
        
        @media (min-width: 800px) {
            width: 40%;
        }
        
        @media (max-width: 799px) {
            width: 70%;
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