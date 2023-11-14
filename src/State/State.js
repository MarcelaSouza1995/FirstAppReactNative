import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useState, useEffect } from 'react';

import { fetchData } from '../api/Api';

const MyContext = createContext();

export const useMyContext = () => useContext(MyContext);

export const MyProvider = ({ children }) => {
  const [myState, setMyState] = useState('Marcela');
  const [data, setData] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
  const [page, setPage] = useState(1);

  const fetchDataFromAPI = async () => {
    try {
      const responseData = await fetchData(`/character?page=${page}`);
      const newData = responseData.results.map((obj) => {
        return { ...obj, isFavorite: false };
      });
      setData([...data, ...newData]);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  useEffect(() => {
    fetchDataFromAPI();
  }, [page]);

  useEffect(() => {
    const loadFavoritosFromStorage = async () => {
      try {
        const favoritosFromStorage = await AsyncStorage.getItem('favoritos');
        if (favoritosFromStorage) {
          setFavoritos(JSON.parse(favoritosFromStorage));
        }
      } catch (error) {
        console.error('Erro ao carregar favoritos do AsyncStorage:', error);
      }
    };
    loadFavoritosFromStorage();
  }, []);

  const toggleFavorite = (item) => {
    const updatedItens = data.map((i) => {
      if (i.id === item.id) {
        return { ...i, isFavorite: !i.isFavorite };
      }
      return i;
    });

    setData(updatedItens);

    const favoritosAtualizados = updatedItens.filter((i) => i.isFavorite);
    setFavoritos(favoritosAtualizados);

    // Salvar favoritos no AsyncStorage
    const saveFavoritosToStorage = async (favoritos) => {
      try {
        await AsyncStorage.setItem('favoritos', JSON.stringify(favoritos));
      } catch (error) {
        console.error('Erro ao salvar favoritos no AsyncStorage:', error);
      }
    };
    saveFavoritosToStorage(favoritosAtualizados);
  };

  const contextValue = {
    myState,
    setMyState,
    data,
    favoritos,
    setFavoritos,
    toggleFavorite,
    setPage,
    page,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};
