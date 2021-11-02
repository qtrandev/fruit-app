import { connect } from 'react-redux'
import React,{ useState, useEffect } from 'react';
import ReactMapGL, { GeolocateControl, NavigationControl, Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css'
import Firebase from './Firebase';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import FruitCardDisplay from './components/FruitCardDisplay';

// Fruit icons
import mango from './icons/mango.svg';
import jackfruit from './icons/durian.svg';
import longan from './icons/lychee.svg';
import rambutan from './icons/rambutan.svg';
import sugarapple from './icons/custard-apple.svg';

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

  useEffect(() => {
    refreshData();
  }, []);

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

  const addFruitTipClick = (e) => {
    e.preventDefault();
    let tipValue = document.getElementById("fruitDescription").value;
    if (tipValue.trim().length < 2) {
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
    mapStyle= 'mapbox://styles/mapbox/streets-v11'
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
      <Marker key={fruitTip.latitude} latitude={fruitTip.latitude} longitude={fruitTip.longitude} offsetLeft={-17} offsetTop={-62}>
        <a href="#top" className="mapMarker" onClick={ (e) => {
          e.preventDefault();
          setSelectedTip(fruitTip);
          updateViewPort(fruitTip.latitude, fruitTip.longitude);
          setClickLocation(null);
        }}><i className="fa fa-map-marker tip-popup"></i></a>
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
          <Card>
            <CardContent>
              <Typography variant="h4" component="h4">
                <FruitCardDisplay fruits={ selectedTip.fruits } />
              </Typography>
              <Typography variant="body2" component="p">
                { selectedTip.description }
              </Typography>
            </CardContent>
          </Card>
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
          <Card className="fruitTipAdd">
            <CardContent>
              <Typography variant="h5" component="h2">
                Add Tip
              </Typography>
              <br/>
              <div className="fruitSelector">
                <img src={mango} alt="Mango" width="30px" height="30px"></img>
                <img src={jackfruit} alt="Jackfruit" width="30px" height="30px"></img>
                <img src={longan} alt="Longan" width="30px" height="30px"></img>
                <img src={rambutan} alt="Rambutan" width="30px" height="30px"></img>
                <img src={sugarapple} alt="Sugar-apple" width="30px" height="30px"></img>
              </div>
              <TextareaAutosize id='fruitDescription' rows={5} placeholder="Enter a fruit tip for the selected fruits. Select multiple fruits on the left pane. Only recent tips are saved to Firebase with this demo. " />;
              <br/><br/>
              <Button variant="contained" color="primary" onClick={ addFruitTipClick }>Add</Button>
            </CardContent>
          </Card>
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
