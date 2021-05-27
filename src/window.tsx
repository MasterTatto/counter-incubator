import React from 'react';

type propsType = {
	counter: number;
	counterPlus: () => void;
	resetCounter:() => void
};
function Window(props: propsType) {
	return (
		<div>
			<div className='f'>
				<div className={`${'c'} ${props.counter === 5 ? 'stop' : ''}`}>
					{props.counter}
				</div>
				<div className='b'>

					<button
						onClick={() => {
							if (props.counter === 5) {
								return;
							}
							props.counterPlus();
						}}
						className={`${'btn'} ${props.counter === 5 ? 'btnStop' : ''} `}
					>
						inc
					</button>


					<button onClick={() => {
						if(props.counter === 0) {
							return
						}
						props.resetCounter()
						}} className={`${'btn'} ${props.counter === 0 ? 'btnStop' : ''}`}>
							reset
							</button>



				</div>
			</div>
		</div>
	);
}

export default Window;
