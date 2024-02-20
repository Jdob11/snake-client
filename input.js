let connection;
let directionInterval;

const handleUserInput = function (key) {
  //exit when ctrl + c is pressed
  if (key === '\u0003') {
    process.exit();
  }

  //say message when key is pressed
  if (key === 'q') {
    connection.write('Say: SsSSSsssSSssssss');
  } else if (key === 'e') {
    connection.write('Say: Letssss do thisss!');
  }

  if (['w', 's', 'a', 'd'].includes(key)) {
    move(key);
  }
};

//enable continuous movement on key press, and clear interval and set new direction when new key is pressed (change interval to increase or decrease speed/difficulty)
function move(key) {
  clearInterval(directionInterval);

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
}

//set up to interpret user input
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