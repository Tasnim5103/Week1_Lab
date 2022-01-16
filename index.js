const os = require('os');
const path = require('path');

console.log(os.platform());
console.log(path.dirname(__filename));
console.log(os.totalmem());