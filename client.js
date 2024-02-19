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

  conn.on('data', (data) => {
    console.log(data);
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
  });

  conn.on("connect", () => {
    conn.write("Name: EGG");
  });

  conn.on("connect", () => {
    conn.write("Move: up");
  });

  return conn;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
};


const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {
  connect,
  setupInput
};