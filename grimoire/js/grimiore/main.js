// Put your code here
console.log("Do you believe in magic?");
console.log("------------------------");
const allSpells = GetAllSpells();
const goodBook = MakeGoodSpellBook(allSpells);
const evilBook = MakeEvilSpellBook(allSpells);

DisplaySpellBook(goodBook);
console.log("\n");
DisplaySpellBook(evilBook);

function DisplaySpellBook(book) {
    console.log(book.title);
    for (const aSpell of book.spells) {
        console.log(`   ${aSpell.name}`);
    }
}

function MakeEvilSpellBook(allSpells) {
    const evilBook = new Spellbook("Evil Book", allSpells.filter(spell => spell.isEvil));
    return evilBook;
}

function MakeGoodSpellBook(allSpells) {
    const goodBook = new Spellbook("Good Book", allSpells.filter(spell => !spell.isEvil));
    return goodBook;
}

function GetAllSpells() {
    return [
        new Spell("Turn enemy into a newt", true, 5.1),
        new Spell("Conjure some gold for a local charity", false, 2.99),
        new Spell("Give a deaf person the ability to heal", false, 12.2),
        new Spell("Make yourself emperor of the universe", true, 100.0),
        new Spell("Convince your relatives your political views are correct", false, 2921.5)
    ]
}

function Spellbook(bookTitle, spellArray) {
    this.title = bookTitle;
    this.spells = spellArray;
};

function Spell(name, isEvil, energyRequired) {
    this.name = name;
    this.isEvil = isEvil;
    this.energyRequired = energyRequired;
}