function main() {
  // Put your code here
  console.log("Let's roll some dice, baby!");
  console.log("---------------------------");


  for (let i = 0; i < 10; i++) {
    let die1 = dieRoll();
    let die2 = dieRoll();

    let message = `${die1} + ${die2} = ${die1 + die2}`;
    if (die1 === die2) {
      message += " DOUBLES!";
    }

    console.log(message);
  }

}

const dieRoll = () => {
  return parseInt(Math.random() * (7 - 1) + 1);
}


main();