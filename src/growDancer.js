var makeGrowDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.width = 200;
  this.height = 200;
  this.$node.addClass('chicken');

};

makeGrowDancer.prototype = Object.create(makeDancer.prototype);

makeGrowDancer.prototype.constructor = makeGrowDancer;

makeGrowDancer.prototype.oldStep = makeDancer.prototype.step;

makeGrowDancer.prototype.step = function(){
  this.oldStep();
  this.$node.css({"width": this.width, "height": this.height});
  this.width+= 10;
  this.height+= 10;
};

