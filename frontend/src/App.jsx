import React from 'react'
<<<<<<< HEAD
import Footer from './components/Footer';
import Header from './components/Header';
import Landingpage from './components/Landingpage';
import { Route } from 'react-router-dom';
// import Login from '';
=======
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from "./components/Login";
import Signup from './components/Signup';
>>>>>>> 7ded1875e0010742f3350ef5fee8bba9ea5326d7

const App = () => {

  return (
<<<<<<< HEAD
    <div>
      <Header />
      <Route path="/">
        <Landingpage />
      </Route>
      <Route excat path="/Login">
        <Login />
      </Route>
      <Footer />
    </div>
=======
    <BrowserRouter>
      <div>App</div>
      <Login />
      <Routes>
        <Route path='/signup' Component={Signup} />
      </Routes>
    </BrowserRouter>
>>>>>>> 7ded1875e0010742f3350ef5fee8bba9ea5326d7
  )
}

export default App