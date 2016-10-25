import React from 'react';
import { objToArray } from '../../reducers/selector';
class Map extends React.Component {
  constructor (props) {
    super(props);
    this.placeMarkersFromProp  = this.placeMarkersFromProp.bind(this);
    this.updateMarkersByBounds = this.updateMarkersByBounds.bind(this);
    this.purgeMarkersFromMap = this.purgeMarkersFromMap.bind(this);
    this.colorMarker = this.colorMarker.bind(this);
    this.toggleMapSearch = this.toggleMapSearch.bind(this)
    this.markers = [];
    this.setBound = true;
    this.bouncingMarker = null;
    this.mapSearch = false;
    window.markers = this.markers;
  }

  shouldComponentUpdate (nextProps,_nextState) {
    if (this.props.highlightedMarker !== nextProps.highlightedMarker) {
      this.setBound = false;
    }
    return true;
  }

  componentDidMount() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 11,
      center: {lat: 37.7546193, lng: -122.4276216}
    });
    // this.placeMarkersFromProp();
    google.maps.event.removeListener(this.idle);
    if (!this.idle) {
      this.drag = this.map.addListener("drag",this.addIdleListener.bind(this));
    }
    window.map = this.map
  }

  addIdleListener(){
    google.maps.event.removeListener(this.drag);
    this.idle = this.map.addListener("idle",this.updateMarkersByBounds);
  }

  updateMarkersByBounds() {
    this.setBound = false;
    this.purgeMarkersFromMap();
    let searchParams = {};
    searchParams.bounds = this.map.getBounds().toJSON();
    searchParams.start_date = this.props.startDate || "";
    searchParams.end_date = this.props.endDate || "";
    if (this.mapSearch) {
      this.props.searchByBounds(searchParams);
    }
  }

  componentDidUpdate() {
    this.placeMarkersFromProp();
    this.colorMarker();
  }

  toggleMapSearch(e) {
    this.mapSearch = !this.mapSearch;
  }

  placeMarkersFromProp () {
    let matchingListings = this.purgeMarkersFromMap();
    let latlong = {};
    let bounds = new google.maps.LatLngBounds();
    matchingListings.forEach((el)=>{
      latlong.lat = el.lat;
      latlong.lng = el.long;
      let newMarker = new google.maps.Marker({
        position: latlong,
        map: this.map,
        title: el.title
      });
      newMarker.listingId = el.id
      this.markers.push(newMarker);
    });

    this.markers.forEach((marker)=>{
        bounds.extend(marker.position);
    })


    if ( this.setBound && matchingListings.length > 0 ) {
      this.map.fitBounds(bounds);
    }
    this.setBound = true
  }

  purgeMarkersFromMap () {
    let matchingListings = objToArray(this.props.listings);
    let markersToKeep = [];
    let markersToDestroy = [];
    let i = 0;
    while (this.markers.length !== 0) {
      let marker = this.markers[0];
      let matchedListingIndex = matchingListings.findIndex((listing)=>{
        return marker.listingId === listing.id;
      });
      if ( matchedListingIndex !== -1 ) {
        markersToKeep.push(this.markers.shift());
        matchingListings.splice(matchedListingIndex,1)
      } else {
        markersToDestroy.push(this.markers.shift());
      }
    }
    this.markers = markersToKeep;
    markersToDestroy.forEach((el)=>{
      el.setMap(null);
    });
    return matchingListings
  }

  colorMarker () {
    if (this.bouncingMarker) {
      this.bouncingMarker.setAnimation(null);
      this.bouncingMarker = null;
    }

    this.markers.forEach((marker)=>{
      if ( marker.listingId === this.props.highlightedMarker ) {
        this.bouncingMarker = marker;
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }
      }
    );
  }




  render() {

    return(
      <div>
        <div id="map" className="mapContainer-search">
        </div>
        <span style={{"position":"absolute","fontSize":"12px",'top':"50px","left":"10px","backgroundColor":"white","padding":"5px"}}>
          <input type="checkbox" onClick={this.toggleMapSearch}/> Update search results with map?</span>
      </div>
          );
  }

}

export default Map;
