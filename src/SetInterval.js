import React, { useState } from "react";
import useSetInterval from "use-set-interval";

function SetInterval(props) {
	const [count, setCount] = useState(0);

	useSetInterval(() => {
		if (props.run) props.oneStep(props.size);
	}, 500);

	return <p>Count = {count}</p>;
}
export default SetInterval;
