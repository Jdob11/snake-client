const { CONNREFUSED } = require("dns");
const net = require("net");
const { IP, PORT } = require('./constants');
const readline = require('readline');

// setup standard user input/output interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//function to ask user for initials, then call callback with initials as argument
const promptForInitials = (callback) => {
  rl.question('Enter your initials (Maximum 3 characters): ', (name) => {
    rl.close();
    callback(name);
  });
};

// establishes a connection with the game server
const connect = function (callback) {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // log data received on connection to console
  conn.on('data', (data) => {
    console.log(data);
  });

  // log success message when connection is made
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
  });

  // run prompt for initals and write to server when connection is established
  conn.on("connect", () => {
    promptForInitials((initials) => {
      conn.write(`Name: ${initials}`);
      // pass connection and initials to the callback
      callback(conn, initials);
    });
  });
};


module.exports = {
  connect,
};