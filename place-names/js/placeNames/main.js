function main() {
  // Put your code here
const names = [
  "Nashville", "Hong Kong", "The back yard", "Earth",
  "London", "The mall", "Ryman Auditorium", "The Great Wall of China"
]

console.log("All Place Names")
for (name of names) {
  console.log(name)
}
console.log(" ")

console.log("'The' Place Names")
const theNames = names.filter(tn => tn.startsWith("The"))
for (name of theNames) {
  console.log(name)
}

}

main();