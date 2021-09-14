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
]

function newPrompt() {
    var randomNumber = Math.floor(Math.random() * (prompts.length));
    document.getElementById('cardDisplay').innerHTML = prompts[randomNumber];
}