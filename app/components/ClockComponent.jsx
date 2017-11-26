import React from "react";

class ClockComponent extends React.Component {
    formatSeconds(totalSeconds) {
        let seconds = totalSeconds % 60;
        let minutes = Math.floor(totalSeconds / 60);
        if (seconds < 10)
            seconds = "0" + seconds;
        if (minutes < 10)
            minutes = "0" + minutes;
        return `${minutes}:${seconds}`;
    }
    render() {
        return (
            <div>Clock</div>
        );
    }
}

export default ClockComponent;