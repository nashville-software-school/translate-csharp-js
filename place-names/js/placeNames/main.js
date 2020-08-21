// function main() {
// import System;
// import System.Linq;
// import System.Collections.Generic;

function PlaceNames() {
  // We write C# code in classes.
  function Program() {
    // All C# applications start in the "Main" method.
    // static void Main(string[] args) {
    // We must specify the Type of the "names" variable.
    //  It is a "List" that can only contain "strings".
    const names = ["Nashville", "Hong Kong", "The back yard", "Earth",
      "London", "The mall", "Ryman Auditorium", "The Great Wall of China"]



    // Print some output to the terminal (aka. "Console");
    Console.Log("All Place Names");

    // Iterate over each "name" in the "names" list
    for (let name of names) {
      console.log(`${name}`);
    }


    // When you don't pass an argument to WriteLine, it simply outputs a blank line.
    //  Here we use that to add a little space around the output.
    Console.log();

    // Filter the list to create a new list that only has 
    //  place names that start with the word "The".
    const theNames = names.map((n) => n.StartsWith("The")).ToList(theNames);

    console.log("'The' Place Names");
    for (let name of theNames) {
      console.log(name);
    }
  }
}


main();