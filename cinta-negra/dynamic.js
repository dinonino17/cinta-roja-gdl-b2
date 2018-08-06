//FORMA RECURSIVA

const stairs = (n) => {
	if (n === 1) return 1
	if (n === 2) return 2
		return stairs(n-1) + stairs(n-2)
}

//PROGRAMACIÓN DINAMICA

const stairsRe = (n,memory) => {
	if (n === 1) return memory[1]
	if (n === 2) return memory[2]
	if (memory[n] !== undefined ) return memory[n]
    else {
        console.log(memory)
        return memory[n] = stairsRe(n-1, memory) + stairsRe(n-2,memory)
    }
    return memory[n]
}

const getStairs = (n) => {
	let memory = new Array(n)
	memory[1] = 1
	memory[2] = 2
	return stairs(n,memory)
}

const a=244;

console.log(getStairs(a));
