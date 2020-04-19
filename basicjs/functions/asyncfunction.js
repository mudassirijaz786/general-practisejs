// The async function declaration defines an asynchronous function — a function that is an AsyncFunction object. Asynchronous functions operate in a separate order than the rest of the code via the event loop, returning an implicit Promise as its result. But the syntax and structure of code using async functions looks like standard synchronous functions.
function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: 'resolved'
}

asyncCall();
