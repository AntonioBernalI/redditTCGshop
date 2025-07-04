import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MainDiv from "./components/mainDiv.jsx";
import Snoo from "./components/snoo.jsx";
import HeaderImage from "./components/headerImage.jsx";
import NavBar from "./components/navBar.jsx";
function App() {

  return (
    <>
      <MainDiv>
          <HeaderImage />
          <NavBar/>
      </MainDiv>
        <Snoo/>
    </>
  )
}

export default App
