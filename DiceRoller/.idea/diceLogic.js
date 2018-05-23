
var arrayCounter = 1;

//diceBlueprint and adding dice to array
function diceBlueprint(image, text, number){
    this.imageSource = image;
    this.diceName = text;
    this.diceNumber = number;
}

var dice4 = new diceBlueprint("d4_pic_small.png", "d4", 4);
var dice6 = new diceBlueprint("d6_pic_small.png", "d6", 6);
var dice8 = new diceBlueprint("d8_pic_small.png", "d8", 8);
var dice10 = new diceBlueprint("d10_pic_small.png", "d10", 10);
var dice12 = new diceBlueprint("d12_pic_small.png", "d12", 12);
var dice20 = new diceBlueprint("d20_pic_small.png", "d20", 20);
var allDice = [dice4,dice6, dice8, dice10, dice12, dice20];


//DiceRollFunctionality + Print to Page on ButtonClick

function diceRoll(diceRandomNumber){

    var randomNumber = Math.floor(Math.random() * diceRandomNumber) + 1;
    return randomNumber;
}

function printNumber(number) {
    var placeholder = document.getElementById("test");
    placeholder.innerHTML = number;
}

var button = document.getElementById("dice");
button.onclick = function() {
    var result = diceRoll(allDice[arrayCounter].diceNumber);
    printNumber(result);
};


//left and right arrow button functionality

function diceChange(){
    document.getElementById("dice").src = allDice[arrayCounter].imageSource;
    document.getElementById("diceName").innerHTML = allDice[arrayCounter].diceName;
}


var leftButton = document.getElementById("leftButton");
leftButton.onclick = function () {

    arrayCounter++;
    if(arrayCounter>5){
        arrayCounter = 0;
    }

   diceChange();

}
var rightButton = document.getElementById("rightButton");
rightButton.onclick = function () {
    arrayCounter--;
    if(arrayCounter<0){
        arrayCounter = 5;
    }

    diceChange();
}

