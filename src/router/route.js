import React from "react";
import Login from "../components/login/Login";
import Home from "../components/Home";
import Profile from "../components/profile/Profile";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

export default function router() {

    if(localStorage.getItem("token") === null){
        <Redirect to={{pathname: "/login"}} />
    }

    console.log(localStorage.getItem("token"))

    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/profile">
                        <Profile></Profile>
                    </Route>
                    <Route path="/login">
                        <Login></Login>
                    </Route>
                    <Route path="/">
                        <Home></Home>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
