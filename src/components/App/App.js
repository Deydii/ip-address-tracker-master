import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../Header';
import TrackerMap from '../Map';

import './style.scss';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [infos, setInfos] = useState({});
  const [inputValue, setInputValue] = useState("");

  // Get user's info in first render
  const getInfosInFirstRender = () => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}?apiKey=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        setInfos({
          ...infos,
          ipAddress: response.data.ip,
          country: response.data.location.country,
          city: response.data.location.city,
          postalCode: response.data.location.postalCode,
          latitude: response.data.location.lat,
          longitude: response.data.location.lng,
          timezone: response.data.location.timezone,
          isp: response.data.isp,
        });
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  const onChangeInputValue = (value) => {
    setInputValue(value)
  };

  useEffect(() => getInfosInFirstRender(), []);

  return (
    <div className="tracker">
    {!loading && (
      <>
        <Header 
          infos={infos}
          inputValue={inputValue}
          onChangeInputValue={onChangeInputValue}
        />
        <TrackerMap />
      </>
    )}
    </div>
  );
};

export default App;
