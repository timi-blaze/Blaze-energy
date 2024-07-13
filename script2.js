(function () {
  var OlaGreeter = {};
  OlaGreeter.name = "Olamide";
  OlaGreeter.sayhi = function () {
    console.log('Hi ' + OlaGreeter.name);
  }
window.OlaGreeter = OlaGreeter;
})(window);



