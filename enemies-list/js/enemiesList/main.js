function main() {
  // Put your code here
  console.log("Who are my enemies")
  const myEnemies = GetEnemies();
  for (let anEnemy of myEnemies)
    if (anEnemy.IsReallyHated === true) {
      console.log(`${anEnemy.firstName} is my enemy`)
    } else {
      console.log(`${anEnemy.firstName} is no threat`)
    }
}

//function for enemies
function GetEnemies() {
  const theList = [
    {
      firstName: "Joshua",
      lastName: "flowers",
      Offenses: ["Being a jerk to me in elementary school", "Not being nice to me in elementary school"],
      IsReallyHated: true
    },
    {
      firstName: "Darth",
      lastName: "Vader",
      Offenses: ["Cut off Luke's hand", "Murdered all those kids", "Unkind management practices"],
      IsReallyHated: false
    },
    {
      firstName: "Betty",
      lastName: "Rudelady",
      Offenses: ["Phone calls in the theater", "Phone calls on the bus", "Phone calls in line at the grocery store", "Poor conversationalist"],
      IsReallyHated: true

    }
  ]
  return theList

}


main();