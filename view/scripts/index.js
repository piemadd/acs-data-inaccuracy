//let baseMapStyle = mapStyle.layers;
let baseMapStyle = baseStyle;

const formatNumber = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const formatPercent = (number) => {
  return `${number.toFixed(2)}%`;
};

var map = new maplibregl.Map({
  container: 'map',
  hash: true,
  attributionControl: false,
  refreshExpiredTiles: false,
  style: {
    id: "43f36e14-e3f5-43c1-84c0-50a9c80dc5c7",
    name: "MapLibre",
    zoom: 0,
    pitch: 0,
    center: [-87.6279871036212, 41.884579601743276],
    glyphs:
      "https://cdn.jsdelivr.net/gh/piemadd/fonts@54b954f510dc79e04ae47068c5c1f2ee39a69216/_output/{fontstack}/{range}.pbf",
    layers: baseMapStyle,
    bearing: 0,
    sources: {
      protomaps: {
        type: "vector",
        tiles: [
          "https://tilea.piemadd.com/tiles/{z}/{x}/{y}.mvt",
          "https://tileb.piemadd.com/tiles/{z}/{x}/{y}.mvt",
          "https://tilec.piemadd.com/tiles/{z}/{x}/{y}.mvt",
          "https://tiled.piemadd.com/tiles/{z}/{x}/{y}.mvt",
          //"http://10.0.0.237:8081/tiles/{z}/{x}/{y}.mvt"
        ],
        maxzoom: 13,
      },
    },
    version: 8,
    metadata: {},
  }, // stylesheet location
  center: [-87.6279871036212, 41.884579601743276], // starting position [lng, lat]
  zoom: 3 // starting zoom
});

map.on('load', async () => {
  map.addControl(new maplibregl.NavigationControl({
    showCompass: true,
    showZoom: true,
    visualizePitch: true
  }), 'top-right');

  map.addControl(new maplibregl.FullscreenControl());

  map.addControl(new maplibregl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true
    },
    trackUserLocation: true,
    fitBoundsOptions: {
      zoom: 12,
    }
  }));

  fetch('/data/counties.json')
    .then(response => response.json())
    .then(countyData => {

      fetch('/data/cb_2018_us_county_500k.zip.geojson')
        .then(response => response.json())
        .then(mapData => {
          const cleanedData = {
            type: 'FeatureCollection',
            features: mapData.features.map(feature => {
              const county = countyData[feature.properties.AFFGEOID] ?? {};
              return {
                ...feature,
                properties: {
                  ...feature.properties,
                  ...county
                }
              }
            })
          }

          console.log(cleanedData)

          map.addSource('counties', {
            type: 'geojson',
            data: cleanedData
          });
          map.addLayer({
            id: 'counties',
            type: 'fill',
            source: 'counties',
            paint: {
              'fill-color': {
                property: 'off2020',
                stops: [
                  [-100000, '#ff0000'],
                  [0, '#ffffff'],
                  [100000, '#00ff00']
                ]
              },
              'fill-opacity': {
                property: 'off2020',
                stops: [
                  [-10000, 0.8],
                  [-1, 0.8],
                  [0, 0],
                  [1, 0.8],
                  [10000, 0.8]
                ]
              }
            }
          });

          map.on('click', 'counties', function (e) {
            new maplibregl.Popup()
              .setLngLat(e.lngLat)
              .setHTML(`${e.features[0].properties.name}<br/>2020 ACS count vs 2020 Census count:<br/>${formatNumber(e.features[0].properties.off2020)}<br/>2020 ACS percent difference of 2020 Census count:<br/>${formatPercent(e.features[0].properties.diffACSPercent)}`)
              .addTo(map);
          });


          /*
          
          map.addLayer({
            id: 'counties',
            type: 'fill',
            source: 'counties',
            paint: {
              'fill-color': {
                property: 'diffACSPercent',
                stops: [
                  [-1, '#f59942'],
                  [0, '#ffffff'],
                  [1, '#428df5']
                ]
              },
              'fill-opacity': {
                property: 'diffACSPercent',
                stops: [
                  [-1, 0.8],
                  [-0.01, 0.8],
                  [0, 0],
                  [0.01, 0.8],
                  [1, 0.8]
                ]
              }
            }
          });
          */
        });
    });
});