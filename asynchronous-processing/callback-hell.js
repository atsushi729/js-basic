// ==========================================
// Pattern A: Sequential Execution (Callback Hell)
// Description:
//  - Tasks depend on each other.
//  - The next task starts only after the previous one finishes.
//  - Total time = Sum of all delays (1s + 0.5s + 2s = 3.5s)
// ==========================================
function runSequentialTasks() {
  console.log("=== Pattern A: Sequential Execution Started ===");

  function task1(callback) {
    setTimeout(function () {
      console.log("Task 1 completed (1.0s)");
      callback();
    }, 1000);
  }

  function task2(callback) {
    setTimeout(function () {
      console.log("Task 2 completed (0.5s)");
      callback();
    }, 500);
  }

  function task3(callback) {
    setTimeout(function () {
      console.log("Task 3 completed (2.0s)");
      console.log("=== Pattern A: All tasks finished ===");
    }, 2000);
  }

  // execution: Callback Hell / Pyramid of Doom
  task1(function () {
    task2(function () {
      task3(function () {
        // This block runs after task 3 is done.
      });
    });
  });
}

// ==========================================
// Pattern B: Parallel Execution (Non-Blocking)
// Description:
//  - Tasks run independently.
//  - All tasks start simultaneously.
//  - Total time = The duration of the longest task (2.0s)
// ==========================================
function runParallelTasks() {
  console.log("=== Pattern B: Parallel Execution Started ===");

  function task4() {
    setTimeout(() => {
      console.log("Task 4 completed (2.0s)");
    }, 2000);
  }

  function task5() {
    setTimeout(() => {
      console.log("Task 5 completed (1.0s)");
    }, 1000);
  }

  function task6() {
    setTimeout(() => {
      console.log("Task 6 completed (1.5s)");
    }, 1500);
  }

  // execution: Fire and Forget
  task4();
  task5();
  task6();

  // This line runs immediately because setTimeout is non-blocking
  console.log("=== Main thread: All tasks have been scheduled ===");
}

// ==========================================
// Execution Control
// Uncomment the function you want to test.
// ==========================================

// runSequentialTasks(); // Run Pattern A
runParallelTasks(); // Run Pattern B
