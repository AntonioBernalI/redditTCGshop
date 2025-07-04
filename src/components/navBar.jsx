import {styled} from 'styled-components'
const Nav = styled.div`
    margin-top: 1%;
    width: 100%;
    background: radial-gradient(circle,rgba(255, 145, 0, 1) 3%, rgba(255, 110, 0, 1) 56%, rgba(255, 76, 0, 1) 90%);
    
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