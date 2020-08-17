import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";
import Navbar from "./components/navbar/navbar.componet";
import HomePage from "./pages/homepage";
import ShopPage from "./pages/shop/shop.component";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
