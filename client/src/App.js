import React, { useState, useEffect } from 'react';
import './App.css';
import socketIOClient from 'socket.io-client';
import Header from './components/Header';
import MapContainer from './components/MapContainer';

function App() {
  const [open, setOpen] = useState(false);
  const [drone1, setDrone1] = useState('');
  const [drone2, setDrone2] = useState('');
  const [drone3, setDrone3] = useState('');
  const [latLng, setLatLng] = useState([]);

  useEffect(() => {
    let latLngArray = [];
    const socketDrone1 = socketIOClient('http://localhost:5550/');
    socketDrone1.on('status1', data => {
      const res = data.split(' ');
      setDrone1({ name: res[0], id: res[1], lat: parseFloat(res[2]), lng: parseFloat(res[3]), speed: parseFloat(res[4]) });
      latLngArray = [];
      latLngArray.push({ name: res[0], id: res[1], lat: parseFloat(res[2]), lng: parseFloat(res[3]), speed: parseFloat(res[4]) });
    });
    const socketDrone2 = socketIOClient('http://localhost:5551/');
    socketDrone2.on('status2', data => {
      const res = data.split(' ');
      setDrone2({ name: res[0], id: res[1], lat: parseFloat(res[2]), lng: parseFloat(res[3]), speed: parseFloat(res[4]) });
      latLngArray.push({ name: res[0], id: res[1], lat: parseFloat(res[2]), lng: parseFloat(res[3]), speed: parseFloat(res[4]) });
    });
    const socketDrone3 = socketIOClient('http://localhost:5552/');
    socketDrone3.on('status3', data => {
      const res = data.split(' ');
      setDrone3({ name: res[0], id: res[1], lat: parseFloat(res[2]), lng: parseFloat(res[3]), speed: parseFloat(res[4]) });
      latLngArray.push({ name: res[0], id: res[1], lat: parseFloat(res[2]), lng: parseFloat(res[3]), speed: parseFloat(res[4]) });
      setLatLng(latLngArray);
    });
  }, []);

  const onToggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="App">
      <Header />
      <MapContainer
        lat={45.231288} 
        lng={19.821901}
        latLng={latLng}
        onToggleOpen={onToggleOpen}
      />
      <div style={{ marginTop: '50px' }}>
        {drone1 && <p>{drone1.name} {drone1.id} {drone1.lat} {drone1.lng} {drone1.speed}mph</p>}
        {drone2 && <p>{drone2.name} {drone2.id} {drone2.lat} {drone2.lng} {drone2.speed}mph</p>}
        {drone3 && <p>{drone3.name} {drone3.id} {drone3.lat} {drone3.lng} {drone3.speed}mph</p>}
      </div>
    </div>
  );
}

export default App;
