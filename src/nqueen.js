function nQueen(N) {
	let count = 0;
	let board = [];
	for (let i = 0; i < N; i++) {
		board.push(-1);
	}
	if (N == 1) return [0];
	if (N == 2 || N == 3) return [];

	function isValid() {
		for (let i = 0; i < N; i++) {
			if (board[i] == -1) return false;
			if (problems(i, board[i]) != 0) return false;
		}
		return true;
	}

	function problems(index, value) {
		let amount = 0;

		let temp1 = 0;
		let temp2 = 0;
		if (board.slice(0, index).includes(value)) amount++;
		if (board.slice(index + 1, N).includes(value)) amount++;

		for (let i = index - 1; i >= 0; i--) {
			if (value - (index - i) >= 0)
				if (board[i] == value - (index - i)) temp1 = 1;
			if (value + (index - i) < N)
				if (board[i] == value + (index - i)) temp2 = 1;
		}
		amount += temp1 + temp2;

		temp1 = 0;
		temp2 = 0;
		for (let i = index + 1; i < N; i++) {
			if (value - (i - index) >= 0)
				if (board[i] == value - (i - index)) temp1 = 1;
			if (value + (i - index) < N)
				if (board[i] == value + (i - index)) temp2 = 1;
		}

		amount += temp1 + temp2;

		return amount;
	}
	function checkColumn(index) {
		let conflicts = [];
		for (let i = 0; i < N; i++) {
			let probs = problems(index, i);
			conflicts.push(probs);
		}
		return conflicts;
	}
	function pickRand(n) {
		return Math.floor(Math.random() * n);
	}
	function pickMin(index) {
		let probs = checkColumn(index);
		let min = 6;
		let idx = [];
		probs.forEach((val) => {
			if (min > val) min = val;
		});

		probs.forEach((val, x) => {
			if (val == min) idx.push(x);
		});
		if (idx.length) {
			board[index] = idx[pickRand(idx.length)];
		}
	}

	for (let i = 0; i < N; i++) {
		pickMin(i);
	}
	while (!isValid()) {
		if (count > 2000) {
			count = 0;
			board = [];
			for (let i = 0; i < N; i++) {
				board.push(-1);
			}
		}
		count++;
		pickMin(pickRand(N));
	}

	console.log(board);
	console.log("Count: " + count);

	return board;
}

export default nQueen;
