/*
Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.
*/

//solution 1
function getDivisorsCnt(n){
    // todo
  var count=0
  for(var i=0;i<=n;i++){
    if(n%i == 0){ count++}
  }
  return count
}

//solution2
function getDivisorsCnt(n){
    // todo
  var div = []
  for(var i=1; i<=n;i++){
    if(n%i ==0){div.push(n)}
  }
    return div.length
}
