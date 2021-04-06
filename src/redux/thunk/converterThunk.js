import axios from 'axios';

import {
    getCurrency,
    getCurrencySuccess,
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



