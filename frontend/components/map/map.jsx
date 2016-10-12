import React from 'react';
import { objToArray } from '../../reducers/selector';
class Map extends React.Component {
  constructor (props) {
    super(props);
    this.placeMarkersFromProp  = this.placeMarkersFromProp.bind(this);
    this.updateMarkersByBounds = this.updateMarkersByBounds.bind(this);
    this.purgeMarkersFromMap = this.purgeMarkersFromMap.bind(this);
    this.colorMarker = this.colorMarker.bind(this);
    this.markers = [];
    this.setBound = true;
  }

  componentDidMount() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 11,
      center: {lat: 37.7546193, lng: -122.4276216}
    });
    this.placeMarkersFromProp();
    google.maps.event.removeListener(this.idle);
    if (!this.idle) {
      this.drag = this.map.addListener("drag",this.addIdleListener.bind(this));
    }
  }

  addIdleListener(){
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
    this.colorMarker();
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
      newMarker.id = el.id;
      this.markers.push(newMarker);
      bounds.extend(latlong);
    });
    if ( this.setBound && markerArray.length > 0 ) {
      this.map.fitBounds(bounds);
    }
    this.setBound = true
  }

  purgeMarkersFromMap () {
    this.markers.forEach((el)=>{
      el.setMap(null);
    });
    this.markers = [];
  }

  colorMarker () {
    this.markers.forEach((el)=>{
      console.log("element id is ",el.id);
      if ( el.id === this.props.highlightedMarker ) {
        console.log("match was found!");
        if (el.getAnimation() !== null) {
          el.setAnimation(null);
        } else {
          el.setAnimation(google.maps.Animation.BOUNCE);
        }
      }
    });
  }




  render() {

    return(
      <div id="map" className="mapContainer-search"></div>
    );
  }

}

export default Map;
