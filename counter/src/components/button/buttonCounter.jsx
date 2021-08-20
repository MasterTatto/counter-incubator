import React from 'react';
import {Button} from "@material-ui/core";

const ButtonCounter = (props) => {
    return (
        <Button
            variant="outlined" color="primary" style={{padding:'20px 60px',borderRadius:'10px'}}>
            {props.title}

        </Button>
    );
}

export default ButtonCounter;
