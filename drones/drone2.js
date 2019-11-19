const express = require('express');

const app = express();

const position = [
    'Drone2 2222 45.238601 19.843205 41',
    'Drone2 2222 45.235725 19.845681 40',
    'Drone2 2222 45.232238 19.849967 38',
    'Drone2 2222 45.231986 19.854458 48',
    'Drone2 2222 45.229381 19.850349 46'
];

let random;
random = Math.floor(Math.random() * position.length);
setInterval(() => {
     random = Math.floor(Math.random() * position.length);
}, 10000);

app.get('/', function (req, res) {
   res.send(position[random]);
})

app.listen(8881, () => {
    console.log('Drone 2 flying!');
});

module.exports = app;