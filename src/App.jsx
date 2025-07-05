import { useState } from 'react'
import { useEffect } from 'react'
import MainDiv from "./components/mainDiv.jsx";
import Snoo from "./components/snoo.jsx";
import HeaderImage from "./components/headerImage.jsx";
import NavBar from "./components/navBar.jsx";
import ContentScreen from "./components/contentScreen.jsx";
import MoneyDisplay from "./components/moneyDiv.jsx";
import FullscreenBackdrop from "./components/FullscreenBackdrop.jsx";

function deepFindMessage(obj) {
  if (!obj || typeof obj !== 'object') return undefined;
  if ('message' in obj) return obj.message;

  if ('data' in obj) return deepFindMessage(obj.data);

  return undefined;
}

function App() {
  const [activeNavItem, setActiveNavItem] = useState(null);
  const [money, setMoney] = useState("loading...");

  useEffect(() => {
    // Send webview_ready message after mount
    window.parent.postMessage({
      type: 'webview_ready',
      data: {}
    }, '*');
    
    const handleMessage = (event) => {
      const message = deepFindMessage(event.data);
      if (!message) return;
      const { type, data } = message;
      if (type==="balance_update"){
        setMoney(data);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  const handleNavItemClick = (itemName) => {
    setActiveNavItem(itemName);
  };

  const updateMoney = (newAmount) => {
    setMoney(newAmount);
  };
  return (
    <>
      <FullscreenBackdrop />
      <MoneyDisplay money={money} />
      <MainDiv>
          <HeaderImage />
          <NavBar 
            activeItem={activeNavItem} 
            onItemClick={handleNavItemClick}
          />
          <ContentScreen activeItem={activeNavItem} money={money} updateMoney={updateMoney} />
      </MainDiv>
        <Snoo/>
    </>
  )
}

export default App
