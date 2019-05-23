import React, { Component } from "react";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Chat from "./components/Chat/App";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Current from "./components/pages/Current";
import FutureAnx from "./components/pages/FutureAnx";
import "./App.css";

export default class App extends Component {
  render() {

    return (
      <div id="App">
        <Nav />
        <Sidebar />
        <div id="page-wrap">
          <Router>
            <Route exact path='/' component={Home} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/about' component={About} />
            <Route exact path='/future' component={FutureAnx} />
            <Route exact path='/anxious' component={Current} />
            <Route exact path='/chat' component={Chat} />
            {/* <Route exact path='/signUp' component={SignUp} /> */}
            {/* <Route exact path='/login' component={Login} /> */}
        </Router>
      </div>
      </div>
    );
  }
}