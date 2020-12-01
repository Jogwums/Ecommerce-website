import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles'

import Home from './pages/HomePage/Home'
import Services from './pages/Services/Services'
import Products from './pages/Products/Products'
import SignUp from './pages/SignUp/SignUp'

import {Navbar, Footer} from './components/index';
import ScrollToTop from './components/ScrollToTop'


import './App.css';


function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <ScrollToTop />
          <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/services" component={Services} />
          <Route  path="/product" component={Products} />
          <Route  path="/sign-up" component={SignUp} />
        </Switch>
        <Footer />
      </Router>
      
    </>
  );
}

export default App;
