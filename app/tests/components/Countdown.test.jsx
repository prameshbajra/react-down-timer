import React from "react";
import ReactDOM from "react-dom";
import expect from "expect";
import $ from "jQuery";
import TestUtils from "react-dom/test-utils";

import CountdownForm from "CountdownForm";

describe("Count Down Form", () => {
    it("should exist", () => {
        expect(CountdownForm).toBeTruthy();
    });
    it("should call onSetDown using spy", () => {
        const spy = expect.createSpy();
        const countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
        const $el = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value = "109";
        TestUtils.Simulate.submit($el.find("form")[0]);

        expect(spy).toHaveBeenCalledWith(109);
    });
});