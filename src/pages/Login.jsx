import React from "react";
import { signInWithPopup } from "firebase/auth";
import { Auth, Provider } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import './Login.css';
import GoogleLogo from './assets/images/GoogleLogo.png'

const Login = () => {
  const state = {
    credentials: {username: '', password: ''},
}

  const Navigate = useNavigate();
  const SignInWithGoogle = () => {
    signInWithPopup(Auth,Provider).then(() => {
        localStorage.setItem("isAuth",true);
        Navigate("/");
    })
  }

  const registerButton = () => {
    Navigate("/register");
  }

  const regularLogin = () => {
    fetch('https://mrx-coffeeshop-backend.herokuapp.com/auth/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(state.credentials)
        })
        .then( data => data.json())
        .then(
            data => { 
               if (data.token) {
                localStorage.setItem("isAuth", true)
                Navigate("/");
               } 
            }
        )
        .catch( error => console.error(error))
  }

  const inputChanged = event => {
    const cred = state.credentials;
    cred[event.target.name] = event.target.value; 
    state.credentials = cred; 
  }

  return (
    <div className="Login">
      <div class = "login_box_back"></div>
      <div class="login_box_front">
          <h1 class = "LoginHeader">Login</h1>
          <div className="login_form">
              <div class="txt_field">
                  <input type="text" name="username"
                    onChange={inputChanged}
                    required/>
                  <span></span>
                  <label>Username</label>
              </div>
              <div class="txt_field">
                  <input type="password" name="password"
                    onChange={inputChanged}
                    required/>
                  <span></span>
                  <label>Password</label>
              </div>
              <button className="login_button" onClick={regularLogin}>Login</button>
              <div class="signup_link linkto">
                  Don't have an account? <a onClick={registerButton}>Sign up</a>
              </div>
              <p class="or">-or-</p>
              <div class="login_google">
                <img class="google-logo beside" src={GoogleLogo} onClick={SignInWithGoogle}/>
                <p class="alter_login beside">Use your Google Account</p>                
              </div>
            </div>
        </div>
    </div>
  );
}

export default Login;