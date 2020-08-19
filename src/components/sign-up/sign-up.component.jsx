import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";

import "./sign-up.style.scss";
import CustomButton from "../custom-button/custom-button.component";

class SignUp extends Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  handleChange = (e) => {};

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h1 className="title">I Do not have an Account</h1>
        <span className="subtitle"> Register with your email and password</span>
        <form>
          <FormInput
            type="text"
            handleChange={this.handleChange}
            value={displayName}
            name="name"
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
