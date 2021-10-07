import { useState, useEffect } from "react";
import axios from "axios";

const useLoadData = () => {
  const [loading, setLoading] = useState(true);
  const [infos, setInfos] = useState({});

  useEffect(() => {
    axios
      .get("http://ipwhois.app/json/")
      .then((response) => {
        setInfos({
          ipAddress: response.data.ip,
          country: response.data.country_code,
          city: response.data.city,
          latitude: response.data.latitude,
          longitude: response.data.longitude,
          timezone: response.data.timezone_gmt.slice(4),
          isp: response.data.isp,
        });
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return [ loading, infos ];
};

export default useLoadData;
