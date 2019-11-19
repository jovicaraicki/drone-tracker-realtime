const dgram = require('dgram');
const axios = require('axios');

const host = '127.0.0.1';

const handleError = (err) => {
    if (err) {
       console.log(err);
    }   
}

/* ********************** 
*     Drone 1
********************** */
const app1 = require('express');
const http1 = require('http').Server(app1);
const io1 = require('socket.io')(http1);

const port1 = process.env.PORT || 5550;

const drone1 = dgram.createSocket('udp4');
drone1.bind(port1);

const getApiAndEmit1 = async socket => {
    try {
      const res = await axios.get(
        "http://localhost:8880/"
      );
      const message1 = new Buffer.from(res.data.toString());
      drone1.send(message1, 0, message1.length, port1, host, handleError);

      socket.emit("status1", res.data);

    } catch (error) {
      console.error(`Error: ${error.code}`);
    }
};

io1.on('connection', socket => {
    getApiAndEmit1(socket);
    console.log("Drone 1 connected"), setInterval(
    () => getApiAndEmit1(socket),
    10000
    );
    socket.on("disconnect", () => console.log("Client disconnected"));
})


drone1.on('message', message => {
    console.log('onMessage', `${message}`);
});

http1.listen(port1, () => {
    console.log('Drone server 1 is started!')
});

/* ********************** 
*     Drone 2
********************** */
const app2 = require('express');
const http2 = require('http').Server(app2);
const io2 = require('socket.io')(http2);

const port2 = process.env.PORT || 5551;

const drone2 = dgram.createSocket('udp4');
drone2.bind(port2);

const getApiAndEmit2 = async socket => {
    try {
      const res = await axios.get(
        "http://localhost:8881/"
      );
      const message2 = new Buffer.from(res.data.toString());
      drone2.send(message2, 0, message2.length, port2, host, handleError);

      socket.emit("status2", res.data);

    } catch (error) {
      console.error(`Error: ${error.code}`);
    }
};

io2.on('connection', socket => {
    getApiAndEmit2(socket);
    console.log("Drone 2 connected"), setInterval(
    () => getApiAndEmit2(socket),
    10000
    );
    socket.on("disconnect", () => console.log("Client disconnected"));
})


drone2.on('message', message => {
    console.log('onMessage2', `${message}`);
});

http2.listen(port2, () => {
    console.log('Drone server 2 is started!')
});

/* ********************** 
*     Drone 3
********************** */
const app3 = require('express');
const http3 = require('http').Server(app3);
const io3 = require('socket.io')(http3);

const port3 = process.env.PORT || 5552;

const drone3 = dgram.createSocket('udp4');
drone3.bind(port3);

const getApiAndEmit3 = async socket => {
    try {
      const res = await axios.get(
        "http://localhost:8882/"
      );
      const message3 = new Buffer.from(res.data.toString());
      drone3.send(message3, 0, message3.length, port3, host, handleError);

      socket.emit("status3", res.data);

    } catch (error) {
      console.error(`Error: ${error.code}`);
    }
};

io3.on('connection', socket => {
    getApiAndEmit3(socket);
    console.log("Drone 3 connected"), setInterval(
    () => getApiAndEmit3(socket),
    10000
    );
    socket.on("disconnect", () => console.log("Client disconnected"));
})

drone3.on('message', message => {
    console.log('onMessage3', `${message}`);
});

http3.listen(port3, () => {
    console.log('Drone server 3 is started!')
});