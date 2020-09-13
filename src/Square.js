import React from "react";

const Square = ({ queen, problems, position }) => {
	let j = position[1];
	if (problems) {
		if (queen)
			return (
				<div className="square queen">
					<i className="fas fa-chess-queen"></i>
					<p>{problems[j]}</p>
				</div>
			);
		else
			return (
				<div className="square">
					<p>{problems[j]}</p>
				</div>
			);
	} else {
		if (queen)
			return (
				<div className="square">
					<i className="fas fa-chess-queen"></i>
					<p></p>
				</div>
			);
		else return <div className="square"></div>;
	}
};

export default Square;
