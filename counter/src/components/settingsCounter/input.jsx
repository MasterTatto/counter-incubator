import React from 'react';
import {TextField} from "@material-ui/core";

const Input = (props) => {
    const disabledSetBtn = props.maxValue < 0 || props.startValue < 0 || props.maxValue === props.startValue || props.maxValue < props.startValue

    return (
        <div className={'input'}>
            <span>{props.title} :</span>
            <TextField label={!disabledSetBtn ? "Select number..." : 'Incorrect value'} variant="outlined"
                       type={'number'}
                       onChange={(e) => props.addValue(e.target.value)} value={props.value}
                       error={disabledSetBtn}

            />
        </div>
    );
}

export default Input;
