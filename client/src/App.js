import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav";
import LandingPage from "./components/LandingPage";
import Company from "./components/Company";
import Classroom from "./components/Classroom";
import Footer from "./components/Footer"

const App = () =>
    <Router>
        <div>
            <Nav />
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/companies" component={Company} />
                <Route exact path="/classrooms" component={Classroom} />
            </Switch>
            <Footer />
        </div>
    </Router>;

export default App;
