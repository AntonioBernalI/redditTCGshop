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
      console.log("Message received:", event.data);
      
      // Check for Devvit's message structure
      if (event.data && event.data.type === 'devvit-message') {
        // Extract the message from the Devvit wrapper
        const { message } = event.data.data || {};
        
        if (message) {
          console.log("Parsed Devvit message:", message);
          
          // Handle different message types
          if (message.type === 'balance_update' && typeof message.data === 'number') {
            setMoney(message.data);
            console.log("Updated balance to:", message.data);
          } else {
            console.log("Unhandled message type:", message.type);
          }
        }
      }
    }
    
    // Add event listener for messages from Devvit
    window.addEventListener('message', messageHandler);
    
    // Send ready message to Devvit
    if (window.parent !== window) {
      window.parent.postMessage({ type: 'webview_ready' }, '*');
      console.log("Sent ready message to Devvit");
    }
    
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
