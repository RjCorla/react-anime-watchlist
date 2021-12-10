export default (state, action) => {
  switch (action.type) {
    case 'ADD_TO_WATCHLIST':
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };

    case 'ADD_TO_WATCHED':
      return {
        ...state,
        watched: [action.payload, ...state.watched],
      };

    case 'REMOVE_FROM_WATCHLIST':
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (anime) => anime.mal_id !== action.payload
        ),
      };

    case 'REMOVE_FROM_WATCHED':
      return {
        ...state,
        watched: state.watched.filter(
          (anime) => anime.mal_id !== action.payload
        ),
      };

    default:
      return state;
  }
};
