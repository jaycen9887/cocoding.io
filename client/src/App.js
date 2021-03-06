import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav";
import LandingPage from "./components/LandingPage";
import Company from "./components/Company";
import Classroom from "./components/Classroom";
import Room from "./components/Room";
//import Footer from "./components/Footer";
import Terminal from "./components/Terminal";
import Tokbox from "./components/Tokbox";
import Chat from "./components/Chat";

const App = () =>
    <Router>
        <div>
            {/*<Nav />*/}
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/companies" component={Company} />
                <Route exact path="/classrooms" component={Classroom} />
                <Route exact path="/room" component={Room} />
                <Route exact path="/terminal/:id" component={Terminal} />

                {/* <Route exact path="/tokboxtest" component={Tokbox} />
                <Route exact path="/chattest" component={Chat} /> */}
            </Switch>
            {/*<Footer />*/}
        </div>
    </Router>;

export default App;
