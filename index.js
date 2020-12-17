// // HOMEWORK
// var readlineSync = require('readline-sync')
// var chalk = require('chalk')

// console.log(chalk.bgMagenta('PRESS A KEY AND PRESS ENTER TO GET YOUR PATTERN'))
// var userPattern = readlineSync.promptCL()
// console.log(userPattern)

// function runPattern() {
//   // RIGHT TRIANGLE PATTERN
//   console.log('RIGH TRIANGLE PATTERN')
//   for(i=0; i<=5; i++) {
//     var pattern = userPattern[0].repeat(i)
//     console.log(pattern)
//   }
//   console.log('\n')

//   // SQUARE PATTERN
//   console.log('SQUARE PATTERN')
//   for(i=0; i<=5; i++) {
//     var pattern = userPattern[0].repeat(5)
//     console.log(pattern)
//   }
//   console.log('\n')

//   // LEFT TRIANGLE PATTERN
//   console.log('LEFT TRIANGLE PATTERN')
//   for(i=0; i<=5; i++) {
//     var space = ' '.repeat(5-i);
//     var pattern = userPattern[0].repeat(i)
//     console.log( space + pattern)
//   }
//   console.log('\n')

//   // DOWNWARD TRIANGLE PATTERN
//    console.log('DOWNWARD TRIANGLE PATTERN')
//   for(i=5; i>=0; i--) {
//     var pattern = userPattern[0].repeat(i)
//     console.log(pattern)
//   }
//   console.log('\n')

//   // DOWNWARD LEFT TRIANGLE PATTERN
//   console.log('DOWNWARD LEFT TRIANGLE PATTERN')
//   for(i=5; i>=0; i--) {
//     var space = ' '.repeat(Math.abs(i-5));
//     var pattern = userPattern[0].repeat(i)
//     console.log( space + pattern)
//   }
//   console.log('\n')

// }
// runPattern()


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