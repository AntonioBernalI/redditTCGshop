import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MainDiv from "./components/mainDiv.jsx";
import Snoo from "./components/snoo.jsx";
import HeaderImage from "./components/headerImage.jsx";
import NavBar from "./components/navBar.jsx";
import ContentScreen from "./components/contentScreen.jsx";
import { styled } from 'styled-components';

const MoneyDiv = styled.div`
  position: absolute;
  top: 10%;
  left: 10%;
  width: 200px;
  height: 100px;
  background-color: rebeccapurple;
  z-index: 20;
`

function App() {
  const [activeNavItem, setActiveNavItem] = useState(null);

  useEffect(() => {
    const messageHandler = (e) => {
      // the data will l
    }
  }, []);

  const handleNavItemClick = (itemName) => {
    setActiveNavItem(itemName);
  };

  return (
    <>
      <MoneyDiv />
      <MainDiv>
          <HeaderImage />
          <NavBar 
            activeItem={activeNavItem} 
            onItemClick={handleNavItemClick}
          />
          <ContentScreen activeItem={activeNavItem} />
      </MainDiv>
        <Snoo/>
    </>
  )
}

export default App
