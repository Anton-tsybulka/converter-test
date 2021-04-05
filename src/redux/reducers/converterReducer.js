
import {
    GET_CURRENCY_REQUESTED,
    GET_CURRENCY_SUCCESS,
    CURRENCY_FAILED,
} from '../actions/actionTypes';

const initialState = {
    loading: true,
    currency: [],
    error: null
};

export default function converterReducer(state = initialState, action) {

    switch (action.type) {
        case GET_CURRENCY_REQUESTED:
            return { ...state };
        case GET_CURRENCY_SUCCESS:
            return {
                ...state,
                loading: false,
                currency: [...state.currency, ...action.payload]
            };
        case CURRENCY_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message
            };

        default:
            return state;
    }
};