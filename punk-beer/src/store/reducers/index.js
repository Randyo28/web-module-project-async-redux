import { FETCH_BEERS_START, FETCH_BEERS_SUCCESS, FETCH_BEERS_FAILURE,
    FETCH_SINGLE_START, FETCH_SINGLE_SUCCESS, FETCH_SINGLE_FAILURE } from '../actions'

const initialState = {
    beers: [],
    loading: false,
    error: '',
}

export const beersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_BEERS_START:
            return {
                ...state,
                loading: true,
                beers: [],
                error: '',
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

const single = {
    single: [],
    error: ''
}

export const singleReducer = (state = single, action) => {
    switch(action.type) {
        case FETCH_SINGLE_START:
            console.log('Start', )
            return {
                ...state,
                single: [],
                error: ''
            }
        case FETCH_SINGLE_SUCCESS:
            return {
                ...state,
                single: action.payload,
                error: 'here'
            }
        case FETCH_SINGLE_FAILURE:
            return {
                ...state,
                single: [],
                error: action.payload
            }
        default :
        return state
    }
}