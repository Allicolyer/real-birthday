const fetchOldestPerson = require("./getWiki.js");

let defaultOldest = new Date("2 January 1903 UTC");
let fetchedOldest;

fetchOldestPerson().then(res => {
  fetchedOldest = res;
});

function isValidBirthday(input) {
  const oldest = fetchedOldest || defaultOldest;
  if (!(input instanceof Date)) {
    throw "Please give us a Javascript Date Object, i.e new Date()";
  }
  //check and make sure this a valid Date
  if (isNaN(input.getTime())) {
    throw "Please give us valid date!!";
  } else {
    return oldest <= input;
  }
}

// setInterval(function() {
//   console.log(isValidBirthday(new Date("1903-01-01T23:59:59.999Z")));
// }, 10);

// isValidBirthday is a promise until it resolves

// isValidBirthday(new Date("2015"));

// console.log(oldest);

// test cases
// inValid Date
// should return Error
isValidBirthday(new Date("Hi"));

//Year Only Date Constructor
//should return true
isValidBirthday(new Date("2015-01-01"));

// //String Date
// //should return true
// // console.log(isValidBirthday("2015"));

// //String Date
// //should return true
// // console.log(isValidBirthday(2015));

// //String Date
// //should return true
// // console.log(isValidBirthday("9"));

// //String Date
// //should return true
// // console.log(isValidBirthday(new Date("Hi")));

// // let dateObject = new Date("2015");
// // let dateCopy = new Date(dateObject);
// // console.log(dateCopy);
// // console.log(isValidBirthday(dateCopy));

// let parser = Date.parse("2 January 1903");
// console.log(parser);
// console.log(Kane.valueOf());
