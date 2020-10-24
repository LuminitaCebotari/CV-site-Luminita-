import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: `40%`,
  height: '40%', 
  marginLeft:"30%",
  marginTop:"7%"
  
  
  
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: 46.770920,
         lng: 23.589920
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: `AIzaSyCqNzeCBAtoBkrDNMYHrvNLYrS7rfRBU5w`
})(MapContainer);