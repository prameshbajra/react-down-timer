import React from "react";
import ClockComponent from "ClockComponent";

class CountdownComponent extends React.Component {
    render() {
        return (
            <ClockComponent totalSeconds={1312} />
        );
    }
}

export default CountdownComponent;