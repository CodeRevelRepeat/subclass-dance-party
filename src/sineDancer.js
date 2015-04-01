var makeSineDancer = function(top, left, timeBetweenSteps){
  this.dx = 10;
  this.dy = 0;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("pig");
};

makeSineDancer.prototype = Object.create(makeDancer.prototype);

makeSineDancer.prototype.constructor = makeSineDancer;

makeSineDancer.prototype.oldStep = makeDancer.prototype.step;

makeSineDancer.prototype.step = function(){
  this.oldStep();
  if(!this.$node.hasClass("lineup")){
    this.left += this.dx;
    this.top += 20 * Math.sin(this.left/5);
    this.setPosition(this.top, this.left);

    if(this.left > $(window).width()){
      this.dx = -10;
    }
    if(this.left < 0){
      this.dx = 10;
    }
  }
};

