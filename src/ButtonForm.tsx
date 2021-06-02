import React from 'react';
type ButtonPropsType = {
	counter: number;
	counterEditor: () => void;
	title: string;
	maxCounter: number;
	
	
};
function ButtonForm(props: ButtonPropsType) {
	return (
		<button
			onClick={() => {
				if (props.counter === props.maxCounter) {
					return;
				}
				props.counterEditor();
			}}
			className={`${'btn'}  ${
				props.counter === props.maxCounter ? 'btnStop' : ''
			}`}
		>
			{props.title}
		</button>
	);
}

export default ButtonForm;
