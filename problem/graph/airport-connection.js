function airportConnections(airports, routes, startingAirport) {
	
	// setup map
	const adjs = {}
	for (const [u, v] of routes) {
		adjs[u] = adjs[u] || []
		adjs[u].push(v)
	}
	const dests = u => adjs[u] || []
	
	// calc weighted aiports
	const topologicalOrder = () => {
		const marked = {}
		const order = []
		
		const visit = u => {
			marked[u] = true
			dests(u).forEach(v => {
				if (!marked[v]) visit(v)
			})
			order.push(u)
		}

		for (const airport of airports) {
			if (!marked[airport]) visit(airport)
		}
		
		return order.reverse()
	}
	
	// calc needed airports
	const airportNeeded = (o) => {
		const marked = {}
		let order = [...o]
		let i = 0
		
		const visit = u => {
			marked[u] = true
			i++
			dests(u).forEach(v => {
				if (!marked[v]) visit(v)
			})
		}
				
		let start = startingAirport
		let k = 0
		
		while (i < airports.length) {
			visit(start)
			k++
			order = order.filter(v => !marked[v])
			start = order.shift()
		}
		
		return k - 1
	}
	
	
	const o = topologicalOrder()
	return airportNeeded(o)
}

//console.log(airportConnections(
//["BGI", "CDG", "DEL", "DOH", "DSM", "EWR", "EYW", "HND", "ICN", "JFK", "LGA", "LHR", "ORD", "SAN", "SFO", "SIN", "TLV", "BUD"],
//[
//	["DSM", "ORD"],
//	["ORD", "BGI"],
//	["BGI", "LGA"],
//	["SIN", "CDG"],
//	["CDG", "SIN"],
//	["CDG", "BUD"],
//	["DEL", "DOH"],
//	["DEL", "CDG"],
//	["TLV", "DEL"],
//	["EWR", "HND"],
//	["HND", "ICN"],
//	["HND", "JFK"],
//	["ICN", "JFK"],
//	["JFK", "LGA"],
//	["EYW", "LHR"],
//	["LHR", "SFO"],
//	["SFO", "SAN"],
//	["SFO", "DSM"],
//	["SAN", "EYW"]
//],
//"LGA"
//))

console.log(airportConnections(
	["BGI", "CDG", "DEL", "DOH", "DSM", "EWR", "EYW", "HND", "ICN", "JFK", "LGA", "LHR", "ORD", "SAN", "SFO", "SIN", "TLV", "BUD"],
	[
		["LGA", "DSM"],
		["DSM", "ORD"],
		["SIN", "BGI"],
		["SIN", "CDG"],
		["CDG", "DEL"],
		["DEL", "DOH"],
		["DEL", "CDG"],
		["DEL", "EWR"],
		["HND", "ICN"],
		["ICN", "JFK"],
		["JFK", "LGA"],
		["JFK", "SFO"],
		["EYW", "LHR"],
		["SFO", "ORD"],
		["SFO", "LGA"]
	],
	"LGA"
))