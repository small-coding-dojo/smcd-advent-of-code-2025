import { expect } from "chai";
import { Calculator } from "../../src/ts/calculator";

describe ('Calculator', () => {
    it ('when distance is 1', () => {
        var subject = new Calculator();
        var pointA = { x: 0, y: 0, z: 0 };
        var pointB = { x: 1, y: 0, z: 0 };
        var actual = subject.calculateDistance(pointA, pointB);
        expect(actual).to.equal(1.0);
    })

    it ('when distance is sqrt(3)', () => {
        var subject = new Calculator();
        var pointA = { x: 0, y: 0, z: 0 };
        var pointB = { x: 1, y: 1, z: 1 };
        var actual = subject.calculateDistance(pointA, pointB);
        expect(actual).to.equal(Math.sqrt(3.0));
    })
});