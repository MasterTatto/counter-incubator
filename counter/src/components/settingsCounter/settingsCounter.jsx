import React from 'react';
import Input from "./input";
import ButtonCounter from "../button/buttonCounter";

const SettingsCounter = () => {
    return (
        <div className={'setCounter'}>
            <div className={'wrapper'}>
                <div>
                    <Input title={'Start value'}/>
                    <Input title={'Max value'}/>
                </div>
                <div>
                    <ButtonCounter title={'Set'}/>
                </div>
            </div>

        </div>
    );
};

export default SettingsCounter;
