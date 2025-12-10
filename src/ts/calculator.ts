export class Calculator {
    calculateDistance(pointA: { x: number; y: number; z: number; }, pointB: { x: number; y: number; z: number; }) {
        var dx = pointB.x - pointA.x;
        var dy = pointB.y - pointA.y;
        var dz = pointB.z - pointA.z;
        
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }
}