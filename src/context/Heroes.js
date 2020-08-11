import React, { useEffect, useState, useContext, createContext } from 'react';
import api from '../services/api';
import md5 from 'md5';
import { PUBLIC_KEY, PRIVATE_KEY } from '../../config.json';

const HeroesContext = createContext();

export default function HeroesProvider({ children }) {
  const [listHeroes, setListHeroes] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadListHeroes();
  }, []);

  async function loadListHeroes() {
    setLoading(true);
    try {
      const date = Date.now();
      const response = await api.get(
        `/v1/public/characters?ts=${date}&apikey=${PUBLIC_KEY}&hash=${md5(
          date + PRIVATE_KEY + PUBLIC_KEY,
        )}&offset=${offset}`,
      );
      setListHeroes([...listHeroes, ...response.data.data.results]);
      setOffset((prevState) => prevState + 20);
    } catch (error) {
      console.error(error.response.data);
    }
    setLoading(false);
  }

  return (
    <HeroesContext.Provider value={{ listHeroes, loadListHeroes, loading }}>
      {children}
    </HeroesContext.Provider>
  );
}

export function useHeroes() {
  const context = useContext(HeroesContext);

  if (!context) {
    throw new Error('useHeroes must be used within a HeroesProvider');
  }

  const { listHeroes, loadListHeroes, loading } = context;

  return { listHeroes, loadListHeroes, loading };
}
