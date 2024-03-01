import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const Context = createContext([]);

export const ContextApi = ({ children }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://api.coindesk.com/v1/bpi/currentprice.json"
        );
        const data = res.data.bpi;
        setData([]);
        for (let key in data) {
          setData((pre) => [...pre, data[key]]);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchData(); // Fetch data initially
    const intervalId = setInterval(fetchData, 10000); // Fetch data every 10 seconds
    return () => clearInterval(intervalId); // Clean up the interval
  }, []);

  return (
    <Context.Provider value={[data, setData]}>{children}</Context.Provider>
  );
};

const useContextApi = () => {
  return useContext(Context);
};

export default useContextApi;
