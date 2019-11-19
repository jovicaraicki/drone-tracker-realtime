const express = require('express');

const app = express();

const position = [
    'Drone3 3333 45.229957 19.800285 30',
    'Drone3 3333 45.235456 19.806842 34',
    'Drone3 3333 45.233820 19.815493 38',
    'Drone3 3333 45.238079 19.810747 36',
    'Drone3 3333 45.236120 19.818530 31'
];

let random;
random = Math.floor(Math.random() * position.length);
setInterval(() => {
     random = Math.floor(Math.random() * position.length);
}, 10000);

app.get('/', function (req, res) {
   res.send(position[random]);
})

app.listen(8882, () => {
    console.log('Drone 3 flying!');
});

module.exports = app;