import React, { useState } from 'react';
import { NumberLiteralType } from 'typescript';
import ButtonForm from './ButtonForm';

type propsType = {};
function Window(props: propsType) {
	//
	let [counter, setCounter] = useState<number>(0);
	//
	let [maxCounter, setMaxCounter] = useState<number>(5);
	let [startCounter, SetStartMaxCounter] = useState<number>(0);
	//

	//
	console.log(maxCounter);
	console.log(counter);
	console.log(startCounter);

	function counterPlus() {
		setCounter(++counter);
	}
	function resetCounter() {
		setCounter(startCounter);
	}
	function addStartCounter() {
		if (startCounter < 0 || startCounter > maxCounter) {
			return;
		} else {
			setCounter(startCounter);
			setMaxCounter(maxCounter);
		}
	}
	return (
		<div className={'windows'}>
			<div className='f'>
				<div className={`${'c_1'} `}>
					<label className={'label'}>
						Max Value :{' '}
						<input
							className={'input'}
							type='number'
							value={maxCounter}
							onChange={(e) => setMaxCounter(+e.currentTarget.value)}
						/>
					</label>

					<label className={'label'}>
						Start Value :{' '}
						<input
							value={startCounter}
							onChange={(e) => SetStartMaxCounter(+e.currentTarget.value)}
							className={`${'input'} ${
								startCounter > maxCounter || startCounter < 0
									? 'input_error'
									: ''
							}`}
							type='number'
						/>
					</label>
				</div>

				<div className='b'>
					<ButtonForm
						maxCounter={maxCounter}
						title={'set'}
						counter={counter}
						counterEditor={addStartCounter}
					/>
				</div>
			</div>

			<div className='f'>
				<div className={`${'c'} ${maxCounter === counter ? 'error' : ''}`}>
					{startCounter > maxCounter || startCounter < 0 ? (
						<div className={'er_mes'}>Error</div>
					) : (
						counter
					)}
				</div>
				<div className='b'>
					<ButtonForm
						maxCounter={maxCounter}
						title={'inc'}
						counter={counter}
						counterEditor={counterPlus}
					/>

					<ButtonForm
						maxCounter={maxCounter}
						title={'reset'}
						counter={counter}
						counterEditor={resetCounter}
					/>
				</div>
			</div>
		</div>
	);
}

export default Window;
