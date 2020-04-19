// 1) execution context

printName = () => {
  console.log("Mudassir");
};

findName = () => {
  return printName();
};

sayName = () => {
  return findName();
};

sayName();

// 2) lexical environmanet

findName = () => {
  printName = () => {
    logName = () => {
      console.log("Mudassir");
    };
    logName();
  };
  return printName();
};

sayName = () => {
  return findName();
};

sayName();

// 3) Variable Environment

two = () => {
  var isValid;
  console.log("isValid from function two", isValid);
};

one = () => {
  var isValid = true;
  two();
  console.log("isValid from function one", isValid);
};
var isValid = false;
one();
console.log("isValid from global variable environment", isValid);

// 4) function vs block scope

functionScope = () => {
  for (var i = 1; i < 5; i++) {
    console.log(i);
  }
  console.log("Final", i);
};
functionScope();
blockScope = () => {
  for (let i = 1; i < 5; i++) {
    console.log(i);
  }
  console.log("Final", i); // creates error because i is block scope variable because of use of let keyword
};
blockScope();
