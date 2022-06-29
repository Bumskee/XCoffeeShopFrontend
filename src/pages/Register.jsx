import React from "react";
import { useNavigate } from "react-router-dom";
import './Register.css';


const Register = () => {
  const state = {
    credentials: {username: '', password: ''},
  }

  const Navigate = useNavigate();

  const register = () => {
    fetch('https://mrx-coffeeshop-backend.herokuapp.com/users/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(state.credentials)
        })
        .then( data => data.json())
        .then(data =>
          {if (data.username[0] !== "This field may not be blank." && 
               data.username[0] !== "A user with that username already exists.")
            {
              Navigate("/login");
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
      <div class = "login_box_back_register"></div>
      <div class="login_box_front_register">
          <h1 class = "RegisterHeader">Register</h1>
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
              <button className="register_button" onClick={register}>Register</button>
            </div>
        </div>
    </div>
  );
}

export default Register;