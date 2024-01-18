const net = require('net');
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on('data', (data) => {
    console.log('data: ', data);
  });

  conn.on('connect', () => {
    console.log('Connection Established');
    conn.write('Name: JBD');
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;
};

module.exports = {
  connect,
};