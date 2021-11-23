
mapboxgl.accessToken = 'pk.eyJ1Ijoiam9hY29sOTk5IiwiYSI6ImNrd2I5NHp3ZzAyZGIyd2xobWg4eWw5Y3EifQ.It-WfxigLTk8kkF8_dSEBg';



const geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-58.45527,-34.59792]
        },
        properties: {
          title: 'Hardware Caballito',
          description: 'Av. Warnes 1365'
        }
      }
    ]
  };


  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [-58.45527,-34.59792],
    zoom: 15
    });
     
    map.addControl(new mapboxgl.NavigationControl());
    map.addControl(new mapboxgl.FullscreenControl());
    map.addControl(new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    }));

    // add markers to map
    for (const feature of geojson.features) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker';
     
    // make a marker for each feature and add it to the map
    new mapboxgl.Marker(el)
    .setLngLat(feature.geometry.coordinates)
    .setPopup(
    new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML(
    `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
    )
    )
    .addTo(map);
    }