import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { MarkerIcon } from './MarkerIcon';
import { MapView } from './MapView';

import "./style.scss";

const TrackerMap = ({ latitude, longitude }) => {
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={16}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longitude]} icon={MarkerIcon}></Marker>
      <MapView center={[latitude, longitude]} zoom={16}/>
    </MapContainer>
  );
};

export default TrackerMap;
