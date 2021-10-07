import { useState, useEffect } from 'react';
// import axios from 'axios';

import useLoadData from '../../Hooks/';
// import ipRegex from 'ip-regex';

import Header from '../Header';
import TrackerMap from '../Map';

import "./style.scss";

const App = () => {
  const [loading, infos] = useLoadData();
  const [ipInfos, setIpInfos] = useState({});
  const [inputValue, setInputValue] = useState("");

  const getInfosInFirstRender = () => {
    if (infos) {
      setIpInfos({
        ...ipInfos,
        ipAddress: infos.ipAddress,
        country: infos.country,
        city: infos.city,
        latitude: infos.latitude,
        longitude: infos.longitude,
        timezone: infos.timezone_gmt,
        isp: infos.isp,
      })
    }
  };

  const onChangeInputValue = (value) => {
    setInputValue(value);
  };

  useEffect(() => {
    getInfosInFirstRender();
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [infos]);

  return (
    <div className="tracker">
      {!loading && (
      <>
        <Header
          userIpInfos={ipInfos}
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
