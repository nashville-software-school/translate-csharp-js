

function main() {
  // Put your code here

  console.log("My Enemies List!");
  console.log("----------------");

  //Enemy info array
  const enemies = [
    {
      firstName: "Joshua",
      lastName: "Flowers",
      offences: ["Being a jerk to me in elementary school",
        "Not being nice to me in elementary school"],
      //BOOleon
      isReallyHated: true
    },

    {
      firstName: "Darth",
      lastName: "Vader",
      offences: ["Cut off luke's hand",
        "Murdered all those kids",
        "Unkind management practices"],
      isReallyHated: false
    },

    {
      firstName: "Betty",
      lastName: "McRudeLady",
      offences: ["Phone calls in the theater",
        "Phone calls on the bus",
        "Phone calls in line at the grocery store",
        "Poor conversationalist"],
      isReallyHated: true
    },

    {
      firstName: "Leon",
      lastName: "Peck",
      offences: ["Keeps giving me a hotplate"],
      isReallyHated: false
    },

    {
      firstName: "Karen",
      lastName: "Smith",
      offences: ["Always asks to speak to the manager",
        "extremely entitled"],
      isReallyHated: true
    }
  ]

  // for loop that pulls enemies names and info out of array
  for (let enemy of enemies) {
    if (enemy.isReallyHated === true) {
      console.log(`${enemy.firstName} ${enemy.lastName} really really dislike! EW.`);
    } else {
      console.log(`${enemy.firstName} ${enemy.lastName} still greatly dislike, but don't loathe entirely.`);
    }
  }

}

// calling the main javascript function
main();