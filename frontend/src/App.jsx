import React from 'react'

import Footer from './components/Footer';
import Header from './components/Header';
import Landingpage from './components/Landingpage';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from "./components/Login";
import Signup from './components/Signup';


const App = () => {

  return (

    <div>  
      <BrowserRouter>

        <Routes>
          <Route path ="/" Component={Landingpage}/>
          <Route path ="/Login" Component={Login}/>
          <Route path='/signup' Component={Signup} />
          <Route path="*" Component={Missing}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App