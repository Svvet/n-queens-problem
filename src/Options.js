import React from "react";

const Options = ({
	changeSize,
	size,
	solveImm,
	oneStep,
	solveInTime,
	setRunInTime,
	reset,
	runInTime,
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
			<div id="size-container">
				<label htmlFor="size-select">Size Select</label>
				<select
					value={size}
					name="size"
					id="size-select"
					onChange={(e) => changeSize(e.target.value)}
				>
					{options}
				</select>
			</div>
			<button id="solve-immediate" onClick={(e) => solveImm(size)}>
				Immediate Solution
			</button>
			<div id="sol-in-time-container">
				<button id="solve-in-time" onClick={(e) => solveInTime(size)}>
					Solution In Time
				</button>
				<p id="state-of-in-time" className={runInTime ? "running" : "stop"}>
					{runInTime ? "Running" : "Stop"}
				</p>
			</div>

			<button
				id="one-step"
				onClick={(e) => {
					setRunInTime(false);

					oneStep(size);
				}}
			>
				Go One Step
			</button>
			<button
				id="reset"
				onClick={(e) => {
					reset();
				}}
			>
				Reset
			</button>
		</div>
	);
};
export default Options;
