import React, { Component, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import context from "react-bootstrap/esm/AccordionContext";
import { Context } from "../store/appContext";

import { Link } from "react-router-dom";
import "./register.css";
import { Passie } from "./Passie";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  const clickHandler = () => {
    actions.login(email, password);
  };

  useEffect(() => {
    if (store.token && store.token !== "" && store.token !== undefined) {
      history("/private");
    }
  }, [store.token, history]);
  return (
    <div className="auth-form-container">
      {store.token && store.token != "" && store.token != undefined ? (
        "This is the token logged in" + store.token
      ) : (
        <>
          <form className="login-form">
            <label htmlFor="email">
              <i className="fas fa-envelope" style={{ color: "#6caef4" }}></i>
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              defaultValue={email}
              type="email"
              placeholder="your_email@cryptotart.com"
              id="email"
              name="email"
            />

            <label htmlFor="password">
              <i className="fas fa-lock" style={{ color: "#6caef4" }}></i>
              Passie
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="*******"
              id="password"
              name="password"
            />

            <button type="submit" onClick={clickHandler}>
              Log In
            </button>

            <Link to="/passie">
              <button className="forgot-button">Forgot password?</button>
            </Link>
          </form>
          <Link to="/register">
            <button className="link-button">
              <i
                className="fas fa-heart-broken"
                style={{ color: "#6caef4" }}
              ></i>
              No Account? Register here!!
              <i className="fas fa-heart" style={{ color: "#6caef4" }}></i>{" "}
            </button>
          </Link>
        </>
      )}
    </div>
  );
};
