import PropTypes from 'prop-types';

import arrow from '../../../assets/images/icon-arrow.svg';

import './style.scss';

const TrackerForm = ({ 
  inputValue, 
  onChangeInputValue,
  searchIpInfos,
  error,
  errorMessage
 }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    searchIpInfos(inputValue)
  };

  return (
    <>
    <form 
      className="form"
      onSubmit={handleSubmit}
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
    <div 
      className={error ? "form__message" : "form__message--hide"}
      data-testid="error-message"
    >
      <p className="form__message--error">
        {errorMessage}
      </p>
    </div>
    </>
  );
};

TrackerForm.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onChangeInputValue: PropTypes.func.isRequired,
  searchIpInfos: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired
};

export default TrackerForm;
