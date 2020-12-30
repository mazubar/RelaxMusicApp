import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import {LoginComponent} from "./LoginComponent";
import {Home} from "./Home";
import {Audio} from "./Audio"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


function App() {
    return (
        <Router>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Relax with music</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/login">Log in</Nav.Link>
                    <Nav.Link href="/audio">Fun</Nav.Link>
                </Nav>
            </Navbar>

            <Switch>
                <Route path="/login">
                    <LoginComponent/>
                </Route>
                <Route path="/audio">
                    <Audio/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
                <Route path="/home">
                    <Home/>
                </Route>
            </Switch>
        </Router>

    );
}

export default App;