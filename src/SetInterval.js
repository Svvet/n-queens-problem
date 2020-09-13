import React, { useState } from "react";
import useSetInterval from "use-set-interval";

function SetInterval(props) {
	useSetInterval(() => {
		if (props.run) props.oneStep(props.size);
	}, 100);
	return <p></p>;
}
export default SetInterval;
