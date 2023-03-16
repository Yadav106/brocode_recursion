import React from 'react'
import LandingPage from './components/LandingPage';
import Catalog from './components/Catalog';
import Chat from './components/Chat';

const App = () => {

  return (
    <main>
      <Catalog />
      <Chat />
    </main>
  )
}

export default App