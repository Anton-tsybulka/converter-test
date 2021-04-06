import {
    GET_CURRENCY_REQUESTED,
    GET_CURRENCY_SUCCESS,
    CHANGE_CURRENCY1_REQUESTED,
    CHANGE_CURRENCY1_SUCCESS,
    CHANGE_DEFAULT1_SUCCESS,
    CHANGE_CURRENCY2_REQUESTED,
    CHANGE_CURRENCY2_SUCCESS,
    CHANGE_DEFAULT2_SUCCESS,
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

export const changeCurrency1 = (data) => {
    return {
        type: CHANGE_CURRENCY1_REQUESTED,
        payload: data
    };
};

export const changeCurrencySuccess1 = (data) => {
    return {
        type: CHANGE_CURRENCY1_SUCCESS,
        payload: data
    };
};

export const changeDefaultSuccess1 = (data) => {
    return {
        type: CHANGE_DEFAULT1_SUCCESS,
        payload: data
    };
};

export const changeCurrency2 = (data) => {
    return {
        type: CHANGE_CURRENCY2_REQUESTED,
        payload: data
    };
};

export const changeCurrencySuccess2 = (data) => {
    return {
        type: CHANGE_CURRENCY2_SUCCESS,
        payload: data
    };
};

export const changeDefaultSuccess2 = (data) => {
    return {
        type: CHANGE_DEFAULT2_SUCCESS,
        payload: data
    };
};


export const currencyFailed = (data) => {
    return {
        type: CURRENCY_FAILED,
        payload: data
    };
};