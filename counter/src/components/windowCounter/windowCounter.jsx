import React from 'react';

import ButtonCounter from "../button/buttonCounter";

const WindowCounter = () => {
    return (
        <div className={'setCounter'}>
            <div className={'windowBox'}>
                <div className={'window'}><span>2</span></div>
                <div className={'windowBtn'}>
                    <ButtonCounter title={'Inc'}/>
                    <ButtonCounter title={'Res'}/>
                </div>

            </div>

        </div>
    );
};

export default WindowCounter;
