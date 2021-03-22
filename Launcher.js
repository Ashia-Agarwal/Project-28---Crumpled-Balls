class Launcher {
    constructor(bodyA, pointB) {
        this.chain = Matter.Constraint.create({length: 15, stiffness: 0.01, bodyA: bodyA, pointB: pointB});
        Matter.World.add(world, this.chain);
    }

    display() {
        strokeWeight(4);
        stroke("black");
        if(this.chain.bodyA) {
            line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.chain.pointB.x, this.chain.pointB.y);
        }
    }

    fly() {
        this.chain.bodyA = null;
    }
}