import React from 'react';
import {Button} from "@material-ui/core";

const ButtonCounter = (props) => {
    return (
        <Button
            onClick={() => props.clickHandler()}
            disabled={props.disabled}
            variant="outlined" color="primary"
            style={{padding: '20px 60px', borderRadius: '10px', border: '3px solid'}}>
            {props.title}

        </Button>
    )
}

export default ButtonCounter;
