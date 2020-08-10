import React, { useEffect, useState, useContext, createContext } from 'react';
import api from '../services/api';
import md5 from 'md5';
import { PUBLIC_KEY, PRIVATE_KEY } from '../../config.json';

const HeroesContext = createContext();

export default function HeroesProvider({ children }) {
  const [listHeroes, setListHeroes] = useState();

  useEffect(() => {
    getListHeroes();
  }, []);

  async function getListHeroes() {
    try {
      const date = Date.now();
      const response = await api.get(
        `/v1/public/characters?ts=${date}&apikey=${PUBLIC_KEY}&hash=${md5(
          date + PRIVATE_KEY + PUBLIC_KEY,
        )}`,
      );
      //setListHeroes(response.data.data.results);
      console.log(response.data.data.results);
    } catch (error) {
      console.error(error.response.data);
    }
    //setListHeroes(response.data);
  }

  return (
    <HeroesContext.Provider value={{ listHeroes, setListHeroes }}>
      {children}
    </HeroesContext.Provider>
  );
}

export function useHeroes() {
  const context = useContext(HeroesContext);

  if (!context) {
    throw new Error('useHeroes must be used within a HeroesProvider');
  }

  const { listHeroes, setListHeroes } = context;

  return { listHeroes, setListHeroes };
}
