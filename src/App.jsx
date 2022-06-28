import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import "./App.css";
import { signOut } from "firebase/auth";
import { Auth } from "./firebase-config";

const App = () => {
  const SignUserOut = () => {
    localStorage.clear();
    signOut(Auth);
    window.location.href="login";
  }
  return (
    <Router>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/createpost">Add Item</Link>
            {!localStorage.getItem("isAuth") ? <Link to="/login">Login</Link> : <button class = 'astext' onClick={SignUserOut}>Logout</button>}
        </nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createpost" element={<CreatePost />} />
            <Route path="/login" element={<Login/>} />
        </Routes>
    </Router>
  );
}

export default App;