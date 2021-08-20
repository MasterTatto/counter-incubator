import React from 'react';
import Input from "./input";
import ButtonCounter from "../button/buttonCounter";

const SettingsCounter = (props) => {
    const disabledSetBtn = props.maxValue < 0 || props.startValue < 0 || props.maxValue === props.startValue || props.maxValue < props.startValue
    return (
        <div className={'setCounter'}>
            <div className={'wrapper'}>
                <div>
                    <Input title={'Start value'} addValue={props.setStartValue} value={props.startValue}
                           startValue={props.startValue} startValue={props.startValue}/>
                    <Input title={'Max value'} addValue={props.setMaxValue} value={props.maxValue}
                           maxValue={props.maxValue} startValue={props.startValue}/>
                </div>
                <div>
                    <ButtonCounter title={'Set'} clickHandler={() => props.setSettingsCounter()}
                                   disabled={disabledSetBtn}/>
                </div>
            </div>

        </div>
    );
};

export default SettingsCounter;
