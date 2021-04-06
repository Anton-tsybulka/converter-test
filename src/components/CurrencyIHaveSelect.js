import React from 'react';
import { useDispatch } from 'react-redux';

import { changeCurrencyThunk1 } from '../redux/thunk/converterThunk';
import { Select, Input } from 'antd';

const { Option } = Select;

const CurrencyIHaveSelect = ({ currency, value1 }) => {
    const defaultValue = currency && currency.length !== 0 && currency[10].CharCode;
    const dispatch = useDispatch();

    return (
        <div>
            {currency &&
                currency.length !== 0 &&
                <Select
                    defaultValue={defaultValue}
                    style={{ width: 120 }}
                    onChange={(value) => dispatch(changeCurrencyThunk1(value))}>
                    {currency && currency.map(({ ID, CharCode }) => {
                        return <Option key={ID} value={CharCode}>{CharCode}</Option>
                    })}
                </Select>}
            <Input
                placeholder={value1}
                onChange={(value) => console.log(value.target.value)}
                style={{ width: 120, borderStyle: 'none', borderBottom: '1px solid rgb(217, 217, 217)' }} />
        </div>
    )
};

export default CurrencyIHaveSelect;