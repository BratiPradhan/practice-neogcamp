var readlineSync = require('readline-sync')
var chalk = require('chalk')

var score = 0;

// input
var username = readlineSync.question(chalk.green('What is you name? '));


// processing
var usernameUpperCase = username.toUpperCase()
var welcomeMsg = chalk.bgGreen('HELLO ' + usernameUpperCase)

// output
console.log(welcomeMsg)

// PRINT WRITE OR WRONG IF GREATER THAN 18
// input 
var age = readlineSync.keyInYN('Are you greater than 18 years old? ')

// processing 
if(age === true) {
  score = score + 1
  // output
  console.log('GOOD! YOU ARE MATURE NOW')
  console.log('Your score is ' + score)
} else {
  // output
  console.log('THIS IS NOT FOR KIDS, AS OF NOW')
  console.log('your score ' + score)
}


// FUNCTION TO ADD TWO NUMBERS
function add(a, b=100) {
  var c = a + b
  console.log('OUTPUT ' + c)
}

var inputA = readlineSync.questionInt();
add(inputA)



// FUNCTION TO CHECK ANSWER
var rashu = {
  "question": "WHAT RASHU LOVES TO EAT? ",
  "items": ['ata', 'dal', 'tabdi'],
  "answer": "tabdi"
}

var index = readlineSync.keyInSelect(rashu.items, rashu.question, {cancel: false})
function checkAnswer(option, answer) {
  if(option === answer) {
    score = score + 1
    console.log('I\'m loving it...', score)
  } else {
    console.log('SCORE MAU LE GYA...', score)
  }
}
checkAnswer(rashu.items[index], rashu.answer)



// PRINT YOUR NAME FIVE TIMES
for(i=0; i<=6; i++) {
  var pressAnyKey = readlineSync.keyInPause('PRESS ANY KEY TO CONTINUE...')
  console.log(i + ' ' + username)
}