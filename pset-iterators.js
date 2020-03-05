/*
Instructions:

For this problem set you will be working with a
list of U.S. Presidents stored as an array of
objects. The array has **already been provided for
you** as a variable named "presidents".

You can see the full list of us presidents in the
provided file named `us-presidents.js`

All of the following problems require that you
use the `presidents` array to solve them.

Only use either `.map()`, `.find()` or `.filter()` to solve the problems in the problem set

  * Do not use `.forEach()`

You can use any additional variables that you deem necessary
to solve each problem.

You can use either regular functions or
arrow functions **for your iterator callbacks**

*/

const presidents = require('./us-presidents.js') // <- DO NOT Remove; this represents an array consisting of U.S. Presidents

/***********
Problem 1:

1. Using the `presidents` array, return the "name" of the
first president that was a member of the "Whig" party.
Save the data in a variable called `firstWhigPresident`,
declared with const

2. Print `firstWhigPresident` to the console

Expected Result Shape: A string representing the full name of the president that meets the criteria

************/
console.log('Problem 1:')

// Add your code below this line

const firstWhigPresident = presidents.find((president) => {
  return president.party === 'Whig'
}).president
console.log(firstWhigPresident)

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 2:

1. Using the `presidents` array, return a list of all the
presidents whose first name was "James".
Save the data in a variable called `presidentsNamedJames`,
declared with const (return a list of objects)

2. Print `presidentsNamedJames` to the console

Expected Result Shape: An array of objects (with each object representing a president)

************/
console.log('Problem 2:')

// Add your code below this line

const presidentsNamedJames = presidents.filter((president) => {
  const presidentName = president.president.split(' ')
  return presidentName[0] === 'James'
})
console.log(presidentsNamedJames)

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 3:

1. Using the `presidents` array, return a list of the
parties associated each of the presidents.
Save the data in a variable called `presidentialParties`,
declared with const

2. Print `presidentialParties` to the console

(partial) Expected Result: ['No Party', 'Federalist', 'Democratic-Republican', 'Democratic-Republican', 'Democratic-Republican', 'Democratic', .... ]

Expected Result Shape: An array of strings representing the party name of each president

Tip: your new array should contain 45 elements

************/
console.log('Problem 3:')

// Add your code below this line

const presidentialParties = presidents.map((president) => {
  return president.party
})

console.log(presidentialParties)

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 4:

1. Using the `presidents` array, return a
list of the presidents who took office
between 1850 and 1900. Save the data in a variable called `presidentsBetween1850and1900`, declared with const

2. Print `presidentsBetween1850and1900` to the console

Expected Result Shape: An array of objects (with each object representing a president)

************/
console.log('Problem 4:')

// Add your code below this line
const presidentsBetween1850and1900 = presidents.filter((president) => {
  const year = president.took_office.split('-')[0]
  return '1850' <= year && '1900' >= year
})
console.log(presidentsBetween1850and1900)
// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 5:

1. Using the `presidents` array, return a list of the
presidents who are still alive today.
Save the data in a variable called `livingPresidents`,
declared with const

2. Print `livingPresidents` to the console

Expected Result Shape: An array of objects (with each object representing a president)

************/
console.log('Problem 5:')

// Add your code below this line
const livingPresidents = presidents.filter((president) => {
  return president.death_year === null
})
console.log(livingPresidents)
// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 6:

1. Using the `presidents` array,
return the "name" of the first "Republican" president.
Save the data in a variable
called `firstRepublican`, declared with const

2. Print `firstRepublican` to the console

Expected Result Shape: A string representing the full name of the president that meets the criteria

************/
console.log('Problem 6:')

// Add your code below this line

const firstRepublican = presidents.find((president) => {
  return president.party === 'Republican'
}).president

console.log(firstRepublican)

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 7:

1. Using the `presidents` array, return a
list of the presidents who served less than 4 years
in office. Save the data in a variable
called `shortTermPresidents`, declared with const

2. Print `shortTermPresidents` to the console

Expected Result Shape: An array of objects (with each object representing a president)

************/
console.log('Problem 7:')

// Add your code below this line

const shortTermPresidents = presidents.filter((president) => {
  if (president.left_office !== null) {
  let startYear = parseInt(president.took_office.split('-')[0])
  let endYear = parseInt(president.left_office.split('-')[0])
  let startMonth = parseInt(president.took_office.split('-')[0])
  let endMonth = parseInt(president.left_office.split('-')[0])
  if ((endYear-startYear < 4) && (endMonth >= startMonth)) {
    return president
  }
  else{
  }
}
else {
}
})
console.log(shortTermPresidents)
// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 8 (Bonus):

1. Using the `presidents` array, return an object that represents the number of occurrences of the first name of all of the presidents (past and current)

Save the data in a variable
called `firstNameCount`, declared with const

2. Print `firstNameCount` to the console

Expected Result Shape: An object where each key is the firstName and the value is the number of presidents that share that first name.

Example (not the actual answer):

{ "James":  5, "George": 3, "Barack": 1, ....}

************/
console.log('Problem 8:')

// Add your code below this line

function firstNameCount (presidents) {
  // pull out first names into array
  const firstNamesArray = presidents.map((president) => {
    return president.president.split(' ')[0]
  })
  console.log(firstNamesArray)
  // use reduce to add up
  //if / else inside of reduce
  return firstNamesArray.reduce((nameCount, name) => {
    if (nameCount[name] === undefined) {
      // if doesn't exist yet, add it and add count of one
      nameCount[name] = 1
    } else {
      nameCount[name] = nameCount[name] + 1
    }
    return nameCount
  }, {})
}

  console.log(firstNameCount(presidents))


// firstNameCount(presidents)


// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')
