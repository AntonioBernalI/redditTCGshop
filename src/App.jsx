import { useState } from 'react'
import { useEffect } from 'react'
import MainDiv from "./components/mainDiv.jsx";
import Snoo from "./components/snoo.jsx";
import HeaderImage from "./components/headerImage.jsx";
import NavBar from "./components/navBar.jsx";
import ContentScreen from "./components/contentScreen.jsx";
import MoneyDisplay from "./components/moneyDiv.jsx";

function App() {
  const [activeNavItem, setActiveNavItem] = useState(null);
  const [money, setMoney] = useState(1250);

  useEffect(() => {
    const messageHandler = (e) => {
      const content = event.data.data.message.data
      // the content will will be an int
    }
  }, []);

  const handleNavItemClick = (itemName) => {
    setActiveNavItem(itemName);
  };

  return (
    <>
      <MoneyDisplay money={money} />
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
