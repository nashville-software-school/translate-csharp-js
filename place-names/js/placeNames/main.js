function main() {
  // Put your code here

  // Array of Locations
  const names = [
    "Nashville", "Hong Kong", "The back yard", "Earth",
    "London", "The mall", "Ryman Auditorium", "The Great Wall of China"
  ];

  // A for loop that loops the names array and console logs the strings
  for (let name of names) {
    console.log(`Location ${name}`);
  }

  // This is a space
  console.log("");

  // Variable that filters "the" names out of the names array
  const theNames = names.filter(n => n.startsWith("The"))
  // a console log that produces an array of names that start with THE
  console.log(theNames);

  // A for loop that loops the theNames variable for locations that start with THE. 
  // The console log loops through location names that start with THE
  for (let name of theNames) {
    console.log(`The Locations ${name}`);
  }

}

// calling the main javascript function
main();