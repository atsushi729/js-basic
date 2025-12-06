//-------------------------------------------
// Exception Handling in Synchronous Code (Basics)
//-------------------------------------------
try {
  console.log("Start of try block");
  //   throw new Error("An error occurred!");
  console.log("End of try block");
} catch (error) {
  console.log("Caught an error:", error.message);
} finally {
  console.log("Finally block executed");
}

//-------------------------------------------
// Exception Handling in Asynchronous Code with async/await
//-------------------------------------------
async function syncFunction() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
}

async function init() {
  try {
    const data = await syncFunction();
    console.log("Data fetched successfully:", data);
  } catch (error) {
    console.log("Error fetching data:", error.message);
  } finally {
    console.log("Fetch attempt completed");
  }
}

init();
