var makeGrowDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.borderRadius = 10;

};

makeGrowDancer.prototype = Object.create(makeDancer.prototype);

makeGrowDancer.prototype.constructor = makeGrowDancer;

makeGrowDancer.prototype.oldStep = makeDancer.prototype.step;

makeGrowDancer.prototype.step = function(){
  this.oldStep();
  this.$node.css({"border-radius": this.borderRadius, "border-width": this.borderRadius});
  this.borderRadius++;
};

