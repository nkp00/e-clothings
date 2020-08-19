import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";
import Navbar from "./components/navbar/navbar.componet";
import HomePage from "./pages/homepage";
import ShopPage from "./pages/shop/shop.component";
import SingInAndSignUpPage from "./pages/sign-in-sign-up/sign-in-and-sign-up .component";
import { auth } from "./firebase/firebase.utility";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unSusbcribeFromAuth = null;
  componentDidMount() {
    this.unSusbcribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
  render() {
    return (
      <div>
        <Navbar currentUser={this.state.currentUser}></Navbar>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/sign-in" component={SingInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
