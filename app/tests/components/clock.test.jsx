import React from "react";
import ReactDOM from "react-router-dom";
import expect from "expect";
import { jQuery as $ } from "jQuery";
import TestUtils from "react-dom/test-utils";

import ClockComponent from "ClockComponent";

describe("Clock", () => {
    it("Should exist", () => {
        expect(ClockComponent).toBeTruthy();
    });

    describe("FormatSeconds() testing ...", () => {
        it("Should format seconds", () => {
            const clock = TestUtils.renderIntoDocument(<ClockComponent />);
            const seconds = 615;
            const expected = "10:15";
            const actual = clock.formatSeconds(seconds);

            expect(actual).toBe(expected);
        });

        it("Should format seconds when min and sec are less than 10", () => {
            const clock = TestUtils.renderIntoDocument(<ClockComponent />);
            const seconds = 61;
            const expected = "01:01";
            const actual = clock.formatSeconds(seconds);

            expect(actual).toBe(expected);
        });
    });
});
