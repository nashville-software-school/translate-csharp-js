function main() {
  // Put your code here
  console.log("Do you believe in magic?")
  console.log("------------------------")

  const allSpells = getAllSpells()
  const goodBook = makeGoodSpellBook(allSpells)
  const evilBook = makeEvilSpellBook(allSpells)

  displaySpellBook(goodBook)
  console.log("\n")
  displaySpellBook(evilBook)
}

const displaySpellBook = (book) => {
  console.log(book.title)
  book.spells.forEach(spell => console.log(spell.name))
}

const makeGoodSpellBook = (spells) => {
  return {
    title: "Good Book",
    spells: spells.filter(spell => !spell.isEvil)
  }
}

const makeEvilSpellBook = (spells) => {
  return {
    title: "Evil Book",
    spells: spells.filter(spell => spell.isEvil)
  }
}

const getAllSpells = () => {
  const allSpells = [
    {
      name: "Turn enemy into a newt",
      isEvil: true,
      energyReqired: 5.1
    },
    {
      name: "Conjure some gold for a local charity",
      isEvil: false,
      energyReqired: 2.99
    },
    {
      name: "Give a deaf person the ability to heal",
      isEvil: false,
      energyReqired: 12.2
    },
    {
      name: "Make yourself emperor of the universe",
      isEvil: true,
      energyReqired: 100.0
    },
    {
      name: "Convince your relatives your political views are correct",
      isEvil: false,
      energyReqired: 2921.5
    }
  ]
  return allSpells
}

main();