import { useState, useEffect } from 'react';
import axios from 'axios';
import useLoadData from '../../Hooks/';
import Header from '../Header';
import TrackerMap from '../Map';
import Spinner from '../Spinner';

import './style.scss';

const App = () => {
  const [loading, infos] = useLoadData();
  const [ipInfos, setIpInfos] = useState({});
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const getInfosInFirstRender = () => {
    if (infos) {
      setIpInfos({
        ...ipInfos,
        ipAddress: infos.ipAddress,
        country: infos.country,
        city: infos.city,
        latitude: infos.latitude,
        longitude: infos.longitude,
        timezone: infos.timezone,
        isp: infos.isp,
      });
    }
  };

  const onChangeInputValue = (value) => {
    setError(false);
    setErrorMessage("");
    setInputValue(value);
  };

  const searchIpInfos = (value) => {
    axios
      .get(`http://ipwhois.app/json/${value}`)
      .then((response) => {
        switch (response.data.message) {
          case "invalid IP address": 
            setError(true);
            setErrorMessage("Invalid IP address");
            break;
          case "you've hit the monthly limit":
            setError(true);
            setErrorMessage("Monthly API request has been reached.");
            break;
          default: 
            setError(false);
            setErrorMessage("");
            setIpInfos({
              ...ipInfos,
              ipAddress: response.data.ip,
              country: response.data.country_code,
              city: response.data.city,
              latitude: response.data.latitude,
              longitude: response.data.longitude,
              timezone: response.data.timezone_gmt.slice(4),
              isp: response.data.isp,
            });
          }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getInfosInFirstRender();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [infos]);

  return (
    <div className="tracker">
      {loading && (
        <>
          <Header
            userIpInfos={ipInfos}
            inputValue={inputValue}
            onChangeInputValue={onChangeInputValue}
            searchIpInfos={searchIpInfos}
            error={error}
            errorMessage={errorMessage}
          />
          <Spinner />
      </>
      )}
      {!loading && (
        <>
          <Header
            userIpInfos={ipInfos}
            inputValue={inputValue}
            onChangeInputValue={onChangeInputValue}
            searchIpInfos={searchIpInfos}
            error={error}
            errorMessage={errorMessage}
          />
          <TrackerMap 
            latitude={ipInfos.latitude}
            longitude={ipInfos.longitude}
          />
        </>
      )}
    </div>
  );
};

export default App;
