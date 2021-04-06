import React from 'react';
import { useDispatch } from 'react-redux';

import { Select, Input } from 'antd';
import { changeCurrencyThunk2, changeValute2Thunk } from '../redux/thunk/converterThunk';

const { Option } = Select;

const CurrencyIWantSelect = ({ currency, value2 }) => {
    const defaultValue = currency && currency.length !== 0 && currency[4].CharCode;
    const dispatch = useDispatch();
    console.log(value2);

    return (
        <div>
            {currency &&
                currency.length !== 0 &&
                <Select
                    defaultValue={defaultValue}
                    style={{ width: 120 }}
                    onChange={(value) => dispatch(changeCurrencyThunk2(value))}>
                    {currency && currency.map(({ ID, CharCode }) => {
                        return <Option key={ID} value={CharCode}>{CharCode}</Option>
                    })}
                </Select>}
            <Input
                placeholder='0'
                onChange={(value) => dispatch(changeValute2Thunk(value.target.value))}
                value={value2}
                style={{ width: 120, borderStyle: 'none', borderBottom: '1px solid rgb(217, 217, 217)' }} />
        </div>
    )
};

export default CurrencyIWantSelect;