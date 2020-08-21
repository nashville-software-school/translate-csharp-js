function main() {
  // Put your code here
  console.log("Let's roll some dice, baby!")
  console.log("---------------------------")

  for (let i = 0; i < 10; i++) {
    const die1 = die.roll()
    const die2 = die.roll()

    let message = `${die.display(die1)} + ${die.display(die2)} == ${die1 + die2}`

    if (die1 === die2) {
      message += " DOUBLES!"
    }

    console.log(message)

  }
}

const die = {
  roll() {
    const dieFace = Math.floor(Math.random() * 7)
    return dieFace
  },
  display(num) {
    let dieString = ""
    switch (num) {
      case 1:
        dieString = "\u2680";
        break;
      case 2:
        dieString = "\u2681";
        break;
      case 3:
        dieString = "\u2682";
        break;
      case 4:
        dieString = "\u2683";
        break;
      case 5:
        dieString = "\u2684";
        break;
      case 6:
        dieString = "\u2685";
        break;
    }

    return dieString;
  }
}

main();