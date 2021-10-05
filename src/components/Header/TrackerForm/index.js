import PropTypes from 'prop-types';

import arrow from '../../../assets/images/icon-arrow.svg';

import './style.scss';

const TrackerForm = ({ 
  inputValue, 
  onChangeInputValue,
 }) => {

  return (
    <form 
      className="form"
    >
      <input
        className="form__input"
        type="text"
        required
        placeholder="Search for any IP address or domain"
        value={inputValue}
        onChange={(e) => onChangeInputValue(e.target.value)}
      />
      <button className="form__button" type="submit">
        <img
          className="form__button--arrow"
          src={arrow}
          alt="icon arrow in input for search"
        />
      </button>
    </form>
  );
};

TrackerForm.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onChangeInputValue: PropTypes.func.isRequired,
};

export default TrackerForm;
