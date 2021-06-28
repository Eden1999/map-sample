import React, {useEffect,useContext, useState} from 'react';
// import { AppContext } from "store/AppContext";
import MapView from "@arcgis/core/views/MapView"
// import "./MapComponent.css"
// import {StationsLayer, VectorTile } from "core/consts"
import Map from '@arcgis/core/Map';
import Point from "@arcgis/core/geometry/Point";
import Graphic from '@arcgis/core/Graphic';
import VectorTileLayer from "@arcgis/core/layers/VectorTileLayer"
import PictureMarkerSymbol from "@arcgis/core/symbols/PictureMarkerSymbol"
import '@arcgis/core/assets/esri/themes/dark/main.css';
// import location from "assets/images/soldierImg.png"
// import loadingCircle from "assets/images/loadingCircle.gif"
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
// import { GPS } from 'core/types';

let mapView  = null



const MapComponent = (props) => {
    const [isLoading, setLoading]  = useState(true);
    // const [{visibleMap},dispatch] = useContext(AppContext)
    const mapViewDiv = <div id = "mapView" style={{ height : "95vh", position : "absolute", width : '100%', top : '10vh' }}></div>
    useEffect(() => { 
        try {
            // @ts-ignore
            // const vetorTile = new VectorTileLayer(VectorTile);
            
            const map = new Map({basemap : 'streets'});

            // var point = new Point({ 
            //   longitude: 31,
            //   latitude: props.gps.lat
            // });
        
            // let pic = new PictureMarkerSymbol({
            //     url : location,
            //     width: '50px',
            //     height : '70px'
            // })
              
            // const pointGraphic = new Graphic({
            //     geometry: point,
            //     symbol: pic
            // });

            mapView = new MapView({
                container:mapViewDiv.props.id,
                map: map,
                // center : point,
                zoom : 17,
                // graphics : [pointGraphic],
                ui : {components : []}
            });
            
            mapView?.when(() => {
                setLoading(false);
            })
        } catch (err) {
            setLoading(false);
        }
    }
    , []
    )

    // If the user's location has been changed, set new center
    useEffect(() => { 
        try {
            // var point = new Point({ 
            //     longitude: props.gps.lon,
            //     latitude: props.gps.lat
            // });

            // let pic = new PictureMarkerSymbol({
            //     url : location,
            //     width: '50px',
            //     height : '70px'
            // })
              
            // const pointGraphic = new Graphic({
            //     geometry: point,
            //     symbol: pic
            // });

            // mapView.center = point;
            // mapView.graphics.removeAll();
            // mapView.graphics.add(pointGraphic);
        } catch (err) {
        }
    }
    , [props.gps]
    )

    return <div style={{textAlign : 'center'}}>
        {/* {isLoading  && <img style={{width : '60px', height : '60px', marginTop : '40vh', position : "absolute",marginRight: '-8vw'}} src={loadingCircle}/>} */}
        {mapViewDiv}
    </div>
      
}
 
export default MapComponent;