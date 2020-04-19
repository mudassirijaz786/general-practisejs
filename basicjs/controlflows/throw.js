// The throw statement throws a user-defined exception. Execution of the current function will stop (the statements after throw won't be executed), and control will be passed to the first catch block in the call stack. If no catch block exists among caller functions, the program will terminate.

getRectArea = (width, height) => {
  if (isNaN(width) || isNaN(height)) {
    throw "Parameter is not a number!";
  }
};

try {
  getRectArea(3, "A");
} catch (e) {
  console.error(e);
  // expected output: "Parameter is not a number!"
}
