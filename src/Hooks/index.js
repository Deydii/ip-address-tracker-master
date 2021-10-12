import { useState, useEffect } from 'react';
import axios from 'axios';

const useLoadData = (url) => {
  const [loading, setLoading] = useState(false);
  const [infos, setInfos] = useState({});

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setInfos({
          ipAddress: response.data.ip,
          country: response.data.country_code,
          city: response.data.city,
          latitude: response.data.latitude,
          longitude: response.data.longitude,
          timezone: response.data.timezone_gmt,
          isp: response.data.isp,
        });
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [url]);

  return [loading, infos];
};

export default useLoadData;
