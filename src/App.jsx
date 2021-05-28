import React from 'react'
import {Switch,Route, Redirect} from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from './Website/Home'
import About from './Website/About'
import Service from './Website/Service'
import Contact from './Website/Contact'
import Navbar from './Website/Navbar'
import Footer from './Website/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component ={Home} />
        <Route exact path="/about" component ={About} />
        <Route exact path="/service" component ={Service} />
        <Route exact path="/contact" component ={Contact} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  )
}

export default App
