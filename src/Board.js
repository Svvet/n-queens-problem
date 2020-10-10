import React from "react";
import Square from "./Square";

//<i class="fas fa-chess-queen"></i>
const Board = ({
	size,
	queenPositions,
	pickedColumn,
	problems,
	markSquare,
	setPickedColumn,
	checkColumn,
	setProblems,
	setStage,
}) => {
	if (size > 0) {
		let columns = [];

		for (let i = 0; i < size; i++) {
			let squares = [
				<i
					className="fas fa-arrow-alt-circle-down column-picker"
					onClick={() => {
						setPickedColumn(i);
						let conflicts = checkColumn(i, queenPositions);
						setProblems(conflicts);
						console.log(queenPositions);
						setStage(1);
					}}
					key={i + 1000}
				></i>,
			];
			if (i === pickedColumn)
				for (let j = 0; j < size; j++)
					if (queenPositions[i] === j)
						squares.push(
							<Square
								key={j}
								position={[i, j]}
								queen={1}
								problems={problems}
								markSquare={markSquare}
							/>
						);
					else
						squares.push(
							<Square
								key={j}
								position={[i, j]}
								queen={0}
								problems={problems}
								markSquare={markSquare}
							/>
						);
			else
				for (let j = 0; j < size; j++)
					if (queenPositions[i] === j)
						squares.push(
							<Square
								key={j}
								position={[i, j]}
								queen={1}
								markSquare={markSquare}
							/>
						);
					else
						squares.push(
							<Square
								key={j}
								position={[i, j]}
								queen={0}
								markSquare={markSquare}
							/>
						);
			if (i == pickedColumn) {
				columns.push(
					<div key={i} className="column" id="pickedColumn">
						{squares}
					</div>
				);
			} else {
				columns.push(
					<div key={i} className="column">
						{squares}
					</div>
				);
			}
		}

		return <div className="board">{columns}</div>;
	} else return <div>abc</div>;
};

export default Board;
