let myFirstPromise = new Promise((resolve, reject) => {
  // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
  setTimeout(function () {
    resolve("Success!");
  }, 250);
  reject("failure");
});

myFirstPromise
  .then((successMessage) => {
    console.log("Yay! " + successMessage);
  })
  .catch((failureMessage) => {
    console.log("Oh!" + failureMessage);
  });
