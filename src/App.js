import React from 'react';
import { CartProvider } from './context/CartContext';
import { UIProvider } from './context/UIContext';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route } from "react-router-dom";
import './global.css';
import 'boxicons';
import { Navbar } from './components/Navbar/Navbar';
import { HomeView } from './components/HomeView/HomeView';
import { ItemDetailContainer } from './components/HomeView/Items/ItemDetailContainer/ItemDetailContainer';
import { Shopping } from './components/HomeView/Shopping/Shopping'
import { Contact } from './components/HomeView/Contact/Contact'
import { Footer } from './components/Footer/Footer';

function App() {

  return (
    <UIProvider>
      <CartProvider>
        <Router>
          <>
            <Navbar />
            <Switch>
              <Route exact path="/tienda-lol-reactJs">
                <HomeView />
              </Route>

              <Route exact path="/productos/:categoryId">
                <HomeView />
              </Route>

              <Route exact path="/detail/:itemId">
                <ItemDetailContainer />
              </Route>

              <Route exact path="/contacto">
                <Contact />
              </Route>

              <Route exact path="/cart">
                <Shopping />
              </Route>
            </Switch>

            <Footer />
          </>
        </Router>
      </CartProvider>
    </UIProvider>
  );
}

export default App;