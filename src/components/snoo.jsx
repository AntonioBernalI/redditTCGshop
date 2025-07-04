import {styled} from 'styled-components'
import snoo from '../assets/snoo.png'
const SnooDiv = styled.div`
    z-index: 90;
    height: 300px;
    width: 300px;
    position: absolute;
    transform: translate(-50%, -50%);
    @media (max-width: 710px) {
        left: 15%;
        bottom: -12%;
    }
    bottom: -15%;
    left: 17%;
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