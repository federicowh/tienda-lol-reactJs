import React, { useContext } from 'react';
import { CartProvider } from './context/CartContext';
import { UIProvider } from './context/UIContext';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route,
  Redirect } from "react-router-dom";
import { Navbar } from './components/Navbar/Navbar';
import { HomeView } from './components/HomeView/HomeView';
import { ItemDetailContainer } from './components/HomeView/Items/ItemDetailContainer/ItemDetailContainer';
import { Shopping } from './components/HomeView/Shopping/Shopping';
import { Checkout } from './components/HomeView/Checkout/Checkout';
import { Contact } from './components/HomeView/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { UserAuthContext } from './context/UserAuthContext';
import { UserAuthenticate } from './components/UserAuthenticate/UserAuthenticate';
import 'boxicons';
import './global.css';

function App() {

  const { isAuthenticated } = useContext(UserAuthContext)

  return (
    <UIProvider>
      <CartProvider>

        <Router>
          <>
            <Navbar />

            <Switch>
              { isAuthenticated
              ?
              <>
              <Route exact path="/">
                <HomeView />
              </Route>

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

              <Route exact path="/checkout">
                <Checkout />
              </Route>
              </>

              :
              <UserAuthenticate/>
              }
            </Switch>

            <Footer />
          </>
        </Router>
      </CartProvider>
    </UIProvider>
  );
}

export default App;