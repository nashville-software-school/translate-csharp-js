function main() {
  // Put your code here
console.log("My Enemies List!")
console.log("----------------")

const myEnemies = [
  {
    firstName: "Joshua",
    lastName: "Flowers",
    offenses: 
      {
        offense1: "Being a jerk to me in elementary school",
        offense2: "Not being nice to me in elementary school"
      },
    isReallyHated: true
  },
  {
    firstName: "Darth",
    lastName: "Vader",
    offenses: 
      {
        offense1: "Cut off Luke's hand",
        offense2: "Murdered all those kids",
        offense3: "Unkind management practices"
      },
    isReallyHated: false
  },
  {
    firstName: "Betty",
    lastName: "Rudelady",
    offenses: 
      {
        offense1: "Phone calls in the theater",
        offense2: "Phone calls on the bus",
        offense3: "Phone calls in line at the grocery store",
        offense4: "Poor conversationalist"
      },
    isReallyHated: true
  },
  {
    firstName: "Leon",
    lastName: "Peck",
    offenses: 
      {
        offense1: "Keeps giving me a hotplate",
      },
    isReallyHated: false
  }
]

for(enemy of myEnemies) {
  if (enemy.isReallyHated === true) {
    console.log(`${enemy.firstName} ${enemy.lastName} (Really, really dislike!)`)
  } else {
    console.log(`${enemy.firstName} ${enemy.lastName}`)

  }
  }



}

main();