import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer"

const App = () =>
    <Router>
        <div>
            <Nav />
            <Switch>
                <Route exact path="/" component={LandingPage} />
            </Switch>
            <Footer />
        </div>
    </Router>;

export default App;
