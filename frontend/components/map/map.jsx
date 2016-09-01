import React from 'react';

class SearchMap extends React.Component {
  constructor () {
    super();
  }

  componentDidMount() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 37.7578881, lng: -122.5780261},
      zoom: 8
    });
  }

  render() {
    return(
      <div id="map" className="mapContainer-search"> <p>hit the map!</p> </div>
    );
  }

}

export default SearchMap;
