function main() {
  // Put your code here
  const names = [
    "Nashville", "Hong Kong", "The back yard", "Earth",
    "London", "The mall", "Ryman Auditorium", "The Great Wall of China"
  ]
  console.log(names)

  const theNames = names.filter(name => name.startsWith("The"))
  console.log(theNames)
}

main();