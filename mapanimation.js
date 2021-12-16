const busStops = [
    [76.9558,11.0168],
    [77.2852,10.9956],
    [77.7131,10.9459],
    [78.0766,10.9601],
    [78.4172,78.0766],
    [78.7047,10.7905],
    [78.8177,10.8321],
    [79.1378,78.8177],
    [79.2531,10.6286],
    [79.2832,10.5397],
    [79.3200,10.4232],
    [79.2705,10.4963],
  ];
  
  // TODO: add your own access token
  mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhbnZlbHByYWthc2giLCJhIjoiY2t4NzVjYnlzMm1obTJycHp6emJoejNmNSJ9.sjI9I3wZPMG3Cc0HgKeKyQ';
  
  // This is the map instance
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [ 76.9558,11.0168],
    zoom: 14,
  });
  
  // TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
  var marker= new mapboxgl.Marker()
  .setLngLat([76.9558,11.0168])
  .addTo(map);

  // counter here represents the index of the current bus stop
  let counter = 0;
  function move() {
    setTimeout(()=>{
      if (counter >= busStops.length) return;
      marker.setLngLat(busStops[counter]);
      counter++;
      move();
    }, 10000);
    // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
   
    // Use counter to access bus stops in the array busStops
    // Make sure you call move() after you increment the counter.
  }
  
  // Do not edit code past this point
  if (typeof module !== 'undefined') {
    module.exports = { move };
  }
  
  