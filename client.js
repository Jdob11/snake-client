const { CONNREFUSED } = require("dns");
const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // log data recieved on connection to console
  conn.on('data', (data) => {
    console.log(data);
  });

  // log success message when connection is made
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
  });

  // assin 3 letter name or initials to snake
  conn.on("connect", () => {
    conn.write("Name: EGG");
  });

  return conn;
};

module.exports = {
  connect,
};