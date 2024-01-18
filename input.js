let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    console.log("Move: up");
  }
  if (key === 'a') {
    console.log("Move: left");
  }
  if (key === 's') {
    console.log("Move: down");
  }
  if (key === 'd') {
    console.log("Move: right");
  }
  if (key === 'g') {
    console.log("Say: get eaten");
  }
  if (key === 'b') {
    console.log("Say: better luck nextTime");
  }
  if (key === 'l') {
    console.log("Say: LOL");
  }
};

module.exports = {
  setupInput,
};