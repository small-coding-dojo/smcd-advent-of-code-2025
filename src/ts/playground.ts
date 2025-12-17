import { Calculator } from "./calculator";

export class Playground{
    numberOfJunctionBoxes() {
        return this.junctionBoxes.length;
    }
    junctionBoxes: { x: number; y: number; z: number; }[] = [];
    theNumberOfCircuits : number = 0;
    addJunctionBox(junctionBox: { x: number; y: number; z: number; }){
        this.junctionBoxes.push(junctionBox);
        ++this.theNumberOfCircuits;
    }

    numberOfCircuits() {
        return this.theNumberOfCircuits;
    }

    connect(x: number) {
        if( x == 2 ) {
            --this.theNumberOfCircuits;
        }
        --this.theNumberOfCircuits;
    }

    findClosestConnection(){
        const calculator = new Calculator();

        let shortestDistance = Infinity;
        let result: { x: number; y: number; z: number; }[] = [];
        for(let i = 0; i < this.junctionBoxes.length; i++) {
            for(let j = i + 1; j < this.junctionBoxes.length; j++) {
                let distance = calculator.calculateDistance(this.junctionBoxes[i], this.junctionBoxes[j]);
                if (distance < shortestDistance) {
                    shortestDistance = distance;
                    result = [this.junctionBoxes[i], this.junctionBoxes[j]];
                }
            }
        }
        return result;
    }
}