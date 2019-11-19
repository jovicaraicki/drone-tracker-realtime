const express = require('express');

const app = express();

const position = [
    'Drone1 1111 45.228950 19.811128 51',
    'Drone1 1111 45.226379 19.824142 57',
    'Drone1 1111 45.227224 19.829297 59',
    'Drone1 1111 45.232185 19.828762 65',
    'Drone1 1111 45.232328 19.833815 63'
];

let random;
random = Math.floor(Math.random() * position.length);
setInterval(() => {
     random = Math.floor(Math.random() * position.length);
}, 10000);

app.get('/', function (req, res) {
   res.send(position[random]);
})

app.listen(8880, () => {
    console.log('Drone 1 flying!');
});

module.exports = app;