import React from "react";

import ClockComponent from "ClockComponent";
import CountdownForm from "CountdownForm";

class CountdownComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            countDownStatus: "stopped"
        };
        this.handleSetCountDown = this.handleSetCountDown.bind(this);
    }

    // Gets after props or state is updated ...
    componentDidUpdate(prevProps, prevState) {
        if (this.state.countDownStatus !== prevState.countDownStatus) {
            switch (this.state.countDownStatus) {
            case "started":
                this.startTimer();
                break;
            }
        }
    }
    startTimer() {
        this.timer = setInterval(() => {
            const newCount = this.state.count - 1;
            this.setState({ count: newCount >= 0 ? newCount : 0 });
        }, 1000);
    }
    handleSetCountDown(seconds) {
        this.setState({
            count: seconds,
            countDownStatus: "started"
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