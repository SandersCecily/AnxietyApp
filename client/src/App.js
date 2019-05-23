import React, { Component } from "react";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Chat from "./components/Chat/App";
// import Login from "./components/pages/Login";
// import SignUp from "./components/pages/SignUp";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
// import Account from "./components/pages/Account";
import Current from "./components/pages/Current";
import FutureAnx from "./components/pages/FutureAnx";
// import PrivateRoute from "./routes/PrivateRoutes";
import "./App.css";

export default class App extends Component {
  // state = { loading: true, authenticated: false, user: null };
  
  // componentWillMount() {
  //   app.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       this.setState({
  //         authenticated: true,
  //         currentUser: user,
  //         loading: false
  //       });
  //     } else {
  //       this.setState({
  //         authenticated: false,
  //         currentUser: null,
  //         loading: false
  //       });
  //     }
  //   });
  // }
  render() {
    // const { authenticated, loading } = this.state;

    // if (loading) {
    //   return <p>Loading..</p>;
    // }

    return (
      <div id="App">
        <Nav />
        <Sidebar />
        <div id="page-wrap">
          <Router>
            <Route component={Home} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/about' component={About} />
            <Route exact path='/future' component={FutureAnx} />
            <Route exact path='/anxious' component={Current} />
            <Route exact path='/chat' component={Chat} />
            {/* <Route exact path='/signUp' component={SignUp} /> */}
            {/* <Route exact path='/login' component={Login} /> */}
            {/* <Route exact path='/account' component={Account} /> */}
            {/* <PrivateRoute exact path="/account" component={Account} />  */}
        </Router>
      </div>
      </div>
    );
  }
}