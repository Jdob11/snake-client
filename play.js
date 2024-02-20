const {connect} = require("./client");
const {setupInput} = require("./input");

console.log("Connecting ...");
// pass connection object into setupInput to allow for user input
setupInput(connect());

