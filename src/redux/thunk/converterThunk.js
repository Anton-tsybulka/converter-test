import axios from 'axios';

import {
    getCurrency,
    getCurrencySuccess,
    currencyFailed,
} from '../actions/converterActions';

const apiUrl = 'https://www.cbr-xml-daily.ru/daily_json.js';

export const getWorkersThunk = (data) => {
    return (dispatch) => {
        dispatch(getCurrency(data));
        axios
            .get(apiUrl)
            .then((responce) => {
                dispatch(getCurrencySuccess(responce))
            })
            .catch((error) => {
                dispatch(currencyFailed(error))
            })
    };
};



