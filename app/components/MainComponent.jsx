import React from "react";
import { Route, Switch } from "react-router-dom";

import NavComponent from "NavComponent";
import TimerComponent from "TimerComponent";
import CountdownComponent from "CountdownComponent";

class MainComponent extends React.Component {
    render() {
        return (
            <div>
                <NavComponent />
                <br /><br />
                <div className="medium-4 large-4 small-centered">
                    <Switch>
                        <Route path="/countdown" component={CountdownComponent} />
                        <Route exact path="/" component={TimerComponent} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default MainComponent;