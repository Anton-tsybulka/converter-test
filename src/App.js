import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import 'antd/dist/antd.css';
import { getCurrencyThunk } from './redux/thunk/converterThunk';
import CurrencyIHaveSelect from './components/CurrencyIHaveSelect';
import CurrencyIWantSelect from './components/CurrencyIWantSelect';

import './App.css';

const App = () => {
  const { currency, value1, value2 } = useSelector((state) => state.converter);
  const dispatch = useDispatch();
  console.log(currency);

  useEffect(() => {
    dispatch(getCurrencyThunk());
  }, [dispatch]);

  return (
    <div>
      <h1>Currency Converter</h1>
      <p>I have</p>
      <CurrencyIHaveSelect
        currency={currency}
        value1={value1} />
      <p>I want to buy</p>
      <CurrencyIWantSelect
        currency={currency}
        value2={value2} />
    </div>
  );
}

export default App;
