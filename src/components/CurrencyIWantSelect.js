import React, { useState } from 'react';

import { Select } from 'antd';

const { Option } = Select;

const CurrencyIWantSelect = ({ currency }) => {
    const [cash, setCash] = useState(0)
    const defaultValue = currency && currency.length !== 0 && currency[10][0];

    const handleChange = (value) => {
        setCash(value);
    };

    return (
        <div>
            {currency &&
                currency.length !== 0 &&
                <Select
                    defaultValue={defaultValue}
                    style={{ width: 120 }}
                    onChange={handleChange}>
                    {currency && currency.map(item => {
                        return <Option key={item[0]} value={item[0]}>{item[0]}</Option>
                    })}
                </Select>}
            <p>{cash}</p>
        </div>
    )
};

export default CurrencyIWantSelect;