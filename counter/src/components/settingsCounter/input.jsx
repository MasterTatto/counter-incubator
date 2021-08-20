import React from 'react';
import {TextField} from "@material-ui/core";

const Input = (props) => {
    return (
        <div className={'input'}>
            <span>{props.title} :</span> <TextField label="Select number..." variant="outlined" type={'number'}
        />
        </div>
    );
};

export default Input;
