import React from 'react';
import { objToArray } from '../../reducers/selector';
class Map extends React.Component {
  constructor (props) {
    super(props);
    this.placeMarkersFromProp  = this.placeMarkersFromProp.bind(this);
    this.updateMarkersByBounds = this.updateMarkersByBounds.bind(this);
    this.markers = [];
  }

  componentDidMount() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 37.7578881, lng: -122.5780261},
      zoom: 8
    });
    this.map.addListener("idle",this.updateMarkersByBounds);
    // this.placeMarkersFromProp();
  }

  updateMarkersByBounds() {
    let bounds = this.map.getBounds().toJSON();
    this.props.searchByBounds(bounds);
  }

  componentDidUpdate() {
    console.log("componentWillUpdate");
    this.markers = [];
    this.placeMarkersFromProp();
  }

  placeMarkersFromProp () {
    let markerArray = objToArray(this.props.listings);
    let latlong = {};
    let bounds = new google.maps.LatLngBounds();
    markerArray.forEach((el)=>{
      latlong.lat = el.lat;
      latlong.lng = el.long;
      this.markers.push(new google.maps.Marker({
        position: latlong,
        map: this.map,
        title: el.title
      }));
      bounds.extend(latlong);
    });
    // this.map.fitBounds(bounds);

  }

  render() {
    console.log("rednering");

    return(
      <div id="map" className="mapContainer-search"></div>
    );
  }

}

export default Map;
