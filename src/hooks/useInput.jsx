import React, { useState } from 'react';

export default function useInput (props) {
    const [value, setValue] = useState('');

    const onChange = (e) => {
        setValue(e.target.value);
    };

    const onChangeTerm = (props) => {
        setValue(props);
    };
    
    return {
        value, onChange, onChangeCurrentTerm
    };
};
