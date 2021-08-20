import './App.css';
import SettingsCounter from "./components/settingsCounter/settingsCounter";
import WindowCounter from "./components/windowCounter/windowCounter";
import {useState} from "react";

function App() {
    const [count, setCount] = useState(Number(null))
    const [startValue, setStartValue] = useState(Number(count))
    const [maxValue, setMaxValue] = useState(Number(5))
    console.log('count : ' + count)
    console.log('Start : ' + startValue)
    console.log('Max : ' + maxValue)

    //
    function setSettingsCounter() {
        setCount(+startValue)
    }

    //
    function incCounter() {
        setCount(+count + 1)
    }

    //
    function resCounter() {
        setCount(+startValue)
    }

    return (
        <div className="App">
            <div className={'app_box'}>
                <SettingsCounter setSettingsCounter={setSettingsCounter}
                                 setStartValue={setStartValue}
                                 startValue={+startValue}
                                 maxValue={+maxValue}
                                 setMaxValue={setMaxValue}/>
                <WindowCounter count={+count} incCounter={incCounter}
                               maxValue={+maxValue} resCounter={resCounter}
                               startValue={+startValue}/>
            </div>

        </div>
    );
}

export default App;
