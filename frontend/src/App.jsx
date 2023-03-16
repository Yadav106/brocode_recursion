import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Login from "./components/Login";

const App = () => {

  return (
    <BrowserRouter>
      <div>App</div>
      <Login />
    </BrowserRouter>
  )
}

export default App