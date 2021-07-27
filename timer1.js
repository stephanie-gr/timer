const timers = process.argv.slice(2)

for (const timer of timers) {
  if (Math.sign(timer) !== -1) {
    time = timer * 1000;
    if (!isNaN(time)) {
      setTimeout(() => {
      process.stdout.write('.');
    }, time);
  }
};
};
