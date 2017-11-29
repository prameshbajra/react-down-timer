import React from "react";
import ReactDOM from "react-dom";
import expect from "expect";
import $ from "jQuery";
import TestUtils from "react-dom/test-utils";

import TimerComponent from "TimerComponent";

describe("TimerComponent ...", () => {
    it("should exist ...", () => {
        expect(TimerComponent).toBeTruthy();
    });
    it("should start timer having start button ...", (done) => {
        const timer = TestUtils.renderIntoDocument(<TimerComponent />);
        timer.handleStatusChange("started");
        expect(timer.state.count).toBe(0);
        setTimeout(() => {
            expect(timer.state.timerStatus).toBe("started");
            expect(timer.state.count).toBe(1);
            done();
        }, 1001);
    });
    it("should be paused when paused is clicked ...", (done) => {
        const timer = TestUtils.renderIntoDocument(<TimerComponent />);
        timer.setState({ count: 10 });
        timer.handleStatusChange("started");
        timer.handleStatusChange("paused");
        expect(timer.state.count).toBe(10);
        setTimeout(() => {
            expect(timer.state.timerStatus).toBe("paused");
            expect(timer.state.count).toBe(10);
            done();
        }, 1000);
    });
    it("should be stopped when stop is clicked ...", (done) => {
        const timer = TestUtils.renderIntoDocument(<TimerComponent />);
        timer.setState({ count: 10 });
        timer.handleStatusChange("started");
        timer.handleStatusChange("stopped");
        setTimeout(() => {
            expect(timer.state.timerStatus).toBe("stopped");
            expect(timer.state.count).toBe(0);
            done();
        }, 1000);
    });
});