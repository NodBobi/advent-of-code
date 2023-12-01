const fs = require('node:fs')

fs.readFile("input.txt", { encoding: "utf-8" }, (err, file) => {
	console.log(file)

	const result = solveDay1(file.trim().split("\n"))
	console.log("Result:", result)
})

function solveDay1(input) {
	let total = 0;
	input.forEach(row => {
		let firstInt;
		let secondInt;

		const firstIteration = row.split("")
		for(let i = 0; i < firstIteration.length; i++) {
			if(!isNaN(parseInt(firstIteration[i]))) {
				firstInt = firstIteration[i]
				break;
			}
		}

		const secondIteration = reverseString(row).split("")
		for(let i = 0; i < secondIteration.length; i++) {
			if(!isNaN(parseInt(secondIteration[i]))) {
				secondInt = secondIteration[i]
				break;
			}
		}

		total += parseInt(firstInt + secondInt)
	})

	return total
}

function reverseString(string) {
	let stringToReturn = ""
	for(let i = 0; i < string.length; i++) {
		stringToReturn += string[string.length - 1 - i]
	}
	return stringToReturn
}
