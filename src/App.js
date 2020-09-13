import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import Board from "./Board";
import Options from "./Options";
import nQueen from "./nqueen";
import { pickColumn, pickMin, isValid } from "./nqueen-one-step";
import useSetInterval from "use-set-interval";
import SetInterval from "./SetInterval";

const App = () => {
	const [size, setSize] = useState(8);
	const [oneStepStage, setStage] = useState(0);
	let startArr = [];
	for (let i = 0; i < size; i++) {
		startArr.push(-1);
	}
	// const [queenPositions, setPositions] = useState(startArr);
	const [queenPositions, setPositions] = useState(startArr);
	const [pickedColumn, setPickedColumn] = useState(-1);
	const [problems, setProblems] = useState([]);
	const [runInTime, setRunInTime] = useState(false);
	const [lastColumn, setLastColumn] = useState(-1);

	const changeSize = (x) => {
		setSize(x);
		let startArr = [];
		for (let i = 0; i < x; i++) {
			startArr.push(-1);
		}
		setPositions(startArr);
		setPickedColumn(-1);
		setStage(0);
		setRunInTime(false);
		setLastColumn(-1);
	};

	const solveImm = (size) => {
		setRunInTime(false);
		let solution = nQueen(size);
		console.log(solution);

		setPositions(solution);
		setPickedColumn(-1);
		setStage(0);
	};

	const oneStep = (size) => {
		// setRunInTime(false);
		if (isValid(queenPositions, size)) {
			console.log("yo");
			setStage(0);
			setPickedColumn(-1);
			setRunInTime(false);
			solved();
			return;
		}
		if (oneStepStage) {
			const board = pickMin(pickedColumn, problems, queenPositions);
			console.log(board);

			setPositions(board);
			setStage(0);
		} else {
			const [column, problems] = pickColumn(size, queenPositions, lastColumn);
			setPickedColumn(column);
			setLastColumn(column);
			setProblems(problems);
			setStage(1);
			console.log("koniec elsa");
		}
		console.log(oneStepStage);
	};

	const solveInTime = () => {
		setRunInTime(!runInTime);
		// setPickedColumn(-1);
		// setStage(0);
	};
	const reset = () => {
		setPositions(startArr);
		setStage(0);
		setPickedColumn(-1);
		setRunInTime(false);
	};
	const solved = () => {};
	return (
		<div id="general-container">
			<SetInterval oneStep={oneStep} size={size} run={runInTime} />
			<Options
				changeSize={changeSize}
				size={size}
				solveImm={solveImm}
				oneStep={oneStep}
				solveInTime={solveInTime}
				setRunInTime={setRunInTime}
				reset={reset}
			/>
			<div className="board-container">
				<Board
					size={size}
					queenPositions={queenPositions}
					pickedColumn={pickedColumn}
					problems={problems}
				/>
			</div>
			<p>{queenPositions}</p>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
