function main() {
  // Put your code here
  console.log("Let's roll some dice, baby!")
  console.log("---------------------------");

  // let die1, die2 = { value: "", string: "" }
  let die1 = { value: "", string: "" }
  let die2 = { value: "", string: "" }

  const roll = () => {
    let dieValue = Math.ceil(Math.random() * 6)

    return dieValue

  }

  for (let i = 0; i < 10; i++) {
    die1.value = roll();
    die2.value = roll();

    message = `${die1.string} + ${die2.string} == ${die1.value + die2.value}`;
    if (die1 == die2) {
      message += " DOUBLES!";
    }

    console.log(message);
  }


}

main();