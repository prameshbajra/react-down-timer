import React from "react";

class CountdownComponent extends React.Component {
    constructor(props) {
        super(props);
        this.countDownHandler = this.countDownHandler.bind(this);
    }
    countDownHandler(e) {
        e.preventDefault();
        const secondString = this.refs.seconds.value;
        if (secondString.match(/^[0-9]*$/)) {
            this.props.onSetCountDown(parseInt(secondString, 10));
            this.refs.seconds.value = "";
        }
    }
    render() {
        return (
            <form ref="form" onSubmit={this.countDownHandler} className="countdown-form">
                <input type="text" ref="seconds" placeholder="Enter time in seconds ..." />
                <button className="hollow button success expanded">Start</button>
            </form>
        );
    }
}

export default CountdownComponent;