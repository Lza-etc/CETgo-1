import React from 'react'
// import  BasicMap  from  '../components/CetMap'

import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer,Marker,Popup, useMap } from 'react-leaflet'
// import { MapContainer } from 'https://cdn.esm.sh/react-leaflet/MapContainer'
// import { TileLayer } from 'https://cdn.esm.sh/react-leaflet/TileLayer'
import { Routes, Route} from "react-router-dom";
function Home() {
  return (
    <div className='homee'>
    <h1>basiccc</h1>
       <div>
           {/* <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
            </MapContainer> */}
            
        </div>
       <h1>basiccc</h1>
    </div>
  )
}

export default Home;
