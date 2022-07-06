import PropTypes from 'prop-types';

import "./style.scss";

const TrackerInformations = ({ userIpInfos }) => {
  return (
    <div className="content">
      <div className="content__section">
        <h5 className="content__title">IP address</h5>
        <p className="content__text">{userIpInfos.ipAddress}</p>
      </div>
      <div className="content__section">
        <h5 className="content__title">Location</h5>
        <p className="content__text">{userIpInfos.city}, {userIpInfos.country}</p>
      </div>
      <div className="content__section">
        <h5 className="content__title">Timezone</h5>
        <p className="content__text">UTC {userIpInfos.timezone}</p>
      </div>
      <div className="content__section">
        <h5 className="content__title">ISP</h5>
        <p className="content__text">{userIpInfos.isp}</p>
        </div>
    </div>
  );
};

TrackerInformations.propTypes = {
  userIpInfos: PropTypes.shape({
    ipAddress: PropTypes.string,
    country: PropTypes.string,
    city: PropTypes.string,
    postalCode: PropTypes.string,
    timezone: PropTypes.string,
    isp: PropTypes.string
  }).isRequired,
};

export default TrackerInformations;
