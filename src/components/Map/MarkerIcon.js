import L from 'leaflet';
import marker from '../../assets/images/icon-location.svg';

export const MarkerIcon = L.icon({
  iconUrl: marker,
  iconSize: [31, 40],
  iconAnchor: [15, 40]
});