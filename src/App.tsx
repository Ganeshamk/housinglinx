import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useState } from "react";
import Management from "./pages/Management";
import Payment from "./pages/Payment";
import Profile from "./pages/Profile";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import "./App.css";
import Visitor from "./pages/Visitor";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);
const App: React.FunctionComponent = () => {
  const isLoggedIn = localStorage.getItem("user") ? true : false;
  const [login, setLogin] = useState(isLoggedIn);

  const onHandleLogin = () => {
    setLogin(true);
  };

  const onHandleLogOut = () => {
    setLogin(false);
    localStorage.clear();
  };

  return (
    <>
      <Router>
        {login === true ? <Sidebar onHandleLogOut={onHandleLogOut} /> : ""}
        <div className={login === true ? "layout" : ""}>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/visitor"
              element={
                <PrivateRoute>
                  <Visitor />
                </PrivateRoute>
              }
            />
            <Route
              path="/management"
              element={
                <PrivateRoute>
                  <Management />
                </PrivateRoute>
              }
            />
            <Route
              path="/payment"
              element={
                <PrivateRoute>
                  <Payment />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />

            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login onHandleLogin={onHandleLogin} />
                </PublicRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
