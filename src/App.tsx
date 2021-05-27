import React, { useState } from 'react';
import './App.css';
import Window from './window';
// let newCounter =
function App() {
	let [counter, setCounter] = useState(0);
	function counterPlus() {
		setCounter(++counter);
	}
	function resetCounter() {
		setCounter(0);
		//messTEST
	}
	return (
		<div className='App'>
			<Window
				counter={counter}
				counterPlus={counterPlus}
				resetCounter={resetCounter}
			/>
		</div>
	);
}

export default App;
