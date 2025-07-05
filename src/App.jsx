import { useState } from 'react'
import { useEffect } from 'react'
import MainDiv from "./components/mainDiv.jsx";
import Snoo from "./components/snoo.jsx";
import HeaderImage from "./components/headerImage.jsx";
import NavBar from "./components/navBar.jsx";
import ContentScreen from "./components/contentScreen.jsx";
import MoneyDisplay from "./components/moneyDiv.jsx";

function deepFindMessage(obj) {
  if (!obj || typeof obj !== 'object') return undefined;
  if ('message' in obj) return obj.message;

  // Busca recursivamente en cada propiedad llamada "data"
  if ('data' in obj) return deepFindMessage(obj.data);

  return undefined;
}

function App() {
  const [activeNavItem, setActiveNavItem] = useState(null);
  const [money, setMoney] = useState(1250);

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.origin !== 'https://www.reddit.com') return;

      const message = deepFindMessage(event.data);
      if (!message) return;

      const { type, data } = message;

      if (type === 'balance_update' && typeof data === 'number') {
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
