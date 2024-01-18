const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = function() {
  const stdin = process.stdin;
  stdin.on('data', (key) => {
    process.stdout.write(key);
    if (key === 'w') {
      console.log('W');
    }
    if (key === 's') {
      console.log('S');
    }
    if (key === 'a') {
      console.log('A');
    }
    if (key === 'd') {
      console.log('D');
    }
    if (key === '\u0003') {
      process.exit();
    }
  });
};

module.exports = {
  setupInput,
};