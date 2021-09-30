import TrackerForm from './TrackerForm';
import TrackerInformations from './TrackerInformations';
import background from '../../assets/images/pattern-bg.png';

import './style.scss';

const Header = () => {
  return (
    <header className="header">
      <img
        className="header__background"
        src={background}
        alt="header\' background"
      />
      <div className="header__section">
        <h3 className="header__section--title">IP Address Tracker</h3>
        <TrackerForm />
        <TrackerInformations />
      </div>
    </header>
  );
};

export default Header;
