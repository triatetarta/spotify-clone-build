const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PLAYING':
      return {
        ...state,
        playing: action.playing,
      };
    case 'SET_ITEM':
      return {
        ...state,
        item: action.item,
      };
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };
    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case 'GET_TOP_ARTISTS':
      return {
        ...state,
        top_artists: action.top_artists,
      };
    case 'SET_SEARCHED_ARTIST':
      return {
        ...state,
        searched_artist: action.searched_artist,
      };
    default:
      return state;
  }
};

export default reducer;
