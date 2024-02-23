const IP = 'localhost'
const PORT = 50541
const messageMappings = {
  'q': 'Say: SsSSSsssSSssssss',
  'e': 'Say: Letssss do thisss!'
};
const directionMappings = {
  'w': 'up',
  's': 'down',
  'a': 'left',
  'd': 'right'
};
const directionOpposites = {
  'w': 's',
  's': 'w',
  'a': 'd',
  'd': 'a'
};

module.exports = {
  IP,
  PORT,
  messageMappings,
  directionMappings,
  directionOpposites
}