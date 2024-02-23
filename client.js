const net = require("net");
const { IP, PORT } = require('./constants');
const readline = require('readline');

const rl = readline.createInterface({// setup standard user input/output interface
  input: process.stdin,
  output: process.stdout
});

const promptForInitials = (callback) => {//function to ask user for initials, then call callback with initials as argument
  rl.question('Enter your initials (Maximum 3 characters): ', (name) => {
    rl.close();
    callback(name);
  });
};

const connect = function(callback) {// establishes a connection with the game server
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding("utf8");// interpret incoming data as text

  conn.on('data', (data) => {// log data received on connection to console
    console.log(data);
  });

  conn.on('connect', () => {// log success message when connection is made
    console.log('Successfully connected to game server');// run prompt for initials and write to server when connection is established
    promptForInitials((initials) => {
      conn.write(`Name: ${initials}`);
      callback(conn, initials);// pass connection and initials to the callback
    });
  });
};

module.exports = {
  connect,
};