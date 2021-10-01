import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { MarkerIcon } from './MarkerIcon';

import "./style.scss";

const TrackerMap = () => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={18}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]} icon={MarkerIcon}></Marker>
    </MapContainer>
  );
};

export default TrackerMap;
