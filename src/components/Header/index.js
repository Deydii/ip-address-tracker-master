import TrackerForm from './TrackerForm';
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
      <div className="header__tracker">
        <h3 className="header__title">IP Address Tracker</h3>
        <TrackerForm />
      </div>
    </header>
  );
};

export default Header;
