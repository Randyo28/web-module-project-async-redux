import { FETCH_BEERS_START, FETCH_BEERS_SUCCESS, FETCH_BEERS_FAILURE } from '../actions'

const initialState = {
    beers: [],
    loading: false,
    error: '',
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_BEERS_START:
            return {
                ...state,
                loading: true,
            }
        case FETCH_BEERS_SUCCESS:
            return {
                ...state,
                beers: action.payload,
                loading: false,
                error: '',
            }
        case FETCH_BEERS_FAILURE:
            return {
                ...state,
                beers: [],
                loading: false,
                error: action.payload

            }
        default :
        return state
    }
}