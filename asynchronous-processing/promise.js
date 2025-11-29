new Promise((resolve, reject) => {
  console.log("Promise started");
  resolve();
})
  .then(function () {
    console.log("Then 1 executed");
  })
  .then(function () {
    console.log("Then 2 executed");
    throw new Error("Error in Then 2");
  })
  .catch(function () {
    console.log("Catch executed");
  })
  .finally(function () {
    console.log("Finally executed");
  });

console.log("Global end");
