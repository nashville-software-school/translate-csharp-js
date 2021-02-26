// Put your code here

// An array of place names
const names = [
    "Nashville", "Hong Kong", "The back yard", "Earth","London", "The mall", "Ryman Auditorium", "The Great Wall of China"
];

// Print out the array of names
console.log("All Place Names");

// Iterate over each name in the names array and print them out 
names.forEach (name => console.log(name));

// Add spacing
console.log("");

// Filter the array of names so that only places that start with "The" are included
const theNames = names.filter(name => name.includes("The"));

// Print out the filtered names
console.log("'The' Place Names")
theNames.forEach(name => console.log(name));