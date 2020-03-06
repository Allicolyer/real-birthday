const fetch = require("node-fetch");

//sets a defaultOldest date while waiting for fetchOldestPerson
let defaultOldest = new Date("2 January 1903 UTC");
let fetchedOldest;

//Fetches the list of oldest people from Wikipedia and updates the fetchedOldest person equal this value.
fetch(
  "https://en.wikipedia.org/w/api.php?page=List_of_the_oldest_living_people&origin=*&action=parse&format=json&prop=wikitext"
)
  .then(res => res.json())
  .then(json => (fetchedOldest = parse(json)));

//parses the response from wikipedia
const parse = data => {
  //access the wikitext
  let wikiText = data["parse"]["wikitext"]["*"];
  //split all of the lines
  let wikiSections = wikiText.split("|-");
  //access the first person in that list
  let oldest = wikiSections[1].trim().split("\n|");
  //access the birthday of the oldest person, add UTC
  let oldestBirthday = new Date(`${oldest[3]} UTC`);
  return oldestBirthday;
};

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

module.exports = isValidBirthday;

//Test Cases

// Invalid Date should return Error
// console.log(isValidBirthday(new Date("Hi")));

// Valid Birthday - should return true
// console.log(isValidBirthday(new Date("2015")));

// Valid Birthday - should return true
// console.log(isValidBirthday(new Date("2015-01-04")));

// Invalid Birthday - should return false
// console.log(isValidBirthday(new Date("1815-01-04")));
