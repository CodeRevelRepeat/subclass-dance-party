var makeSineDancer = function(top, left, timeBetweenSteps){

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("pig");
  // this.initiate = true;

};

makeSineDancer.prototype = Object.create(makeDancer.prototype);

makeSineDancer.prototype.constructor = makeSineDancer;

makeSineDancer.prototype.oldStep = makeDancer.prototype.step;

makeSineDancer.prototype.step = function(){
  this.oldStep();
  if(!this.$node.hasClass("lineup")){
    this.left += 5;
    this.top += 20 * Math.sin(this.left/5);
    this.setPosition(this.top, this.left);
    // if(this.initiate){
    //   this.collide();
    // }
  }
};

