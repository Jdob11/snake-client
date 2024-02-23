const { messageMappings, directionMappings, directionOpposites } = require('./constants');

let connection;
let currentKey;

const isValidKey = function(key) {//function to use in if statements to check if key press is valid movement key
  return ['w', 's', 'a', 'd'].includes(key);
};

const handleUserInput = function(key) {//function to set up how user can interact with server
  if (key === '\u0003') {//exit when ctrl + c is pressed
    process.exit();
  }
  if (messageMappings[key]) {//say message when appropriate key is pressed
    connection.write(messageMappings[key]);
  }
  if (key !== directionOpposites[currentKey] && isValidKey(key)) {//set current direction key if key pressed is not opposite of existing direction and is a valid movement key
    currentKey = key;
  };
  
};

const move = function() {//function to ensure current direction key is valid movement key and send move message to server
  if (isValidKey(currentKey)) {
    connection.write(`Move: ${directionMappings[currentKey]}`);
  }
};

const setupInput = function(conn) {//set up to interpret user input
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

setInterval(move, 100);//set global interval to accept current direction based on key press

module.exports = {
  setupInput,
};