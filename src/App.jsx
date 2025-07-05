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
    const messageHandler = (event) => {
      // Check if the event has the expected structure
      if (event.data && event.data.data && event.data.data.message && event.data.data.message.data !== undefined) {
        const content = event.data.data.message.data;
        
        // If the content is a number (karma/money value), update the state
        if (typeof content === 'number') {
          setMoney(content);
          console.log("Received money update:", content);
        } else {
          console.log("Received message from Devvit:", content);
        }
      }
    }
    
    // Add event listener for messages from Devvit
    window.addEventListener('message', messageHandler);
    
    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('message', messageHandler);
    };
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
