function main() {
  // Put your code here
  const names = ["Nashville", "Hong Kong", "The back yard", "Earth",
    "London", "The mall", "Ryman Auditorium", "The Great Wall of China"]

  for (let name of names) {
    console.log(name)
  }

  const listNames = names
  for (name of listNames) {
    if (name.startsWith("The") === true)
      console.log(name)
  }
}

main();