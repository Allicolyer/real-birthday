const fetch = require("node-fetch");

//sets a defaultOldest date while waiting to fetch oldest person
let defaultOldest = new Date("2 January 1903 UTC");
let fetchedOldest;

//Fetches the list of oldest people from Wikipedia and updates fetchedOldest
fetch(
  "https://en.wikipedia.org/w/api.php?page=List_of_the_oldest_living_people&origin=*&action=parse&format=json&prop=wikitext"
)
  .then(res => res.json())
  .then(json => (fetchedOldest = parse(json)));

//parses the response from Wikipedia
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

function isRealBirthday(input) {
  const oldest = fetchedOldest || defaultOldest;
  //throws as error if a Date object is not given
  if (!(input instanceof Date)) {
    throw "Please give us a Javascript Date Object, i.e new Date()";
  }
  //Throws an error in the date is invalid
  if (isNaN(input.getTime())) {
    throw "Please give us valid date!";
  } else {
    return oldest <= input;
  }
}

module.exports = isRealBirthday;
