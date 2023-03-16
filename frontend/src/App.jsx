import React from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import Landingpage from './components/Landingpage';
import { Route } from 'react-router-dom';
// import Login from '';

const App = () => {

  return (
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
  )
}

export default App