let connection;

let directionInterval;

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }

  if (directionInterval) {
    clearInterval(directionInterval);
  }

  if (key === 'w') {
    directionInterval = setInterval(() => {
      connection.write('Move: up');
    }, 75);
  } else if (key === 's') {
    directionInterval = setInterval(() => {
      connection.write('Move: down');
    }, 75);
  } else if (key === 'a') {
    directionInterval = setInterval(() => {
      connection.write('Move: left');
    }, 75);
  } else if (key === 'd') {
    directionInterval = setInterval(() => {
      connection.write('Move: right');
    }, 75);
  }
};


const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {
  setupInput,
}