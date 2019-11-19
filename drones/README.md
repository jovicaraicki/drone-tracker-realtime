## Install node_modules in frontend(React)

In root folder run

### `npm install`

or

### `yarn install`

## Install node_modules in backend

Go to backend folder, run 

### `npm install`

or

### `yarn install`

## Start backend

Go to backend folder, run

### `npm start`

or

### `yarn start`

### `Application step by step`

Three drone simulators starts (drone1.js, drone2.js, drone3.js in folder drones, send data from ports 8880, 8881 and 8882)

Each drone has array with five values (name, id, latitude, longitude, speed), one value is randomly generated every 10 seconds

Server server.js starts, receive data from drone simulators

From server.js, data is being forwarded to client (if client is connected), via ports 5550, 5551, 5552

When client connects, after 10 seconds, data receive from server, and display on map and text below map

Every 10 seconds, server send new data, and refresh map and text

If any location has same latitude and longitude (randomly generated from server), text in marker info window is white with red background
