const { messageMappings, directionMappings, directionOpposites } = require('./constants');

let connection;
let currentKey;

//set global interval to accept current direction based on key press
let moveInterval = setInterval(() => {
  move(currentKey);
}, 100);

//function to use in if statements to check if key press is valid movement key
const isValidKey = key => ['w', 's', 'a', 'd'].includes(key);

const handleUserInput = function(key) {
  //exit when ctrl + c is pressed
  if (key === '\u0003') {
    moveInterval.clearInterval();
    process.exit();
  }

  //say message when key is pressed
  if (messageMappings[key]) {
    connection.write(messageMappings[key]);
  }

  //run move function only for mapped keys
  if (key === directionOpposites[currentKey]) return;

  // set current key
  if (isValidKey(key)) {
  currentKey = key;
  };
  
};

//function to ensure buttons pressed are moved keys and send move message to server
const move = function(key) {
  if (isValidKey(key)) {
    connection.write(`Move: ${directionMappings[key]}`);
  }
};

//set up to interpret user input
const setupInput = function(conn) {
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
};