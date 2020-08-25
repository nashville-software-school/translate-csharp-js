function main() {
  // Put your code here
  console.log("Do you believe in Magic?")
  console.log("---------------")

  const spells = [
    {
      Name: "Turn enemy into a newt",
      IsEvil: true,
      EnergyReqired: 5.1
    },
    {
      Name: "Conjure some gold for a local charity",
      IsEvil: false,
      EnergyReqired: 2.99
    },
    {
      Name: "Give a deaf person the ability to heal",
      IsEvil: false,
      EnergyReqired: 12.2
    },
    {
      Name: "Make yourself emperor of the universe",
      IsEvil: true,
      EnergyReqired: 100.0
    },
    {
      Name: "Convince your relatives your political views are correct",
      IsEvil: false,
      EnergyReqired: 2921.5
    }
  ]
  console.log("Good Book")
  for (spell of spells) {
    if (spell.IsEvil === false) {
      console.log(`${spell.Name}`)
    }
  }

  console.log("Evil Book")
  for (spell of spells) {
    if (spell.IsEvil === true) {
      console.log(`${spell.Name}`)
    }
  }
}

main();

// function main() {
//   console.log("Do you believe in magic?");
//   console.log("------------------------");

//   const allSpells = getAllSpells();
//   const goodBook = makeGoodSpellBook(allSpells);
//   const evilBook = makeEvilSpellBook(allSpells);

//   displaySpellBook(goodBook);
//   console.log();
//   displaySpellBook(evilBook);
// }

// function displaySpellBook(book) {
//   console.log(book.title);
//   for (aSpell of book.spells) {
//     console.log(aSpell.name);
//   }
// }

// function makeEvilSpellBook(allSpells) {
//   const evilBook = {
//     title: "Evil Book",
//     spells: allSpells.filter(spell => spell.isEvil)
//   };

//   return evilBook;
// }

// function makeGoodSpellBook(allSpells) {
//   const goodBook = {
//     title: "Good Book",
//     spells: allSpells.filter(spell => !spell.isEvil)
//   };

//   return goodBook;
// }

// function getAllSpells() {
//   const allSpells = [
//     {
//       name: "Turn enemy into a newt",
//       isEvil: true,
//       energyRequired: 5.1
//     },
//     {
//       name: "Conjure some gold for a local charity",
//       isEvil: false,
//       energyRequired: 2.99
//     },
//     {
//       name: "Give a deaf person the ability to heal",
//       isEvil: false,
//       energyRequired: 12.2
//     },
//     {
//       name: "Make yourself emperor of the universe",
//       isEvil: true,
//       energyRequired: 100.0
//     },
//     {
//       name: "Convince your relatives your political views are correct",
//       isEvil: false,
//       energyRequired: 2921.5
//     }
//   ];

//   return allSpells;
// }

// main();