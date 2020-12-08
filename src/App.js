import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux'

import { store } from './store/GlobalStore'

import GlobalStyle from './globalStyles'

import Home from './pages/HomePage/Home'
import Services from './pages/Services/Services'
// import Products from './pages/Products/Products'
import Items from './pages/Items/Items'
import SignUp from './pages/SignUp/SignUp'

import {Navbar, Footer} from './components/index';
import ScrollToTop from './components/ScrollToTop';


import './App.css';


function App() {
  return (
    <>
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <ScrollToTop />
          <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/services" component={Services} />
          <Route  exact path="/product" component={Items} />
          <Route  path="/sign-up" component={SignUp} />
        </Switch>
        <Footer />
      </Router>
      </Provider>
    </>
  );
}

export default App;
