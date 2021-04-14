import React from 'react';

import { Select, Input } from 'antd';

const { Option } = Select;

const CurrencySelect = ({ currency, value, valute, onChangeSelect, onChangeInput }) => {

    return (
        <div>
            {currency &&
                currency.length !== 0 &&
                <Select
                    defaultValue={valute}
                    style={{ width: 120 }}
                    onChange={(value) => onChangeSelect(value)}>
                    {currency && currency.map(({ ID, CharCode }) => {
                        return <Option key={ID} value={CharCode}>{CharCode}</Option>
                    })}
                </Select>}
            <Input
                placeholder='0'
                onChange={(value) => onChangeInput(value)}
                value={value}
                style={{ width: 120, borderStyle: 'none', borderBottom: '1px solid rgb(217, 217, 217)' }} />
        </div>
    )
};

export default CurrencySelect;