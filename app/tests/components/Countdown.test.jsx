import React from "react";
import ReactDOM from "react-dom";
import expect from "expect";
import $ from "jQuery";
import TestUtils from "react-dom/test-utils";

import CountdownForm from "CountdownForm";
import CountdownComponent from "CountdownComponent";

describe("Count Down Form ...", () => {
    it("should exist - CountdownForm ...", () => {
        // Checking if CountDownForm exists or not ...
        expect(CountdownForm).toBeTruthy();
    });
    it("should exist - CountdownComponent ... ", () => {
        // Checking if CountdownComponent exists or not ...
        expect(CountdownComponent).toBeTruthy();
    });

    describe("HandleSetCountdown() testing ...", () => {
        const countdown = TestUtils.renderIntoDocument(<CountdownComponent />);
        countdown.handleSetCountDown(2);
        it("should handle its work ...", (done) => {
            expect(countdown.state.count).toBe(2);
            expect(countdown.state.countDownStatus).toBe("started");
            setTimeout(() => {
                expect(countdown.state.count).toBe(1);
                // setInterval() is async in nature,
                //  and by default mocha do not support this so,
                //  done() is passed as an arguement in it() function 
                // and is called after the process is done ...
                done();
            }, 1001);
        });
        it("should not go to negative numbers (timer zero vannda tala jana vayena !)...", (done) => {
            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
                done();
            }, 4000);
        })
    });

    // If interested use "jest" to use spies and do testing ... For expect 21+ createSpy is not working !!

    // it("should call onSetDown using spy", () => {
    //     const spy = expect.createSpy();
    //     const countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
    //     const $el = $(ReactDOM.findDOMNode(countdownForm));

    //     countdownForm.refs.seconds.value = "109";
    //     TestUtils.Simulate.submit($el.find("form")[0]);

    //     expect(spy).toHaveBeenCalledWith(109);
    // });

});