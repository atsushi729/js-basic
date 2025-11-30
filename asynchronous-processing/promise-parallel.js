function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`slept for ${ms} milliseconds`);
      resolve(ms);
    }, ms * 500);
  });
}

Promise.all([sleep(1), sleep(1), sleep(3)]).then((results) => {
  console.log("All sleep tasks completed:", results);
});
