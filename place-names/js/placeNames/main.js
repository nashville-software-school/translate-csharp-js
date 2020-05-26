function main() {
  // Put your code here
  const places = ["Nashville", "Hong Kong", "The back yard", "Earth", "London", "The mall", "Ryman Auditorium", "The Great Wall of China"]
  
  console.log("All Place Names")

  for (place of places) {
    console.log(place)
  }

  console.log(" ")

  const filtPlaces = places.filter(fPlace => fPlace.startsWith("The"))

  console.log("'The' Place Names")
  for (place of filtPlaces) {
    console.log(place)
  }
}

main();