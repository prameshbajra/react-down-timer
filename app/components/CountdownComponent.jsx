import React from "react";

import ClockComponent from "ClockComponent";
import CountdownForm from "CountdownForm";
import ControlsComponent from "ControlsComponent";

class CountdownComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            countDownStatus: "stopped"
        };
        this.handleSetCountDown = this.handleSetCountDown.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
    }

    // Gets after props or state is updated ...
    componentDidUpdate(prevProps, prevState) {
        if (this.state.countDownStatus !== prevState.countDownStatus) {
            switch (this.state.countDownStatus) {
            case "started":
                this.startTimer();
                break;
            case "stopped":
                this.setState({ count: 0 });
            case "paused":
                clearInterval(this.timer);
                this.timer = undefined;
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
    handleStatusChange(newStatus) {
        this.setState({
            countDownStatus: newStatus
        });
    }
    render() {
        const { count, countDownStatus } = this.state;
        const renderControlArea = () => {
            if (countDownStatus !== "stopped") {
                return <ControlsComponent countDownStatus={countDownStatus} onStatusChange={this.handleStatusChange} />
            } else {
                return <CountdownForm onSetCountDown={this.handleSetCountDown} />
            }
        };
        return (
            <div>
                <ClockComponent totalSeconds={count} />
                {renderControlArea()}
            </div>
        );
    }
}

export default CountdownComponent;