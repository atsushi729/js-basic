// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     for (let key in data) {
//       console.log(`${key}: ${data[key]}`);
//     }
//   });

// const fetchData = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/2");
//   const data = await response.json();
//   for (let key in data) {
//     console.log(`${key}: ${data[key]}`);
//   }
// };

async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  for (let key in data) {
    console.log(`${key}: ${data[key]}`);
  }
}

fetchData();
