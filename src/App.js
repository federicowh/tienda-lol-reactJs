import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route,
  Link,
  NavLink, } from "react-router-dom";
import './global.css';
import 'boxicons';
import { Navbar } from './components/Navbar/Navbar';
import { HomeView } from './components/HomeView/HomeView';
import { ItemDetailContainer } from './components/HomeView/Items/ItemDetailContainer/ItemDetailContainer';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <HomeView />
          </Route>

          <Route exact path="/productos/:categoryId">
            <HomeView />
          </Route>

          <Route exact path="/detail/:itemId">
            <ItemDetailContainer />
          </Route>

          <Route exact path="/contacto">
            <h1>Contacto</h1>
          </Route>

          <Route exact path="/cart">
            <h1>Carrito</h1>
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );

}

export default App;