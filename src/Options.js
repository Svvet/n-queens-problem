import React from "react";

const Options = ({
	changeSize,
	size,
	solveImm,
	oneStep,
	solveInTime,
	setRunInTime,
}) => {
	let options = [];
	for (let i = 1; i <= 10; i++)
		options.push(
			<option className="size-option" value={i} key={i}>
				{i}
			</option>
		);
	return (
		<div id="options">
			<label htmlFor="size-select">Size Select</label>
			<select
				value={size}
				name="size"
				id="size-select"
				onChange={(e) => changeSize(e.target.value)}
			>
				{options}
			</select>
			<button id="solve-immediate" onClick={(e) => solveImm(size)}>
				Immediate Solution
			</button>
			<button id="solve-in-time" onClick={(e) => solveInTime(size)}>
				Solution In Time
			</button>
			<button
				id="one-step"
				onClick={(e) => {
					setRunInTime(false);

					oneStep(size);
				}}
			>
				Go One Step
			</button>
		</div>
	);
};
export default Options;
