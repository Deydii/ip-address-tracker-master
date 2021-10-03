import PropTypes from 'prop-types';

import "./style.scss";

const TrackerInformations = ({ infos }) => {
  return (
    <div className="content">
      <div className="content__section">
        <h5 className="content__title">IP address</h5>
        <br />
        <p className="content__text" data-testid="ip">{infos.ipAddress}</p>
      </div>
      <div className="content__section">
        <h5 className="content__title">Location</h5>
        <br />
        <p className="content__text">{infos.city}, {infos.country}</p>
        <br />
        <p className="content__text">{infos.postalCode}</p>
      </div>
      <div className="content__section">
        <h5 className="content__title">Timezone</h5>
        <br />
        <p className="content__text">UTC {infos.timezone}</p>
      </div>
      <div className="content__section">
        <h5 className="content__title">ISP</h5>
        <br />
        <p className="content__text">{infos.isp}</p>
        </div>
    </div>
  );
};

TrackerInformations.propTypes = {
  infos: PropTypes.shape({
    ipAddress: PropTypes.string,
    country: PropTypes.string,
    city: PropTypes.string,
    postalCode: PropTypes.string,
    timezone: PropTypes.string,
    isp: PropTypes.string
  }).isRequired,
};

export default TrackerInformations;
