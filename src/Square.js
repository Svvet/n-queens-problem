import React from "react";

const Square = ({ queen }) => {
	if (queen)
		return (
			<div className="square">
				<i className="fas fa-chess-queen"></i>
			</div>
		);
	else return <div className="square"></div>;
};

export default Square;
