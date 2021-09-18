class Link{
    constructor(bodyA,bodyB){
        var lastlink=bodyA.body.bodies.length-2
        this.link=Constraint.create({
            bodyA:bodyA.body.bodies[lastlink],
            bodyB:bodyB,
            stiffness:0.01,
            length:-10
            

        })
        World.add(world,this.link)
    }

}
