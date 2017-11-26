import React from "react";
import { Route, NavLink } from "react-router-dom";

class NavComponent extends React.Component {
    render() {
        return (
            <div className="top-bar" id="responsive-menu">
                <div className="top-bar-left">
                    <ul className="menu" data-submenu="">
                        <li className="menu-text"><b>Timer Countdown App</b></li>
                        <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
                        <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
                        <li><NavLink exact to="/" activeClassName="active" activeStyle={{ fontWeight: "bold" }}>Timer</NavLink></li>
                        <li><NavLink to="/countdown" activeClassName="active" activeStyle={{ fontWeight: "bold" }}>Countdown</NavLink></li>
                    </ul>
                </div >
                <div className="top-bar-right">
                    <ul className="menu">
                        <li className="menu-text">Created by - </li>
                        <li><b><a href="https://www.github.com/Suzal3579" target="_blank">Pramesh Bajracharya</a></b></li>
                    </ul>
                </div>
            </div >
        );
    }
}

export default NavComponent;