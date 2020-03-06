const fetch = require("node-fetch");

//Fetchs the list of oldes people from Wikipedia

async function fetchOldestPerson() {
  let res = await fetch(
    "https://en.wikipedia.org/w/api.php?page=List_of_the_oldest_living_people&origin=*&action=parse&format=json&prop=wikitext"
  );
  if (res.status === 200) {
    let json = await res.json();
    return parse(json);
  }
  throw new Error("oh no");
}

//parses the response from wikipedia
const parse = data => {
  //access the wikitext
  let wikiText = data["parse"]["wikitext"]["*"];
  //split all of the lines
  let wikiSections = wikiText.split("|-");
  //get the first person who is the oldest
  let oldest = wikiSections[1].trim().split("\n|");
  //add UTC
  let oldestBirthday = new Date(`${oldest[3]} UTC`);
  return oldestBirthday;
};

module.exports = fetchOldestPerson;
