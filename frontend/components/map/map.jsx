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
      center: {lat: 37.7546193, lng: -122.4276216}
    });
    // this.map.setCenter(new google.maps.LatLng(37.7546193, -122.4276216));
    // this.setBound = true;
    this.placeMarkersFromProp();
    google.maps.event.removeListener(this.idle);
    if (!this.idle) {
      this.drag = this.map.addListener("drag",this.addIdleListener.bind(this));
    }
  }

  addIdleListener(){
    console.log("add idle listener");
    google.maps.event.removeListener(this.drag);
    this.idle = this.map.addListener("idle",this.updateMarkersByBounds);
  }

  updateMarkersByBounds() {
    this.purgeMarkersFromMap();
    this.setBound = false;
    let searchParams = {};
    searchParams.bounds = this.map.getBounds().toJSON();
    searchParams.start_date = this.props.searchParams.start_date || "";
    searchParams.end_date = this.props.searchParams.end_date || "";
    this.props.searchByBounds(searchParams);
  }

  componentDidUpdate() {
    this.placeMarkersFromProp();
  }

  placeMarkersFromProp () {
    // debugger
    this.purgeMarkersFromMap();
    // debugger
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
    if ( this.setBound && markerArray.length > 0 ) {
      this.map.fitBounds(bounds);
    }
    this.setBound = true
  }

  purgeMarkersFromMap () {
    // debugger
    this.markers.forEach((el)=>{
      el.setMap(null);
    });
    this.markers = [];
  }




  render() {

    return(
      <div id="map" className="mapContainer-search"></div>
    );
  }

}

export default Map;
