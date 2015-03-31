var makeSineDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.borderRadius = 10;

};

makeSineDancer.prototype = Object.create(makeDancer.prototype);

makeSineDancer.prototype.constructor = makeSineDancer;

makeSineDancer.prototype.oldStep = makeDancer.prototype.step;

makeSineDancer.prototype.step = function(){
  this.oldStep();
  this.left += 5;
  this.top += 20 * Math.sin(this.left/5);
  this.setPosition(this.top, this.left);
};

