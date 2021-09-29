import arrow from '../../assets/images/icon-arrow.svg';

const TrackerForm = () => {
  return (
    <form 
      className="header__form"
    >
      <input
        className="header__input"
        type="text"
        placeholder="Search for any IP address or domain"
        value=""
      />
      <button className="header__input--button" type="submit">
        <img
          className="header__input--arrow"
          src={arrow}
          alt="icon arrow in input for search"
        />
      </button>
    </form>
  );
};

export default TrackerForm;
