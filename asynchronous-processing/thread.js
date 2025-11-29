function sleep(ms) {
  const startTime = Date.now();
  while (Date.now() - startTime < ms) {}
  console.log(`slept for ${ms} milliseconds`);
}

console.log("Start");
sleep(2000);
console.log("End");
