function mincost(arr)
{ 
	if (arr.length <= 1) return 0;

    let totalCost = 0;
    while (arr.length > 1) {
        arr.sort((a, b) => a - b);
        let first = arr.shift();
        let second = arr.shift();
        let cost = first + second;
        totalCost += cost;
        arr.push(cost);
    }
    return totalCost;
//write your code here
// return the min cost
  
}

module.exports=mincost;
