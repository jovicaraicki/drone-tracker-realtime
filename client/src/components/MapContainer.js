import React, { useState, useEffect, useRef } from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import * as icon from '../icons/map-marker-2-32.png';

function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

const MapContainer = props => {

  const prevDroneState = [];

  const { latLng } = props;

  const [d1, setD1] = useState(latLng[0] !== undefined ? latLng[0].lat : '');
  prevDroneState[0] = usePrevious(d1);

  const [d2, setD2] = useState(latLng[1] !== undefined ? latLng[1].lat : '');
  prevDroneState[1] = usePrevious(d2);

  const [d3, setD3] = useState(latLng[2] !== undefined ? latLng[2].lat : '');
  prevDroneState[2] = usePrevious(d3);

  useEffect(() => {
    setD1(latLng[0] !== undefined ? latLng[0].lat : '');
    setD2(latLng[1] !== undefined ? latLng[1].lat : '');
    setD3(latLng[2] !== undefined ? latLng[2].lat : '');
  }, [latLng]);

  const GoogleMapContainer = withGoogleMap(() => (
    <>
    {props.latLng && d1 && d2 && d3 && <GoogleMap
      defaultCenter = { { lat: props.lat, lng: props.lng } }
      defaultZoom = { 14 }
      mapTypeControl = { false }
    >

      {props.latLng.map((pos, index) => {
        const newPos = {
          pos,
          prev: prevDroneState[index]
        }
        return (
        <Marker
        key={pos.id}
        position={{ lat: pos.lat, lng: pos.lng }}
        icon={icon}
      >
      <InfoWindow
        onCloseClick={() => props.onToggleOpen}
      >
        <div style={ pos.lat === newPos.prev ? { background: 'red', color: 'white' } : { background: 'transparent' }}>
          <span>{pos.id} {pos.name}</span>
          <p>{pos.speed}mph</p>
        </div>
      </InfoWindow>
      </Marker>
      )})}
      
    </GoogleMap>}
    </>
  ));

  return (
    <div>
      <GoogleMapContainer
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={ <div style={{ height: `500px`, width: '100%' }} /> }
        mapElement={ <div style={{ height: `100%` }} /> }
      />
    </div>
  )

}

export default MapContainer;