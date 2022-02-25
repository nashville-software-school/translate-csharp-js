// Put your code here
console.log("Let's roll some dice, baby!");
console.log("---------------------------");

for (let i = 0; i < 10; i++) {
    const die1 = Roll();
    const die2 = Roll();

    let message = `${die1} + ${die2} == ${die1.value + die2.value}`;
    if (die1.value === die2.value) {
        message += "DOUBLES!";
    }

    console.log(message);
}


function Roll() {
    const dieValue = Math.ceil(Math.random() * 6);
    const die = CreateDie(dieValue);
    return die;
}

function CreateDie(dieValue) {
    return {
        value: dieValue,
        toString: function() {
            let dieString = "Unkown";

            switch(this.value) {
                case 1:
                    dieString = "one";
                    break;
                case 2:
                    dieString = "two";
                    break;
                case 3:
                    dieString = "three";
                    break;
                case 4:
                    dieString = "four";
                    break;
                case 5:
                    dieString = "five";
                    break;
                case 6:
                    dieString = "six";
                    break; 
            }
            return dieString;
        }
    }
}