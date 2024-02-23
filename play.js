const {connect} = require("./client");
const {setupInput} = require("./input");

console.log("Connecting ...");
// function call to create connection object that allows user input and readline initials input by user
connect((conn, initials) => {
  setupInput(conn, initials);
});

