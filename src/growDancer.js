var makeGrowDancer = function(top, left, timeBetweenSteps){
  this.width = 200;
  this.height = 200;
  this.timestep = 1;
  this.dx = 50;
  this.dy = -50;
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass('chicken');
  
};

makeGrowDancer.prototype = Object.create(makeDancer.prototype);

makeGrowDancer.prototype.constructor = makeGrowDancer;

makeGrowDancer.prototype.oldStep = makeDancer.prototype.step;

makeGrowDancer.prototype.step = function(){
  this.oldStep();
  if(!this.$node.hasClass("lineup")){
    this.left = this.left + this.dx * Math.cos(this.timestep);
    this.top = this.top + this.dy * Math.sin(this.timestep/10);
    this.setPosition(this.top, this.left);
    this.timestep++;
    this.timeBetweenSteps -= 5;
    if(this.timeBetweenSteps < 40){
      this.$node.effect("explode");
      this.$node.remove();
    }
  }
};

