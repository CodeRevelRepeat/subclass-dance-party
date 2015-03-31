var makeDancer = function(top, left, timeBetweenSteps){

  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  this.step();
  this.setPosition(top, left);
};

makeDancer.prototype.step = function(){
  if(this.$node.hasClass("lineup")){
    this.setPosition(300, this.left);
  }
  setTimeout(this.step.bind(this), this.timeBetweenSteps);

};

makeDancer.prototype.setPosition = function(top, left){
  this.$node.css({top: top, left: left});
};


makeDancer.prototype.collide = function(){

//loop through window.dancer
//
// var positionFinder = function(dancer){

//      var topPoint = dancer.top + dancer.$node.css("height")/2;
//      var bottomPoint = dancer.top - dancer.$node.css("height")/2;
//      var leftPoint = dancer.left - dancer.$node.css("width")/2;
//      var rightPoint = dancer.left + dancer.$node.css("width")/2;

//      return [topPoint, bottomPoint, leftPoint, rightPoint];

// };

var distanceFinder = function(dancer1, dancer2){
  var distanceSum = Math.pow(dancer1.top - dancer2.top, 2) + Math.pow(dancer1.left - dancer2.left, 2);
  var distance = Math.sqrt(distanceSum);
  return distance;

};

var radiusFinder = ///continue here

var thisPosition = positionFinder(this);

for(var i=0; i<window.dancers.length; i++){
   if(window.dancers[i] !== this){
    // var thatPosition = positionFinder(window.dancers[i]);





   }


}

//if dancer is not this
//then check if overlap
//    if overlap
//        then check size
//            bigger dancer gets bigger and smaller dancer disappears

};


