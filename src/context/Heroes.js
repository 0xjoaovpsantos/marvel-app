import React, { useEffect, useState, useContext, createContext } from 'react';
import api from '../services/api';
import md5 from 'md5';
import { PUBLIC_KEY, PRIVATE_KEY } from '../../config.json';

const HeroesContext = createContext();

export default function HeroesProvider({ children }) {
  const [hero, setHero] = useState({});

  const [listHeroes, setListHeroes] = useState([]);
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(0);

  const [listSearchHeroes, setListSearchHeroes] = useState([]);
  const [offsetSearch, setOffsetSearch] = useState(0);
  const [totalSearch, setTotalSearch] = useState(0);
  const [search, setSearch] = useState('');
  const [searchEnabled, setSearchEnabled] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadListHeroes();
  }, []);

  async function loadListHeroes() {
    if (offset <= total) {
      setLoading(true);
      try {
        const date = Date.now();
        const response = await api.get(
          `/v1/public/characters?ts=${date}&apikey=${PUBLIC_KEY}&hash=${md5(
            date + PRIVATE_KEY + PUBLIC_KEY,
          )}&offset=${offset}`,
        );
        if (total === 0) {
          setTotal(response.data.data.total);
        }

        setListHeroes([...listHeroes, ...response.data.data.results]);
        setOffset(response.data.data.offset + 20);
      } catch (error) {
        throw new Error(error.response.data);
      }
      setLoading(false);
    }
  }

  async function searchHeroes() {
    if (search === '') {
      setOffsetSearch(0);
      setTotalSearch(0);
      setListSearchHeroes([]);
      return;
    }

    if (offsetSearch <= totalSearch) {
      setLoading(true);
      setSearchEnabled(true);
      try {
        const date = Date.now();
        const response = await api.get(
          `/v1/public/characters?ts=${date}&apikey=${PUBLIC_KEY}&hash=${md5(
            date + PRIVATE_KEY + PUBLIC_KEY,
          )}&offset=${offsetSearch}&nameStartsWith=${search}`,
        );

        setTotalSearch(response.data.data.total);

        setOffsetSearch(response.data.data.offset + 20);
        setListSearchHeroes([
          ...listSearchHeroes,
          ...response.data.data.results,
        ]);
      } catch (error) {
        throw new Error(error.response.data);
      }
      setLoading(false);
    }
  }

  return (
    <HeroesContext.Provider
      value={{
        listHeroes,
        loadListHeroes,
        loading,
        listSearchHeroes,
        search,
        searchHeroes,
        setSearch,
        searchEnabled,
        setSearchEnabled,
        hero,
        setHero,
      }}
    >
      {children}
    </HeroesContext.Provider>
  );
}

export function useHeroes() {
  const context = useContext(HeroesContext);

  if (!context) {
    throw new Error('useHeroes must be used within a HeroesProvider');
  }

  const {
    listHeroes,
    loadListHeroes,
    loading,
    listSearchHeroes,
    search,
    searchHeroes,
    setSearch,
    searchEnabled,
    setSearchEnabled,
    hero,
    setHero,
  } = context;

  return {
    listHeroes,
    loadListHeroes,
    loading,
    listSearchHeroes,
    search,
    searchHeroes,
    setSearch,
    searchEnabled,
    setSearchEnabled,
    hero,
    setHero,
  };
}
