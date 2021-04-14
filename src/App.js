import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCurrencyThunk } from './redux/thunk/converterThunk';
import CurrencySelect from './components/CurrencySelect';
import { changeCurrencyThunk1, changeValute1Thunk, changeCurrencyThunk2, changeValute2Thunk } from './redux/thunk/converterThunk';
import currencyHOK from './hoc/hoc';

import 'antd/dist/antd.css';
import './App.css';
import { Col, Row } from 'antd';

const App = () => {
  const { currency, value1, value2, valute1, valute2, focus1, focus2 } = useSelector((state) => state.converter);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrencyThunk());
  }, [dispatch]);

  const onChangeSelect1 = (value) => {
    dispatch(changeCurrencyThunk1(value))
  };

  const onChangeInput1 = (value) => {
    return isFinite(value.target.value) ? dispatch(changeValute1Thunk(value.target.value)) : null
  };

  const onChangeSelect2 = (value) => {
    dispatch(changeCurrencyThunk2(value))
  };

  const onChangeInput2 = (value) => {
    return isFinite(value.target.value) ? dispatch(changeValute2Thunk(value.target.value)) : null
  };

  const IHaveSelect = currencyHOK(CurrencySelect, {
    currency,
    value: value1,
    valute: valute1,
    onChangeSelect: onChangeSelect1,
    onChangeInput: onChangeInput1,
    focus: focus1
  });

  const IWantSelect = currencyHOK(CurrencySelect, {
    currency,
    value: value2,
    valute: valute2,
    onChangeSelect: onChangeSelect2,
    onChangeInput: onChangeInput2,
    focus: focus2
  });

  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '5% 0' }}>Currency Converter</h1>
      <Row justify='center'>
        <Col style={{ margin: '0 2em' }}>
          <p style={{ fontSize: '70%', marginBottom: '0' }}>I have</p>
          <IHaveSelect />
        </Col>
        <Col style={{ margin: '0 2em' }}>
          <p style={{ fontSize: '70%', marginBottom: '0' }}>I want to buy</p>
          <IWantSelect />
        </Col>
      </Row>
    </div>
  );
}

export default App;
