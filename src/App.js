import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import 'antd/dist/antd.css';
import { getCurrencyThunk } from './redux/thunk/converterThunk';
import CurrencyIHaveSelect from './components/CurrencyIHaveSelect';
import CurrencyIWantSelect from './components/CurrencyIWantSelect';

import './App.css';

const App = () => {
  const { currency } = useSelector((state) => state.converter);
  const dispatch = useDispatch();
  const initialValue1 = (currency && currency.length !== 0 && currency[10].CharCode) || 1;
  const [nominal1, setNominal1] = useState(initialValue1);
  const initialValue2 = (currency && currency.length !== 0 && currency[10].CharCode) || 1;
  const [nominal2, setNominal2] = useState(initialValue2);
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
        nominal1={nominal1}
        setNominal1={setNominal1} />
      <p>I want to buy</p>
      <CurrencyIWantSelect
        currency={currency}
        nominal2={nominal2}
        setNominal2={setNominal2} />
    </div>
  );
}

export default App;
