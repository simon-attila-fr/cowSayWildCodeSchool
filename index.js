const cow = require('cowsay');
const student = require('./information.js');

console.log(cow.say({
    text : `Hello, I'm ${student.name} from ${student.campus} Campus!`,
    e : "oO",
    T : "U "
}));