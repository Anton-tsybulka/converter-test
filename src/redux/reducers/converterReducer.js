import {
    nominalShow,
    conversionCurrency,
    conversionCurrencyValue
} from '../../helpers/helpers';

import {
    GET_CURRENCY_REQUESTED,
    GET_CURRENCY_SUCCESS,
    CHANGE_CURRENCY1_REQUESTED,
    CHANGE_CURRENCY1_SUCCESS,
    CHANGE_DEFAULT1_SUCCESS,
    CHANGE_CURRENCY2_REQUESTED,
    CHANGE_CURRENCY2_SUCCESS,
    CHANGE_DEFAULT2_SUCCESS,
    CHANGE_VALUTE1_REQUESTED,
    CHANGE_VALUTE1_SUCCESS,
    CHANGE_VALUTE1DEFAULT_SUCCESS,
    CHANGE_VALUTE2_REQUESTED,
    CHANGE_VALUTE2_SUCCESS,
    CHANGE_VALUTE2DEFAULT_SUCCESS,
    CURRENCY_FAILED,
} from '../actions/actionTypes';

const initialState = {
    loading: true,
    currency: [],
    valute1: 'USD',
    valute2: 'BYN',
    value1: 1,
    value2: 1,
    focus1: false,
    focus2: false,
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
                currency: [...state.currency, ...action.payload],
                value1: nominalShow(state.valute1, action.payload),
                value2: conversionCurrency(state.valute1, state.valute2, action.payload),
            };
        case CHANGE_CURRENCY1_REQUESTED:
            return {
                ...state,
                focus1: false,
                focus2: false,
                loading: true
            };
        case CHANGE_CURRENCY1_SUCCESS:
            return {
                ...state,
                valute1: action.payload,
            };
        case CHANGE_DEFAULT1_SUCCESS:
            return {
                ...state,
                loading: false,
                value1: nominalShow(state.valute1, state.currency),
                value2: conversionCurrency(state.valute1, state.valute2, state.currency),
            };
        case CHANGE_CURRENCY2_REQUESTED:
            return {
                ...state,
                focus1: false,
                focus2: false,
                loading: true
            };
        case CHANGE_CURRENCY2_SUCCESS:
            return {
                ...state,
                valute2: action.payload,
            };
        case CHANGE_DEFAULT2_SUCCESS:
            return {
                ...state,
                loading: false,
                value1: conversionCurrency(state.valute2, state.valute1, state.currency),
                value2: nominalShow(state.valute2, state.currency),
            };
        case CHANGE_VALUTE1_REQUESTED:
            return {
                ...state,
                focus1: true,
                focus2: false,
                loading: true
            };
        case CHANGE_VALUTE1_SUCCESS:
            return {
                ...state,
                loading: true,
                value1: action.payload,
            };
        case CHANGE_VALUTE1DEFAULT_SUCCESS:
            return {
                ...state,
                loading: true,
                value2: conversionCurrencyValue(state.value1, state.valute1, state.valute2, state.currency),
            };
        case CHANGE_VALUTE2_REQUESTED:
            return {
                ...state,
                focus1: false,
                focus2: true,
                loading: true
            };
        case CHANGE_VALUTE2_SUCCESS:
            return {
                ...state,
                loading: false,
                value2: action.payload,
            };
        case CHANGE_VALUTE2DEFAULT_SUCCESS:
            return {
                ...state,
                loading: false,
                value1: conversionCurrencyValue(state.value2, state.valute2, state.valute1, state.currency),
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