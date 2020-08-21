function main() {
  // Put your code here

  // Create names array
  const names = ["Nashville", "Hong Kong", "The back yard", "Earth",
    "London", "The mall", "Ryman Auditorium", "The Great Wall of China"]

  // Output header to the console
  console.log("All Place Names")

  // Iterate over each name in the "names" list
  names.forEach(name => console.log(name))

  /* Filter the list to create a new list that only has 
  place names that start with the word "The". */

  theNames = names.filter(name => name.substring(0, 3) === "The")

  console.log("\n'The' Place Names")
  theNames.forEach(name => console.log(name))
}

main();