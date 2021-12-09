import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Views } from "./Views";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./Repairs.css";

export const Repairs = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("honey_customer")) {
          return (
            <>
              <NavBar />
              <Views />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);
