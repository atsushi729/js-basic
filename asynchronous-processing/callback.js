function a(b) {
  setTimeout(function task1() {
    console.log("Task 1 completed");
    b();
  }, 1000);

  console.log("a function end");
}

function b() {
  console.log("b function executed");
}

a(b);
// b();

