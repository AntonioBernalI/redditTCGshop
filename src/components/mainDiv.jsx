import {styled} from 'styled-components'
import {createRoot} from "react-dom/client";
const MainDiv = styled.div`
    position: relative;
    border-radius: 5px;
    border: 5px solid #ff5801;
    @media (max-width: 710px) {
        width: 80%;
        height: 90%;
    }
    width: 70%;
    height: 70%;
    background-color: rgba(18, 103, 154, 0.77);
`
export default MainDiv