import {styled} from 'styled-components'
import snoo from '../assets/snoo.png'
const SnooDiv = styled.div`
    z-index: 90;
    position: absolute;
    
    /* PC styles (800px and above) */
    @media (min-width: 800px) {
        height: 200px;
        width: 200px;
        left: 8%;
        bottom: 8%;
    }
    
    /* Mobile styles (below 800px) */
    @media (max-width: 799px) {
        height: 150px;
        width: 150px;
        left: 5%;
        bottom: 5%;
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