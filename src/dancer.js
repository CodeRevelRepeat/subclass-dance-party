var makeDancer = function(top, left, timeBetweenSteps){

  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  this.setPosition(top, left);
  this.id = window.dancers.length;
  this.step();
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


// makeDancer.prototype.collide = function(){


//   var distanceFinder = function(dancer1, dancer2){
//     var distanceSum = Math.pow(dancer1.top - dancer2.top, 2) + Math.pow(dancer1.left - dancer2.left, 2);
//     var distance = Math.sqrt(distanceSum);
//     console.log("distance:" + distance)
//     return distance;
//   };


//   var radiusFinder = function(dancer){
//     var result = Math.sqrt(Math.pow(dancer.$node.width(), 2) + Math.pow(dancer.$node.height(), 2));
//     return result;
//   };


//    console.log(window.dancers.length);
//   for(var i=0; i<window.dancers.length; i++){
//      if(this.id && window.dancers[i].id !== this.id){
//       var thatRadius = radiusFinder(window.dancers[i]);
//        var thisRadius = radiusFinder(this);
//       if(0.6 * (thisRadius + thatRadius) > distanceFinder(this, window.dancers[i])){
//         console.log("there is a collision");
//         if(thisRadius >= thatRadius){
//           var bigger = this;
//           window.dancers[i].$node.remove();
//           window.dancers.splice(i, 1);
//         } else {
//           var bigger = window.dancers[i];
//           window.dancers.splice(this.id, 1);
//           this.$node.remove();
//         }
//         console.log("assigning effects");
//         bigger.$node.css({"height": 1.1 * bigger.$node.height(), "width": 1.1 * bigger.$node.width()});
//         return;
//       }

//      }

//   }

// };


