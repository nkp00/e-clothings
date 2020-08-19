import React, { Component } from "react";
import "./sign-in-and-sign-up.style.scss";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

class SingInAndSignUpPage extends Component {
  state = {};
  render() {
    return (
      <div className="sign-in-sign-up">
        <SignIn className="sign-in"></SignIn>
        <SignUp className="sign-up"></SignUp>
      </div>
    );
  }
}

export default SingInAndSignUpPage;
