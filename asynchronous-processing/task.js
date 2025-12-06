// ----------------------------------------------------------
// Overview of Asynchronous Processing in JavaScript:
// ----------------------------------------------------------
// This code demonstrates how JavaScript's event loop schedules
// synchronous code, microtasks (Promise callbacks), and macrotasks (setTimeout).
//
// Execution order rules:
// 1. Run all synchronous code immediately.
// 2. Process all microtasks (Promise.then, async/await continuations).
// 3. Run macrotasks (setTimeout, setInterval, I/O callbacks).
//
// As a result:
// - The Promise constructor executes immediately (synchronous).
// - The Promise `.then` callbacks run as microtasks after synchronous code.
// - The `setTimeout(..., 0)` callback runs later as a macrotask, *after* microtasks.

// ------------------------------
// 1. Promise (synchronous + microtasks)
// ------------------------------
new Promise((resolve, reject) => {
  // Synchronous: executed immediately.
  console.log("Promise started");
  resolve(); // Schedules the .then callbacks as microtasks.
})
  .then(() => {
    // Microtask 1
    console.log("Then 1 executed");
  })
  .then(() => {
    // Microtask 2
    console.log("Then 2 executed");
  })
  .finally(() => {
    // Microtask 3
    console.log("Finally executed");
  });

// ------------------------------
// 2. Macrotask (setTimeout)
// ------------------------------
setTimeout(() => {
  // Macrotask: executed after all microtasks have finished.
  console.log("Timeout executed");
}, 0);

// ------------------------------
// 3. Synchronous code
// ------------------------------
console.log("Global end");

// ----------------------------------------------------------
// Microtasks explanation:
// ----------------------------------------------------------
// Microtasks are high-priority asynchronous tasks that execute
// immediately after synchronous code but before any macrotasks.
// Examples: Promise.then, async/await continuations, queueMicrotask().
// They run to completion before the event loop moves to macrotasks.

// ----------------------------------------------------------
// Macrotasks explanation:
// ----------------------------------------------------------
// Macrotasks are lower-priority asynchronous tasks that run after
// all microtasks finish. Examples include setTimeout, setInterval,
// setImmediate (Node.js), and I/O callbacks.
// Even setTimeout(..., 0) runs *after* Promise microtasks.
