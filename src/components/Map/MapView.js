import { useMap } from 'react-leaflet';
import PropTypes from 'prop-types';

export const MapView = ({ center, zoom }) => {
  const map = useMap();
  map.flyTo(center, zoom, {
    animated: true,
    duration: 1
  });
  return null;
};

MapView.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
};
