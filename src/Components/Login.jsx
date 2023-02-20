import React, { useState } from "react";
import "../Styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from '../firebase';

const Login = () => {
  // States
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const Navigate = useNavigate();

  // Functions
  const signIn = (e) => {
    e.preventDefault();

    // Signin with Firebase
    auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
            Navigate('/');
        })
        .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    // Create user with Firebase
    auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth);
            if (auth) {
                Navigate('/');
            }
        })
        .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Amazon Logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign in
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button
          onClick={register}
          className="login__registerButton"
        >
          Create an Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
