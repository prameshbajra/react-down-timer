import React from "react";
import PropTypes from "prop-types";

class ClockComponent extends React.Component {
    static defaultProps = {
        totalSeconds: 0
    }
    static propTypes = {
        totalSeconds: PropTypes.number
    }
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
        const { totalSeconds } = this.props;
        return (
            <div className="clock">
                <span className="clock-text">
                    {this.formatSeconds(totalSeconds)}
                </span>
            </div>
        );
    }
}

export default ClockComponent;