import background from '../../assets/images/pattern-bg.png';
import arrow from '../../assets/images/icon-arrow.svg';

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
        <div className="header__form">
          <input
            className="header__input"
            type="text"
            placeholder="Search for any IP address or domain"
          />
          <button 
            className="header__input--button"
            type="button"
          >
            <img 
              className="header__input--arrow"
              src={arrow}
              alt="icon arrow in input for search"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
