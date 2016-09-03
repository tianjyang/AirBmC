import React from 'react';
import { objToArray } from '../../reducers/selector';
class Map extends React.Component {
  constructor (props) {
    super(props);
    this.placeMarkersFromProp  = this.placeMarkersFromProp.bind(this);
    this.updateMarkersByBounds = this.updateMarkersByBounds.bind(this);
    this.purgeMarkersFromMap = this.purgeMarkersFromMap.bind(this);
    this.markers = [];
    this.setBound = true;
  }

  componentDidMount() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 11,
      center: {lat: 37.7578881, lng: -122.5780261}
    });
    this.map.setCenter(new google.maps.LatLng(37.7546193, -122.4276216));
    this.map.addListener("idle",this.updateMarkersByBounds);

    window.map = this.map;

  }

  updateMarkersByBounds() {
    let bounds = this.map.getBounds().toJSON();
    this.props.searchByBounds(bounds);
  }

  componentDidUpdate() {
    console.log("componentWillUpdate");
    this.placeMarkersFromProp();
  }

  placeMarkersFromProp () {
    this.purgeMarkersFromMap();
    let markerArray = objToArray(this.props.listings);
    let newMarker;
    let latlong = {};
    let bounds = new google.maps.LatLngBounds();
    markerArray.forEach((el)=>{
      latlong.lat = el.lat;
      latlong.lng = el.long;
      newMarker = new google.maps.Marker({
        position: latlong,
        map: this.map,
        title: el.title
      });
      this.markers.push(newMarker);
      bounds.extend(latlong);
    });
    if ( this.setBound ) {
      this.map.fitBounds(bounds);
      this.setBound = false;
    }
  }

  purgeMarkersFromMap () {
    this.markers.forEach((el)=>{
      el.setMap(null);
    });
    this.markers = [];
  }




  render() {
    console.log("rednering");

    return(
      <div id="map" className="mapContainer-search"></div>
    );
  }

}

export default Map;
