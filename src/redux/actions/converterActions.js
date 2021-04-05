import {
    GET_CURRENCY_REQUESTED,
    GET_CURRENCY_SUCCESS,
    CURRENCY_FAILED,
} from './actionTypes';

export const getCurrency = (data) => {
    return {
        type: GET_CURRENCY_REQUESTED,
        payload: data,
    };
};

export const getCurrencySuccess = (data) => {
    return {
        type: GET_CURRENCY_SUCCESS,
        payload: data
    };
};

export const currencyFailed = (data) => {
    return {
        type: CURRENCY_FAILED,
        payload: data
    };
};