class Slingshot{
constructor(A,B){
var option={
bodyA:A,
pointB:B,
stiffness:0.05,
length:5
}
this.pointB=B;

this.chain=Constraint.create(option);
World.add(world,this.chain);
}
display(){
    if(this.chain.bodyA){
var posA=this.chain.bodyA.position;

//BODY HAS DIFFERENT PROPERTIES LIKE ANGLE,B IS STORING ONLY X AND Y
 var posB=this.pointB;

strokeWeight(4);
line(posA.x,posA.y,posB.x,posB.y);
}
}
}
 fly(){
    this.chain.bodyA=null;
}