var prompts = [
    "You dip your chips in sauce? I dip mine in ________.",
    "Frazer really likes ________.",
    "Gareth really likes ________.",
    "Chloe really likes _____________.",
    "Ivan really likes __________.",
    "Mountainview Highschool has now officially banned _________.",
    "A brand new “position”, the ____________.",
    "Introducing the Mountainview Highschool ________ club.",
    "The real reason why Mr Gibbs left.",
    "Nine out of Ten students agreed that there needs to be more _________ in the learning environment.",
    "What left this stain on my couch?",
    "Money can't buy me love, but it can buy me _________.",
    "Bought a huge 70inch 4k tv, I can finally watch ________ now.",
    "I never leave the house without ______.",
    "In order to be hip with the kids, (card reader) is actively engaged in ________.",
    "Life would be better without ______.",
    "Im not like other girls, I'm __________.",
    "What is in (card reader's) wardrobe?",
    "When Whenua Commons got upgraded, what it really needed was ______.",
    "I can't stand it when people graffiti _________ and __________ in the bathrooms.",
    "Define: Bruh Moment.",
    "Kamar has just been updated, you can now add ________.",
    "If MVHS had a Room 69, it would have ________ and _________.",
    "1,2,3,4, whats behind that bloody door?",
    "New from Hot Wheels, the _____-mobile"

]

function newPrompt() {
    var randomNumber = Math.floor(Math.random() * (prompts.length));
    document.getElementById('cardDisplay').innerHTML = prompts[randomNumber];
}

newPrompt();
