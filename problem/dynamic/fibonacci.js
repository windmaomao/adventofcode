const arr = [0,1,1]

function fib(n) {
	for (let i = 3; i <= n; i++) 
		arr.push(arr[i - 1] + arr[i - 2])
	
	return arr[n]
}

console.log(fib(8))

