function filtraPares(arr) {
	if (!arr || !arr.length) return;

// filter números pares ===
	const filteredArr = arr.filter((item) => item % 2 === 0);


// filter números impares !==
	const filteredArr = arr.filter((item) => item % 2 !== 0);

	return filteredArr;
}

console.log(filtraPares([1, 2, 3, 4]));