export class Playground{
    numberOfJunctionBoxes() {
        return this.junctionBoxes.length;
    }
    junctionBoxes: { x: number; y: number; z: number; }[] = [];
    addJunctionBox(junctionBox: { x: number; y: number; z: number; }){
        this.junctionBoxes.push(junctionBox);
    }
}