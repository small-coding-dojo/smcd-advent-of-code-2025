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
        --this.theNumberOfCircuits;
    }
}