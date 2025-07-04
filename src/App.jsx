import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MainDiv from "./components/mainDiv.jsx";
import Snoo from "./components/snoo.jsx";
import HeaderImage from "./components/headerImage.jsx";
import NavBar from "./components/navBar.jsx";
import ContentScreen from "./components/contentScreen.jsx";

function App() {
  const [activeNavItem, setActiveNavItem] = useState(null);

  const handleNavItemClick = (itemName) => {
    setActiveNavItem(itemName);
  };

  return (
    <>
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
