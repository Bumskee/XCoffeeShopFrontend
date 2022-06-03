import React from "react";
import { signInWithPopup } from "firebase/auth";
import { Auth, Provider } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import './Login.css';
import GoogleLogo from './assets/images/GoogleLogo.png'

const Login = ({setIsAuth}) => {
  const Navigate = useNavigate();
  const SignInWithGoogle = () => {
    signInWithPopup(Auth,Provider).then(() => {
        localStorage.setItem("isAuth",true);
        setIsAuth(true);
        Navigate("/");
    })
  }
  return (
    <div className="Login">
      <div class = "login_box_back"></div>
      <div class="login_box_front">
          <h1 class = "LoginHeader">Login</h1>
          <form method="post">
              <div class="txt_field">
                  <input type="text" required/>
                  <span></span>
                  <label>Username</label>
              </div>
              <div class="txt_field">
                  <input type="password" required/>
                  <span></span>
                  <label>Password</label>
              </div>
              <div class="pass"> <a href="#">Forgot Password?</a> </div>
              <input type="submit" value="Login"/>
              <div class="signup_link linkto">
                  Don't have an account? <a href="#">Sign up</a>
              </div>
              <p class="or">-or-</p>
              <div class="login_google">
                <img class="google-logo beside" src={GoogleLogo} onClick={SignInWithGoogle}/>
                <p class="alter_login beside">Use your Google Account</p>                
              </div>
          </form>
        </div>
    </div>
  );
}

export default Login;