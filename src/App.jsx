import React from "react";
import { useNavigate, HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css";
import { signOut } from "firebase/auth";
import { Auth } from "./firebase-config";

const Root = () => {
  const Navigate = useNavigate();
  const SignUserOut = () => {
    localStorage.clear();
    signOut(Auth);
    Navigate("/login")
  }
  return (
    <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/createpost">Add Item</Link>
            {localStorage.getItem("isAuth") ? <button class = 'astext' onClick={SignUserOut}>Logout</button> : <Link to="/login">Login</Link>}
        </nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createpost" element={<CreatePost />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
        </Routes>
    </div>
  );
}

const App = () => {
  return (
    <Router>
        <Root />
    </Router>
  );
};

export default App;