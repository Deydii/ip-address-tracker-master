import arrow from '../../../assets/images/icon-arrow.svg';

import './style.scss';

const TrackerForm = () => {
  return (
    <form 
      className="form"
    >
      <input
        className="form__input"
        type="text"
        placeholder="Search for any IP address or domain"
        value=""
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

export default TrackerForm;
