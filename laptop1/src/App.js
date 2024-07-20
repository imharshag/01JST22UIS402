import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllProductsPage from './pages/AllProductPage';
import ProductPage from './pages/ProductPage.js';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={AllProductsPage} />
      <Route path="/product/:id" component={ProductPage} />
    </Switch>
  </Router>
);

export default App;
