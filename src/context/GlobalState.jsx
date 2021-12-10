import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

// ? initial state
const initialState = {
  watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : [],
  watched: localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : [],
};

// ? create context
export const GlobalContext = createContext(initialState);

// ? provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(state.watchlist))
    localStorage.setItem('watched', JSON.stringify(state.watched))
  }, [state])

  // ? actions
  const addToWatchlist = (anime) => {
    dispatch({type: 'ADD_TO_WATCHLIST', payload: anime})
  }

  const addToWatched = (anime) => {
    dispatch({type: 'ADD_TO_WATCHED', payload: anime})
  }

  const removeFromWatchlist = (id) => {
    dispatch({type: 'REMOVE_FROM_WATCHLIST', payload: id})
  }

  const removeFromWatched = (id) => {
    dispatch({type: 'REMOVE_FROM_WATCHED', payload: id})
  }

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addToWatchlist,
        addToWatched,
        removeFromWatched,
        removeFromWatchlist,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
