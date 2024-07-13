// String concatenation 
//var string = "Hello";
//string += " world";
 // +=" World";
//console.log(string + "!");

// Regular math operators: +, -, *, /
//console.log( (5 + 4) / 3 );
//console.log(undefined / 5);
//function test1 (a) {
  //console.log(a / 5 );
//}
//test1();

// Equality
//var x = 4, y = 4
//if (x == y) {
  //console.log("Good boy");
//}


//x = "4";
//if (x == y) {
  //console.log("x='4' is equal to y=4");
//}
// Strict Equality 
//if  (x === y) {
  //console.log("strict: x='4' is equal to y=4");
//}
//else {
  //console.log("strict: x='4' is not equal to y=4")
//}

// if statement (all false)
//if ( false|| null || undefined || "" || 0 || NaN) {
  //console.log("This line won't ever execute");
//}
//else {
  //console.log ("All false");
//}

// (if statement (all true)
//if (true && "hello" && 1 && -1 && "false" ) {
  //console.log("All true"); 
//}

// **** Best practice for {} style

//function a() {
  //return {
    //name: 'Timi'
  //};
//}
//console.log(a());

// for loop
//var sum = 0;
//for (var i = 0; i < 10; i++) {
  //console.log(i);
  //sum = sum + i;
//}
//console.log("sum of 0 through 9 is: " + sum);

// Default values 
 //function orderchickenwith(sidedish) {
 //sidedish = "whatever" || sidedish; 
  //console.log("chicken with " + sidedish);
 //}

   //orderchickenwith('salad');
//orderchickenwith();

// object creation
//var company = new Object();
//company.name = "Facebook";
//company.ceo = new Object();
//company.ceo.firstName = 'mark';
//company.ceo.favcolor = 'blue';

//console.log(company);
//console.log('company ceo name is ' + company.ceo.firstName);

//console.log(company['name']);
//var stockpropname = 'stock of company';
//company[stockpropname] = 110;

//console.log('stock price is: ' + company[stockpropname]);

// Better way: object literal
//var Facebook = {
  //name: "facebook",
 // ceo: {
   // firstName: "mark",
    //favColor: "blue"
  //}, 
  //'Stock of company': 110
//};

//console.log(Facebook.ceo.firstName );

// Functions are First-class data types
// Functions Are objects
//function multiply(x, y) {
  //return x * y;
//}
//console.log(multiply(5, 3));
//multiply.version = "v.1.0.0";
//console.log(multiply.version);

// function factory 
//function makeMultiplier(multiplier) {
  //var myFunc = function (x) {
    //return multiplier * x;
  //};

  //return myFunc; 
//} 

//var multiplyBy3 = makeMultiplier(3);
//console.log(multiplyBy3(10));
//var doubleAll = makeMultiplier(2);
//console.log(doubleAll(100));


// passing functions as arguments 
//function doOperation(x, operation) {
  //return operation(x);
//}

//var result = doOperation(5, multiplyBy3);
//console.log(result);
//result = doOperation(100, doubleAll);
//console.log(result);

// copy by Refrence vs by value
//var a = 7;
//var b = a;
//console.log('a:' + a);
//console.log("b:" + b); 

//b = 5;
//console.log("after b update:");
//console.log("a: " + a);
//console.log("b: " + b);

//var a = { x: 7 };
//var b = a;
//console.log(a);
//console.log(b);

//b.x = 5;
//console.log("after b.x update:");
//console.log(a);
//console.log(b);

// pass by refrence vs by value
//function changePrimitive(primValue) {
 // console.log("in changePrimitive...");
  //console.log("before:");
  //console.log(primValue);

  //primValue = 5;
  //console.log("after:");
  //console.log(primValue);
//}

//var value = 7;
//changePrimitive(value); // primValue = value
//console.log("after changePrimitive, orig value:")
//console.log(value);

//function changeObjective(objValue) {
  //console.log("in changeObject...");
  //console.log('before');
  //console.log(objValue);

  //objValue.x = 5;
  //console.log('after:');
  //console.log(objValue);
//}

//value = { x: 7 };
//changeObjective(value); // objValue = value
//console.log("after changeObject, orig value");
//console.log(value);

// Function constructors
//function Circle (radius) {
 //this.radius = radius;

 //Circle.prototype.getArea = 
 //function () {
  //return Math.PI * Math.pow(this.radius, 2);
 //};
//}

//var myCircle = new Circle(10);
//console.log(myCircle); 

//var myOtherCircle = new Circle(20);
//console.log(myOtherCircle);

// object literals and "this"
//var literalCircle = {
  //radius: 10,
 
  //getArea: function () {
    //var self = this;
    //console.log(this);

    //var increaseRadius = function () {
      //self.radius = 20;
    //};
    //increaseRadius();
    //console.log(this.radius);

    //return Math.PI * Math.pow(this.radius, 2);
  //}
//};
//console.log(literalCircle.getArea());

// Arrays
//var array = new Array();
//array[0] = 'yaakov';
//array[1] = 2;
//array[2] = function (name) {
  //console.log('Hello ' + name);
//};
//array[3] = {course: " HTml, CSS & JS"};
//console.log(array);
//array[2](array[0]);
//console.log(array[3].course);

// short hand array creation
//var names = ["Timi", "Olamide", "Elijah"];
//console.log(names);

//for (var i = 0; i < names.length; i++) {
  //console.log("hello " + names[i]);
//};
//names[100] = "Jim";
//for (var i = 0; i < names.length; i++) {
//console.log("Hello " + names[i]);
//}                 

//var names2 = ["Yakoov", 'John','Joe'];

//var myObj = {
  //name: "Timi",
  //course:"HTML/ CSS/ JS",
  //plartform: 'Coursera'
//};
//for (var prop in myObj) {
  //console.log(prop + ":" + myObj[prop]);
//}

//for (var name in names2) {
 // console.log("Hello " + names2[name]);
//};

//var names3 = ["Timi", 'olamide', 'Elijah'];

//for (var surname in names3)
  //console.log("Hello " + names3[surname]);


// closures

function makeMultiplier (multiplier) {
  //var multiplier = 2;
  function b() {
    console.log("multiplier is:" + multiplier);
  }
  b();
  return (
    function (x) {
      return multiplier * x;
    }
  );
}
var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));
 


