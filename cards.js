var prompts = [
    "You dip your chips in sauce? I dip mine in ________.",
    "Frazer really likes ________.",
    "Gareth really likes ________.",
    "Aleisha really likes _____________.",
    "Chloe really likes _____________.",
    "Mountainview Highschool has now officaly banned _________.",
    "A brand new “position”, the _____________.",
    "Introducing the Mountainview Highschool ______________ club.",
    "The real reason why Mr Gibbs left",
    "A brand new“ position”, the _____________.",
    "Nine out of Ten students agreed that there needs to be more _________ in the learning enviroment.",
    "What left this stain on my couch?",
    "Money can't buy me love, but it can buy me _________.",
    "Bought a huge 70inch 4k tv, I can finaly watch ________ now.",
    "I never leave the house without ______.",
    "In order to be hip with the kids, (card reader) is actively engaged in ________.",
    "Life would be better without ______.",
    "Im not like other girls, I'm __________."

]

function newPrompt() {
    var randomNumber = Math.floor(Math.random() * (prompts.length));
    document.getElementById('cardDisplay').innerHTML = prompts[randomNumber];
}

newPrompt();