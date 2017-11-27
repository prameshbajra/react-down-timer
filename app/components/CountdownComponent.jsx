import React from "react";

import ClockComponent from "ClockComponent";
import CountdownForm from "CountdownForm";

class CountdownComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.handleSetCountDown = this.handleSetCountDown.bind(this);
    }
    handleSetCountDown(seconds) {
        this.setState({
            count: seconds
        });
    }
    render() {
        const { count } = this.state;
        return (
            <div>
                <ClockComponent totalSeconds={count} />
                <CountdownForm onSetCountDown={this.handleSetCountDown} />
            </div>
        );
    }
}

export default CountdownComponent;