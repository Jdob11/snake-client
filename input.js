const { messageMappings, directionMappings } = require('./constants');

let connection;
let directionInterval;

const handleUserInput = function (key) {
  //exit when ctrl + c is pressed
  if (key === '\u0003') {
    process.exit();
  }

  //say message when key is pressed
  if (messageMappings[key]) {
    connection.write(messageMappings[key]);
  }

  //run move function only for mapped keys
  if (['w', 's', 'a', 'd'].includes(key)) {
    move(key);
  }
};

//enable continuous movement on key press, and clear interval and set new direction when new key is pressed (change interval to increase or decrease speed/difficulty)
function move(key) {
  clearInterval(directionInterval);

  if (directionMappings[key]) {
    directionInterval = setInterval(() => {
      connection.write(`Move: ${directionMappings[key]}`);
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