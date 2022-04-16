import {
    SET_ARTISTS,
    ADD_ARTISTS
  } from '../utils/constants';
  import { get } from '../utils/api';

  export const setArtists = (artists) => ({
    type: SET_ARTISTS,
    artists
  });
  export const addArtists = (artists) => ({
    type: ADD_ARTISTS,
    artists
  });

  export const initiateGetResult = (searchKey) => {
    return async (dispatch) => {
      try {
        const API_URL = `https://api.spotify.com/v1/search?query=${encodeURIComponent(
          searchKey
        )}&type=artist`;
        const result = await get(API_URL);
        console.log(result);
        const { artists} = result;
        return dispatch(setArtists(artists));
      } catch (error) {
        console.log('error', error);
      }
    };
  };