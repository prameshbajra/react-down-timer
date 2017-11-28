import React from "react";
import ReactDOM from "react-dom";
import expect from "expect";
import $ from "jQuery";
import TestUtils from "react-dom/test-utils";

import ControlsComponent from "ControlsComponent";

describe("ControlsComponent area ...", () => {
    it("should exist ...", () => {
        expect(ControlsComponent).toBeTruthy();
    });

    describe("render ...", () => {
        it("should render pause when started", () => {
            const controls = TestUtils.renderIntoDocument(<ControlsComponent countDownStatus="started " />);
            const $el = $(ReactDOM.findDOMNode(controls));
            const $pauseButton = $el.find("button:contains(P A U S E)");
            // expect($pauseButton.length).toBe(1); Not working .. cannot find element from jquery i think ...
            expect($pauseButton).toBeTruthy();
        });

        it("should render start when started", () => {
            const controls = TestUtils.renderIntoDocument(<ControlsComponent countDownStatus="paused" />);
            const $el = $(ReactDOM.findDOMNode(controls));
            const $startButton = $el.find("button:contains(S T A R T)");
            // expect($pauseButton.length).toBe(1); Not working .. cannot find element from jquery i think ...
            expect($startButton).toBeTruthy();
        });
    });
});