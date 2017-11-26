import React from "react";
import { Route, Switch } from "react-router-dom";

import NavComponent from "NavComponent";

class MainComponent extends React.Component {
    render() {
        return (
            <div>
                <NavComponent />
                <br /><br />
                <h1 className="text-center">Welcome to React Boiler Plate .. <br />Get Started</h1>
            </div>
        );
    }
}

export default MainComponent;