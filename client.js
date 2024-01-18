const net = require('net');
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');
  
  //confirm connection
  conn.on('connect', () => {
    console.log('Connection Established');
  });

  //set player name
  conn.on('connect', () => {
    conn.write('Name: Egg');
  });

  //console log on data
  conn.on('data', (data) => {
    console.log('data: ', data);
  });

  return conn;
};

module.exports = {
  connect,
};