import React from 'react';

import 'antd/dist/antd.css';
import { Select } from 'antd';
import './App.css';

const { Option } = Select;

const App = () => {

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  }

  return (
    <div>
      <h1>Currency Converter</h1>
      <p>I have</p>
      <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled" disabled>
          Disabled
      </Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>

    </div>
  );
}

export default App;
