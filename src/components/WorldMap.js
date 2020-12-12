import * as React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import ReactMapGL ,{Marker,Popup}from 'react-map-gl';
import MapCards from './MapCards'
import './GlobalMap.css'

function Map() {

   const [allCountryData,setAllCountryData] = useState([]);
   const [showPopup,setshowPopup] = useState({})


    useEffect(() =>{
    
        const fetchedCountries = async () =>{ 
        const {data} = await axios.get(' https://corona.lmao.ninja/v2/countries?yesterday&sort')
         
        console.log(data)
        setAllCountryData(data);
      }
        fetchedCountries();  
      },[]);



    const token="pk.eyJ1IjoidGFtemlkYWxhbSIsImEiOiJja2hvbTBnb2QwOGM3MnFsdGpvMXl5ajl3In0.FzVe2Y3qh5vgb9Ubuo5Hrw"
    const [viewport, setViewport] = useState({
    width: '99vw',
    height: '79vh',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 2
  });

  return (
     <div className="map">
            <ReactMapGL
            {...viewport}
            mapStyle="mapbox://styles/tamzidalam/ckikdgf4u0pqf17mmryj4cffd"
            mapboxApiAccessToken={token}
            onViewportChange={nextViewport => setViewport(nextViewport)}
            >

                 {
                    allCountryData.map((items,i) =>(
                            <>
                            <Marker  
                                key = {items.countryInfo._id} 
                                latitude={items.countryInfo.lat} 
                                longitude={items.countryInfo.long} 
                                offsetLeft={-20} 
                                offsetTop={-10}>
                               
                            <div 
                                onClick={() =>setshowPopup({
                                    ...showPopup,
                                    [items.countryInfo._id]:true,
                                })}

                            
                            >
                             <img
                                style={{
                                    height:`${5*viewport.zoom}px`,
                                    width:`${5*viewport.zoom}px`,
                                }}
                                src={items.countryInfo.flag}
                             
                             />


                            </div>
                            </Marker>

                            {
                                showPopup[items.countryInfo._id]?(
                                    <Popup
                                    latitude={items.countryInfo.lat}
                                    longitude={items.countryInfo.long}
                                    closeButton={true}
                                    closeOnClick={false}
                                    tipSize={10}
                                    sortByDepth={true}
                                    onClose={() => setshowPopup({
                                        ...showPopup,
                                        [items.countryInfo._id]:false,
                                    })}
                                    anchor="top" >
                                    <div><h3> <MapCards  items={items} /></h3></div>
                                    </Popup>

                                ) : null
                            }    

                            </>
                        ))
                        
                    }
            
                   

            </ReactMapGL>

            
    </div> 
  );
}

export default Map