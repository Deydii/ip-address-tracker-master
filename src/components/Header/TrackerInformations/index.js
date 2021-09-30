import "./style.scss";

const TrackerInformations = () => {
  return (
    <div className="content">
      <div className="content__section">
        <h5 className="content__title">IP address</h5>
        <br />
        <p className="content__text">192.212.174.101</p>
      </div>
      <div className="content__section">
        <h5 className="content__title">Location</h5>
        <br />
        <p className="content__text">Brooklyn, NY</p>
        <br />
        <p className="content__text">10001</p>
      </div>
      <div className="content__section">
        <h5 className="content__title">Timezone</h5>
        <br />
        <p className="content__text">UTC -05:00</p>
      </div>
      <div className="content__section">
        <h5 className="content__title">ISP</h5>
        <br />
        <p className="content__text">SpaceX</p>
        <br />
        <p className="content__text">Starlink</p>
      </div>
    </div>
  );
};

export default TrackerInformations;
