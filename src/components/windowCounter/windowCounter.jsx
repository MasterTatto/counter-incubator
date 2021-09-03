import React from 'react';

import ButtonCounter from "../button/buttonCounter";

const WindowCounter = (props) => {
    return (
        <div className={'setCounter'}>
            <div className={'windowBox'}>
                <div className={'window'}><span
                    className={props.count >= props.maxValue ? 'error' : ''}>{props.count}</span></div>
                <div className={'windowBtn'}>
                    <ButtonCounter title={'Inc'} clickHandler={() => props.incCounter()}
                                   disabled={props.count >= props.maxValue}/>
                    <ButtonCounter title={'Res'} clickHandler={() => props.resCounter()}
                                   disabled={props.count === props.startValue}/>
                </div>

            </div>

        </div>
    );
};

export default WindowCounter;
