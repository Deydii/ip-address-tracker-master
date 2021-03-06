import TrackerForm from './TrackerForm';
import TrackerInformations from './TrackerInformations';
import background from '../../assets/images/pattern-bg.png';

import './style.scss';

const Header = ({ 
  userIpInfos,
  inputValue, 
  onChangeInputValue,
  searchIpInfos,
  error,
  errorMessage
}) => {
  return (
    <header className="header">
      <img
        className="header__background"
        src={background}
        alt="header\' background"
      />
      <div className="header__section">
        <h3 className="header__section--title">IP Address Tracker</h3>
        <TrackerForm 
          inputValue={inputValue}
          onChangeInputValue={onChangeInputValue}
          searchIpInfos={searchIpInfos}
          error={error}
          errorMessage={errorMessage}
        />
        <TrackerInformations userIpInfos={userIpInfos} />
      </div>
    </header>
  );
};

export default Header;
