import React, { createContext, useContext, useState, useEffect } from 'react';

import { fetchData } from '../api/Api';
const MyContext = createContext();

export const useMyContext = () => useContext(MyContext);

export const MyProvider = ({ children }) => {
  const [myState, setMyState] = useState('Marcela');

  const [data, setData] = useState([]);

  const fetchDataFromAPI = async () => {
    try {
      const responseData = await fetchData('/character');
      setData(responseData.results);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  return (
    <MyContext.Provider value={{ myState, setMyState, data }}>
      {children}
    </MyContext.Provider>
  );
};
