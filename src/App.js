import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import 'antd/dist/antd.css';
import { getCurrencyThunk } from './redux/thunk/converterThunk';
import CurrencyIHaveSelect from './components/CurrencyIHaveSelect';
import CurrencyIWantSelect from './components/CurrencyIWantSelect';

import './App.css';
import { Col, Row } from 'antd';

const App = () => {
  const { currency, value1, value2 } = useSelector((state) => state.converter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrencyThunk());
  }, [dispatch]);

  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '5% 0' }}>Currency Converter</h1>
      <Row justify='center'>
        <Col style={{ marginRight: '4em' }}>
          <p style={{ fontSize: '70%', marginBottom: '0' }}>I have</p>
          <CurrencyIHaveSelect
            currency={currency}
            value1={value1} />
        </Col>
        <Col style={{ marginRight: '4em' }}>
          <p style={{ fontSize: '70%', marginBottom: '0' }}>I want to buy</p>
          <CurrencyIWantSelect
            currency={currency}
            value2={value2} />
        </Col>
      </Row>
    </div>
  );
}

export default App;
