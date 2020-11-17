function main() {
  // Put your code here
  console.log("Do you believe in magic?")
  console.log("------------------------")

  const allSpells = [
    {
      Name: "Turn enemy into a newt",
      IsEvil: true,
      EnergyRequired: 5.1
    },
    {
      Name: "Conjure some gold for a local charity",
      IsEvil: false,
      EnergyRequired: 2.99
    },
    {
      Name: "Give a deaf person the ability to heal",
      IsEvil: false,
      EnergyRequired: 12.2
    },
    {
      Name: "Make yourself emperor of the universe",
      IsEvil: true,
      EnergyRequired: 100.0
    },
    {
      Name: "Convince your relative your political views are correct",
      IsEvil: false,
      EnergyRequired: 2921.5
    }
  ]

  const evil = {
    title: "Book of Evil",
    spells: allSpells.filter(spell => { return spell.IsEvil === true })
  }
  const good = {
    title: "Book for the Good",
    spells: allSpells.filter(spell => { return spell.IsEvil !== true })
  }
  const displaySpellBook = (book) => {
    console.log(book.title)
    for (const spell of book.spells) {
      console.log(spell.name)
    }
  }

  displaySpellBook(good)
  console.log("")
  displaySpellBook(evil)
}
main();