import axios from 'axios';

import {
    getCurrency,
    getCurrencySuccess,
    changeCurrency1,
    changeCurrencySuccess1,
    changeDefaultSuccess1,
    changeCurrency2,
    changeCurrencySuccess2,
    changeDefaultSuccess2,
    currencyFailed,
} from '../actions/converterActions';

const apiUrl = 'https://www.cbr-xml-daily.ru/daily_json.js';

export const getCurrencyThunk = (data) => {
    return (dispatch) => {
        dispatch(getCurrency(data));
        axios
            .get(apiUrl)
            .then((responce) => {
                const conversion = Object.values(responce.data.Valute);
                dispatch(getCurrencySuccess(conversion))
            })
            .catch((error) => {
                dispatch(currencyFailed(error))
            })
    };
};

export const changeCurrencyThunk1 = (data) => {
    return (dispatch) => {
        dispatch(changeCurrency1(data));
        dispatch(changeCurrencySuccess1(data));
        dispatch(changeDefaultSuccess1(data));
    };
};

export const changeCurrencyThunk2 = (data) => {
    return (dispatch) => {
        dispatch(changeCurrency2(data));
        dispatch(changeCurrencySuccess2(data));
        dispatch(changeDefaultSuccess2(data));
    };
};

