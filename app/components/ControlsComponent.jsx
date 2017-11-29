import React from "react";
import PropTypes from "prop-types";

class ControlsComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    static propTypes = {
        countDownStatus: PropTypes.string.isRequired,
        onStatusChange: PropTypes.func.isRequired
    }
    onStatusChange = (newStatus) => {
        return () => {
            this.props.onStatusChange(newStatus);
        }
    }
    render() {
        const { countDownStatus } = this.props;
        const renderCorrectButton = () => {
            if (countDownStatus === "started") {
                return <button className="button secondary success" onClick={this.onStatusChange("paused")}>P A U S E</button>
            } else {
                return <button className="button primary success" onClick={this.onStatusChange("started")}>S T A R T</button>
            }
        };
        return (
            <div className="controls">
                {renderCorrectButton()}
                <button className="button hollow alert" onClick={this.onStatusChange("stopped")}>C L E A R</button>
            </div>
        );
    }
}

export default ControlsComponent;