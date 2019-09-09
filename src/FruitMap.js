import { connect } from 'react-redux'
import React,{ useState } from 'react';
import ReactMapGL, { GeolocateControl, NavigationControl, Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css'
import Firebase from './Firebase';

function FruitMap( {fruits}) {
  const [ viewport, setViewPort ] = useState({
    width: '100%',
    height: '100%',
    latitude: 26.233217,
    longitude: -80.230901,
    zoom: 10
  })

  const [ selectedTip, setSelectedTip ] = useState(null);
  const [ clickLocation, setClickLocation ] = useState(null);

  const geolocateStyle = {
    float: 'left',
    margin: '60px',
    padding: '10px'
  };

  const navStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '10px'
  };

  const refreshData = () =>{
    new Firebase().requestFruitTips((data) => {
      setFruitTips(data);
    });
  }

  const _onViewportChange = viewport => setViewPort({...viewport })

  const updateViewPort = (latitude, longitude) => {
    refreshData();
    setViewPort({
      ...viewport,
      latitude: latitude,
      longitude: longitude,
      transitionDuration: 800
    })
  }

  const _onClick = pointerevent => {
    setClickLocation({
      latitude: pointerevent.lngLat[1],
      longitude: pointerevent.lngLat[0]
    })
    updateViewPort(pointerevent.lngLat[1], pointerevent.lngLat[0])
    setSelectedTip(null);
  }

  const getFruitNavList = () => {
    let enabledFruits = '';
    fruits.map(fruit => {
      if (fruit.enabled) {
        enabledFruits = enabledFruits + (enabledFruits.length>0?',':'') + fruit.selection;
      }
      return null;
    });
    return enabledFruits;
  }

  const [ fruitTips, setFruitTips ] = useState([
    {
      fruits: 'mango,jackfruit',
      description: 'Lots of mangos and jackfruit trees here. $1 a mango. $3 per pound jackfruit',
      latitude: 26.233217,
      longitude: -80.230901
    },
    {
      fruits: 'mango',
      description: 'Big mango tree',
      latitude: 26.333217,
      longitude: -80.130901
    },
    {
      fruits: 'jackfruit',
      description: 'Lots of jackfruit trees here.',
      latitude: 26.133217,
      longitude: -80.430901
    },
  ]);

  return (
    <ReactMapGL mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    {...viewport}
    onViewportChange={_onViewportChange}
    onClick={_onClick}
    >
      <GeolocateControl
          style={geolocateStyle}
          positionOptions={{enableHighAccuracy: true}}
          trackUserLocation={true}
      />
      {fruitTips.map(fruitTip => (
      <Marker key={fruitTip.latitude} latitude={fruitTip.latitude} longitude={fruitTip.longitude} offsetLeft={-20} offsetTop={-10}>
        <button className="mapMarker" onClick={ (e) => {
          e.preventDefault();
          setSelectedTip(fruitTip);
          updateViewPort(fruitTip.latitude, fruitTip.longitude);
          setClickLocation(null);
        }}><p>{fruitTip.fruits}</p></button>
      </Marker>
      ))}

      {selectedTip &&
        <Popup
          latitude={selectedTip.latitude}
          longitude={selectedTip.longitude}
          closeButton={false}
          closeOnClick={true}
          onClose={() => setSelectedTip(null)}
          anchor="bottom" >
          <h3 className="tip-popup">{selectedTip.description}</h3>
        </Popup>
      }

      {clickLocation &&
        <Popup
          latitude={clickLocation.latitude}
          longitude={clickLocation.longitude}
          closeButton={true}
          closeOnClick={false}
          onClose={() => setClickLocation(null)}
          anchor="bottom" >
          <h2>Tip:</h2>
          <textarea id='fruitDescription' placeholder='Enter a fruit tip for the selected fruits'></textarea>
          <button onClick={ (e) => {
            e.preventDefault();
            let tipValue = document.getElementById("fruitDescription").value.trim();
            if (tipValue.length < 2) {
              document.getElementById("fruitDescription").value = '';
              return;
            }
            let obj = {
              fruits: getFruitNavList(),
              description: tipValue,
              latitude: clickLocation.latitude,
              longitude: clickLocation.longitude
              };
            setFruitTips([
              ...fruitTips, obj
            ]);
            new Firebase().writeFruitTip(obj);
            setClickLocation(null);
          }}>Add</button>
        </Popup>
      }
      <div className="nav" style={navStyle}>
        <NavigationControl />
      </div>
    </ReactMapGL>
  );
}

const mapStateToProps = state => ({
  fruits: state.fruits
})

const mapDispatchToProps = dispatch => ({
  
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FruitMap)