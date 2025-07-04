import {styled} from 'styled-components'
import snoo from '../assets/snoo.png'
const SnooDiv = styled.div`
    z-index: 90;
    position: absolute;
    left: 15%;
    bottom: 15%;
    
    /* PC styles (800px and above) */
    @media (min-width: 800px) {
        height: 200px;
        width: 200px;
    }
    
    /* Mobile styles (below 800px) */
    @media (max-width: 799px) {
        height: 150px;
        width: 150px;
    }
`
const Snoo = () => {
    return (
        <>
            <SnooDiv>
                <img
                    src={snoo}
                    alt="Snoo"
                    style={{
                        height: '100%',
                        width: '100%',
                    }}
                />
            </SnooDiv>
        </>
    )
}
export default Snoo;