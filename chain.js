class chain{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length:10,
        }
        this.chain1=Constraint.create(options)  
        World.add(world,this.chain1)
     }
display(){
    var lineA=this.chain1.bodyA.position
    var lineB=this.chain1.bodyB.position
    line(lineA.x,lineA.y,lineB.x,lineB.y)
}
}