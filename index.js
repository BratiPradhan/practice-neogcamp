
// PRINT SUM OF NUMBERS STARTING FROM 22
function add(a, b) {
  var sum = a + b
  console.log(sum)
}

for(i=0; i<10; i++) {
  add(22, i)
}


// PRINT ITEMS FROM GROCERY ARRAY
var grocery = ['milk', 'egg', 'bread', 'flour', 'cheese']
console.log(grocery[0])
console.log(grocery[2])
console.log(grocery[grocery.length -1])
console.log('\n')

for (i=0; i<grocery.length; i++) {
  console.log(grocery[i])
}