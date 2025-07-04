import {styled} from 'styled-components'
import name from '../assets/redditTCGshop.png'
const Header = styled.div`
    width: 100%;
    height: 17%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
`
function HeaderImage() {
    return(
        <>
            <div style={{
                width: '100%',
                height: '2%',
            }}></div>
            <Header>
                <img src={name} alt="" style={{
                    width: '60%',
                    height: '100%',
                }}/>
            </Header>
        </>
    )
}
export default HeaderImage