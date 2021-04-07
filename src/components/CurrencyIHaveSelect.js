import React from 'react';
import { useDispatch } from 'react-redux';

import { changeCurrencyThunk1, changeValute1Thunk } from '../redux/thunk/converterThunk';
import { Select, Input } from 'antd';

const { Option } = Select;

const CurrencyIHaveSelect = ({ currency, value1, defaultValue1 }) => {
    const dispatch = useDispatch();

    return (
        <div>
            {currency &&
                currency.length !== 0 &&
                <Select
                    defaultValue={defaultValue1}
                    style={{ width: 120 }}
                    onChange={(value) => dispatch(changeCurrencyThunk1(value))}>
                    {currency && currency.map(({ ID, CharCode }) => {
                        return <Option key={ID} value={CharCode}>{CharCode}</Option>
                    })}
                </Select>}
            <Input
                placeholder='0'
                onChange={(value) => isFinite(value.target.value) ? dispatch(changeValute1Thunk(value.target.value)) : null
                }
                value={value1}
                style={{ width: 120, borderStyle: 'none', borderBottom: '1px solid rgb(217, 217, 217)' }} />
        </div>
    )
};

export default CurrencyIHaveSelect;