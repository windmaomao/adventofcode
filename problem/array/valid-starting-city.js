function validStartingCity(distances, fuel, mpg) {
	const arr = fuel
		.map((f,i) => f * mpg - distances[i])
		
	let k = 0, s = 0
	for (let i = 0; i < arr.length; i++) {
		s += arr[i]
		console.log(s)
		if (s < 0) {
			s = 0
			k = i + 1
		}
	}

	return [arr, k]
}

console.log(validStartingCity(
	[5,25,15,10,15], [1,2,1,0,3], 10
))