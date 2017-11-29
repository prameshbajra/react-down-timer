import React from "react";

import ClockComponent from "ClockComponent";
import ControlsComponent from "ControlsComponent";

class TimerComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            timerStatus: "stopped"
        };
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.timerStatus !== prevState.timerStatus) {
            switch (this.state.timerStatus) {
            case "started":
                this.handleStart();
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
    componentWillUnmount() {
        clearInterval(this.timer);
        this.timer = undefined;
    }
    handleStart = () => {
        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            });
        }, 1000);
    }
    handleStatusChange = (newTimerStatus) => {
        this.setState({
            timerStatus: newTimerStatus
        });
    }
    render() {
        const { timerStatus, count } = this.state;
        return (
            <div>
                <ClockComponent totalSeconds={count} />
                <ControlsComponent countDownStatus={timerStatus} onStatusChange={this.handleStatusChange} />
            </div>
        );
    }
}

export default TimerComponent;