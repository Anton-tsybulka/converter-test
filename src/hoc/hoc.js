import React from 'react';

const currencyHOK = (Wrapped, props) => {
    return class extends React.Component {
        render() {
            return <Wrapped {...props} />
        };
    };
};

export default currencyHOK;