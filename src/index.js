import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
    Router,
    Route,
    hashHistory,
    IndexRoute
} from "react-router";
import Page from "./components/Page";
import Dashboard from "./components/dashboard/Dashboard";
import Nougat from "./components/android/Nougat";
import Iphone from "./components/ios/Iphone";
import Login from "./components/Login";
import Register from "./components/Register";
import Forgot from "./components/Forgot";

import "./style/index.scss";

const routes = (
    <Route path={"/"} components={Page}>
        <IndexRoute component={Login} />
        <Route path={"/register"} component={Register} />
        <Route path={"/forgot"} component={Forgot} />
        {/* When the user to logon */}
        <Route path={"app"} component={App}>
            <Route path={"dashboard/index"} component={Dashboard} />
            <Route path={"android"}>
                <Route path={"nougat"} component={Nougat} />
            </Route>
            <Route path={"ios"}>
                <Route path={"iphone"} component={Iphone} />
            </Route>
        </Route>
    </Route>
);

ReactDOM.render(
    <Router history={hashHistory}>{routes}</Router>,
    document.getElementById("root")
);
