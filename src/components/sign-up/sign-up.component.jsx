import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import {
  auth,
  createUserProfileDocument,
} from "../../firebase/firebase.utility";

import "./sign-up.style.scss";
import CustomButton from "../custom-button/custom-button.component";

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (er) {
      console.log("Error occured during sign up");
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h1 className="title">I Do not have an Account</h1>
        <span className="subtitle"> Register with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            handleChange={this.handleChange}
            value={displayName}
            name="displayName"
            label="Name"
          ></FormInput>
          <FormInput
            type="email"
            handleChange={this.handleChange}
            value={email}
            name="email"
            label="Email"
          ></FormInput>
          <FormInput
            type="password"
            handleChange={this.handleChange}
            name="password"
            label="Password"
            value={password}
          ></FormInput>
          <FormInput
            type="password"
            handleChange={this.handleChange}
            name="confirmPassword"
            label=" Confirm Password"
            value={confirmPassword}
          ></FormInput>
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
