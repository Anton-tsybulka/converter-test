const nominalShow = (item, arr) => arr.find(({ CharCode }) => CharCode === item).Nominal;

const valueShow = (item, arr) => arr.find(({ CharCode }) => CharCode === item).Value;

const defaultValueShow = (item, arr) => arr.find(({ CharCode }) => CharCode === item).defaultValue;

const conversionCurrency = (item, item1, arr) => Math.ceil(nominalShow(item1, arr) * valueShow(item, arr) / valueShow(item1, arr) * 10000) / 10000;

const conversionCurrencyValue = (value, item, item1, arr) => Math.ceil(value * defaultValueShow(item, arr) / defaultValueShow(item1, arr) * 10000) / 10000;

export {
    nominalShow,
    conversionCurrency,
    conversionCurrencyValue,
};