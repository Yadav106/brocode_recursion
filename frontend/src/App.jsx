import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from "./components/Login";
import Signup from './components/Signup';

const App = () => {

  return (
    <BrowserRouter>
      <div>App</div>
      <Login />
      <Routes>
        <Route path='/signup' Component={Signup} />
      </Routes>
    </BrowserRouter>
  )
}

export default App