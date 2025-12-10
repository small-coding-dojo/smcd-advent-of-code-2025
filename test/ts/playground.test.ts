import { expect } from "chai";
import { Playground } from "../../src/ts/playground";

describe ('Playground', () => {
    it ('should create empty Playground', () => {
        var subject = new Playground();

        expect(subject.numberOfJunctionBoxes()).to.equal(0);
    })

    it ('can collect junction boxes', () => {
        var subject = new Playground();

        subject.addJunctionBox({x: 1, y:1, z: 1});
        subject.addJunctionBox({x: 2, y:2, z: 2});

        expect(subject.numberOfJunctionBoxes()).to.equal(2);
    })
});