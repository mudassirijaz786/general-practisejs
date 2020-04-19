// The try...catch statement marks a block of statements to try and specifies a response should an exception be thrown.

try {
  nonExistentFunction();
} catch (error) {
  console.error(error);
  // expected output: ReferenceError: nonExistentFunction is not defined
  // Note - error messages will vary depending on browser
}
