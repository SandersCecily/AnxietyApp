import React, {Component} from "react";
import { BrowserRouter as Link } from 'react-router-dom';
// import Contact from "../Contact";
// import About from "../About/About";
// import FutureAnx from "../FutureAnx/FutureAnx";
// import Current from "../Current/Current";

class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="poster">
                    <h1>Hey. How ya doin'?</h1>
                </div>
                <div className="buttondiv">
                    <Link to="/about"><a href ="/about"><button className="waves-effect waves-light btn-small">I'm good. I'm here to learn.</button></a></Link>
                    <Link to="/anxious"><a href ="/anxious"><button className="waves-effect waves-light btn-small">I'm feeling anxious actually.</button></a></Link>
                    <br></br>
                    <Link to="/future"><a href ="/future"><button className="waves-effect waves-light btn-small">For now okay, but I want help.</button></a></Link>
                    <Link to="/contact"><a href ="/contact"><button className="waves-effect waves-light btn-small">I want to make a suggestion to help.</button></a></Link>
                </div>
            </div>
        );
    }
}

export default Home;