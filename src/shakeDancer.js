var makeShakeDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeShakeDancer.prototype = Object.create(makeDancer.prototype);

makeShakeDancer.prototype.constructor = makeShakeDancer;

makeShakeDancer.prototype.oldStep = makeDancer.prototype.step;

makeShakeDancer.prototype.step = function(){
  this.oldStep();
  this.$node.effect("shake");
};
