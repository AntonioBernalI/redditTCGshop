import {styled} from 'styled-components'
import snoo from '../assets/snooImage.png'
const SnooDiv = styled.div`
    z-index: 90;
    position: absolute;
    
    /* PC styles (800px and above) */
    @media (min-width: 800px) {
        height: 300px;
        width: 300px;
        left: 8%;
        bottom: 1%;
    }
    
    /* Mobile styles (below 800px) */
    @media (max-width: 799px) {
        height: 150px;
        width: 150px;
        left: -1.5%;
        bottom: 0%;
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