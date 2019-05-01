import React from "react";
import { slide as Menu } from 'react-burger-menu';

export default props => {

    return (
        <Menu right>
            <a className="menu-item waves-effect waves-light" href="/">
                <i className="material-icons left">home</i>Home</a>
            <a className="menu-item waves-effect waves-light" href="/about">
                <i className="material-icons left">info</i>About</a>
            <a className="menu-item waves-effect waves-light" href="/anxious">
                <i className="material-icons left">sentiment_dissatisfied</i>I'm having anxiety</a>
            <a className="menu-item waves-effect waves-light" href="/future">
                <i className="material-icons left">restore</i>Long Term Help</a>
            <a className="menu-item waves-effect waves-light" href="/contact">
                <i className="material-icons left">comment</i>Contact</a>
            <a href="/chat" className="menu-item waves-effect waves-light">
                <i className="material-icons left">face</i>Chatroom</a>
        </Menu>
    )
};

