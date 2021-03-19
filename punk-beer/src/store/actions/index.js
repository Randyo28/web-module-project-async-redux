import axios from 'axios'

export const FETCH_BEERS_START = "FETCH_BEERS_START"
export const FETCH_BEERS_SUCCESS = "FETCH_BEERS_SUCCESS"
export const FETCH_BEERS_FAILURE = "FETCH_BEERS_FAILURE"


export const fetchData = () => {
    return (dispatch) => {
      // tell the reducer we are going to enter a "loading state"
      dispatch({ type: FETCH_BEERS_START });
      // start the fetch
      axios
        .get(`https://api.punkapi.com/v2/beers/`)
        .then((res) => {
          // send the reducer the data
          console.log(res.data)
          dispatch({ type: FETCH_BEERS_SUCCESS, payload: res.data });
        })
        .catch((err) => {
          console.log(err.message);
          dispatch({ type: FETCH_BEERS_FAILURE, payload: err.message });
        });
    };
  };

  export const FETCH_SINGLE_START = "FETCH_SINGLE_START"
export const FETCH_SINGLE_SUCCESS = "FETCH_SINGLE_SUCCESS"
export const FETCH_SINGLE_FAILURE = "FETCH_SINGLE_FAILURE"

export const fetchSingleData = (id) => {
    return (dispatch) => {
      // tell the reducer we are going to enter a "loading state"
      dispatch({ type: FETCH_SINGLE_START });
      // start the fetch
      axios
        .get(`https://api.punkapi.com/v2/beers/${id}`)
        .then((res) => {
          // send the reducer the data
          console.log(res.data)
          dispatch({ type: FETCH_SINGLE_SUCCESS, payload: res.data });
        })
        .catch((err) => {
          console.log(err.message);
          dispatch({ type: FETCH_SINGLE_FAILURE, payload: err.message });
        });
    };
  };