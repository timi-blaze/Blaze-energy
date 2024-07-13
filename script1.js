(function (window){
var TimiGreeter = {};
TimiGreeter.name = "Timi ";
TimiGreeter.sayhello = function () {
  console.log('Hello ' + TimiGreeter.name);
}
window.TimiGreeter = TimiGreeter;
})(window);
