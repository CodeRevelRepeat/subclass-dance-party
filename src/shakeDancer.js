var makeShakeDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("cow");
};

makeShakeDancer.prototype = Object.create(makeDancer.prototype);

makeShakeDancer.prototype.constructor = makeShakeDancer;

makeShakeDancer.prototype.oldStep = makeDancer.prototype.step;

makeShakeDancer.prototype.rotate = function(){
  this.$node.rotate({
  angle: 0,
  animateTo: 360,
  callback: "rotation"
  });

}

makeShakeDancer.prototype.step = function(){
  this.oldStep();
  // this.$node.effect("explode");
  this.rotate();

};
