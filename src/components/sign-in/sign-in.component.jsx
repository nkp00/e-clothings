import React, { Component } from "react";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import "./sign-in.style.scss";
import { signInWithGoogle } from "../../firebase/firebase.utility";
class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    // console.log(e);
    e.preventDefault();
    console.log(this.state);
    this.setState({ email: "", password: "" });
  };
  render() {
    return (
      <div className="sign-in">
        <h1 className="title">I already have an account</h1>
        <span>Sign in with email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            label="Email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
          ></FormInput>
          <FormInput
            type="password"
            label="Password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
          ></FormInput>
          <div className="button-container">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton
              type="button"
              signInWithGoogle={true}
              onClick={signInWithGoogle}
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
