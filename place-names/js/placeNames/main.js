//names: "Nashville", "Hong Kong", "The back yard", "Earth",
// "London", "The mall", "Ryman Auditorium", "The Great Wall of China"

function main() {
  // Put your code here
  const Names = [
    "Nashville",
    "Hong Kong",
    "The back yard",
    "Earth",
    "London",
    "The mall",
    "Ryman Auditorium",
    "The Great Wall of China"
  ];

  console.log("Names")
  for (const name of Names)
    console.log(name)

  const theNames = Names.filter(names => names.startsWith("The"))
  console.log("The names")
  console.log(theNames)

}

main();