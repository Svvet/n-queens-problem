import React from "react";
import Square from "./Square";

//<i class="fas fa-chess-queen"></i>
const Board = ({ size, queenPositions, pickedColumn, problems }) => {
	if (size > 0) {
		let columns = [];

		for (let i = 0; i < size; i++) {
			let squares = [];
			if (i === pickedColumn)
				for (let j = 0; j < size; j++)
					if (queenPositions[i] === j)
						squares.push(
							<Square key={j} position={[i, j]} queen={1} problems={problems} />
						);
					else
						squares.push(
							<Square key={j} position={[i, j]} queen={0} problems={problems} />
						);
			else
				for (let j = 0; j < size; j++)
					if (queenPositions[i] === j)
						squares.push(<Square key={j} position={[i, j]} queen={1} />);
					else squares.push(<Square key={j} position={[i, j]} queen={0} />);
			if (i == pickedColumn) {
				columns.push(
					<div key={i} className="column pickedColumn">
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
