import React from 'react';

import { Select, Input } from 'antd';

const { Option } = Select;

const CurrencyIWantSelect = ({ currency, value2 }) => {
    const defaultValue = currency && currency.length !== 0 && currency[4].CharCode;

    const handleChange = (value) => {
        /* setNominal2(nominalShow(value, currency)); */
    };

    return (
        <div>
            {currency &&
                currency.length !== 0 &&
                <Select
                    defaultValue={defaultValue}
                    style={{ width: 120 }}
                    onChange={handleChange}>
                    {currency && currency.map(({ ID, CharCode }) => {
                        return <Option key={ID} value={CharCode}>{CharCode}</Option>
                    })}
                </Select>}
            <Input
                placeholder={value2}
                style={{ width: 120, borderStyle: 'none', borderBottom: '1px solid rgb(217, 217, 217)' }} />
        </div>
    )
};

export default CurrencyIWantSelect;