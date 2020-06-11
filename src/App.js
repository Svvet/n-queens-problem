import React, { useState } from "react";
import ReactDOM from "react-dom";
import Board from "./Board";
import Options from "./Options";
import nQueen from "./nqueen";

const App = () => {
	const [size, setSize] = useState(8);
	let startArr = [];
	for (let i = 0; i < size; i++) {
		startArr.push(-1);
	}
	// const [queenPositions, setPositions] = useState(startArr);
	const [queenPositions, setPositions] = useState(startArr);

	const changeSize = (x) => {
		setSize(x);
		let startArr = [];
		for (let i = 0; i < x; i++) {
			startArr.push(-1);
		}
		setPositions(startArr);
	};

	const solveImm = (size) => {
		let solution = nQueen(size);
		console.log(solution);

		setPositions(solution);
	};
	const solveInTime = (size) => {
		nQueen(size, 1, setPositions);
	};
	return (
		<div id="general-container">
			<Options
				changeSize={changeSize}
				size={size}
				solveImm={solveImm}
				solveInTime={solveInTime}
			/>
			<Board size={size} queenPositions={queenPositions} />
			<p>{queenPositions}</p>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
